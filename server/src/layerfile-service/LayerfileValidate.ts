import { LayerfileParserListener } from './antlr/LayerfileParserListener'
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Diagnostic, DiagnosticSeverity, Range } from "vscode-languageserver-types";
import { LayerfileLexer } from "./antlr/LayerfileLexer"
import { LayerfileParser, CheckpointContext, CloneContext, FromContext, Build_envContext, RunContext, MemoryContext, CopyContext, EnvContext, Expose_websiteContext, Secret_envContext, Setup_fileContext, SplitContext, UserContext, WorkdirContext, OtherContext, LayerfileContext } from './antlr/LayerfileParser';
import { CharStreams, CommonTokenStream, Token, ConsoleErrorListener, ANTLRErrorListener, Recognizer, RecognitionException, ParserRuleContext } from 'antlr4ts';
import * as path from 'path';
import * as fs from 'fs';
import { Interval } from 'antlr4ts/misc/Interval';


const addContextDiagnostic = (ctx : ParserRuleContext, severity : DiagnosticSeverity, message : string, errors : Diagnostic[]) => {
	if (ctx.stop === undefined || ctx.stop.text === undefined) {
		return
	}
	errors.push({
		severity,
		range : {
			start : {
				line : ctx.start.line - 1,
				character : ctx.start.charPositionInLine
			},
			end : {
				line : ctx.stop?.line - 1,
				character : ctx.stop.charPositionInLine + ctx.stop.text.length
			}
		},
		message
	})
}


const addTokenDiagnostic = (token : Token, severity : DiagnosticSeverity, message : string, errors : Diagnostic[]) => {
	if (token.text === undefined) {
		return;
	}
	errors.push({
		severity,
		range : {
			start : {
				line : token.line - 1,
				character : token.charPositionInLine
			},
			end : {
				line : token.line - 1,
				character : token.charPositionInLine + token.text.length
			}
		},
		message
	})
}

class LayerValidator implements LayerfileParserListener {
	errors : Diagnostic[] = []
	document: TextDocument;
	constructor(document : TextDocument) {
		this.document = document;
	}

	enterLayerfile?: ((ctx: LayerfileContext) => void) | undefined;

	enterCheckpoint(ctx : CheckpointContext) {
		const checkpointValue = ctx.CHECKPOINT_VALUE();
		if (checkpointValue.length > 1) {
			const extraVal = checkpointValue.splice(1)
			for (var val of extraVal) {
				addTokenDiagnostic(
					val.symbol,
					DiagnosticSeverity.Error,
					"checkpoint has more than one names specified",
					this.errors
				)
			}
		}
	}

	enterClone(ctx : CloneContext) {
		const cloneValue =  ctx.CLONE_VALUE();
		if (cloneValue.length < 2) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"CLONE invalid, format is CLONE (DEFAULT=master) [url] (source...) [destination]",
				this.errors
			)
		}
	}

	enterFrom(ctx : FromContext) {
		const fromData = ctx.FROM_DATA();
		if (fromData === undefined || fromData.text.trim() === "") {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"FROM requires an image name after it",
				this.errors
			)
			return
		}
		const fromText = fromData.text.trim()
		if (fromText.startsWith("vm/")) {
			if (fromText != "vm/ubuntu:18.04" && fromText != "vm/rails:2.7.1") {
				addTokenDiagnostic(
					fromData.symbol,
					DiagnosticSeverity.Error,
					"the only VM supported are ubuntu:18.04 and rails:2.7.1 for now",
					this.errors
				)
			}
			return
		}
		//only support document open on the current os
		if (!this.document.uri.startsWith("file://")) {
			return
		}
		const docPath = this.document.uri.replace("file://", "")
		const docDirectory = path.dirname(docPath)
		const parentLayerfile = path.join(docDirectory, fromText, "Layerfile")
		if (!fs.existsSync(parentLayerfile)) {
			addTokenDiagnostic(
				fromData.symbol,
				DiagnosticSeverity.Error,
				"Directory does not contain a Layerfile",
				this.errors
			)
		}
	}

	enterBuild_env(ctx:  Build_envContext) {
		const buildValue = ctx.BUILD_ENV_VALUE();
		if (buildValue.length == 0) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"BUILD ENV must be followed by at least one value",
				this.errors
			)
		}
	}

	enterRun(ctx : RunContext) {
		const runData = ctx.RUN_DATA();
		if (runData === undefined || runData.text.trim() === "") {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Warning,
				"no RUN instruction specified",
				this.errors
			)
			return
		}
	}

	enterMemory(ctx : MemoryContext) {
		const memoryAmount = ctx.MEMORY_AMOUNT();
		if (memoryAmount === undefined || memoryAmount.text.trim() === "") {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"Memory amount does not exist",
				this.errors
			)
			return
		}
		const memoryRegex = /^[0-9]+(G|g|M|m|K|k)$/
		if (memoryAmount.symbol.text !== undefined && !memoryAmount.symbol.text.trim().match(memoryRegex)) {
			addTokenDiagnostic(
				memoryAmount.symbol,
				DiagnosticSeverity.Error,
				"Memory amount must be of format MEMORY [number](K|M|G)",
				this.errors
			)
		}
	}

	enterCopy(ctx: CopyContext) {
		const copyValue = ctx.FILE();
		if (copyValue.length < 2) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"usage: COPY [src...] [target]",
				this.errors
			)
			return
		}
		if (copyValue.length >= 3 && !copyValue[copyValue.length - 1].symbol.text?.endsWith("/")) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"if copying multiple files, the destination must end with '/'",
				this.errors
			)
			return
		}
	}

	enterEnv(ctx: EnvContext) {
		const env = ctx.ENV_VALUE();
		if (env.length === 0) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"ENV must be followed by at least one var=value pair",
				this.errors
			)
		}
	}

	enterSecret(ctx: Secret_envContext) {
		const secrets = ctx.SECRET_ENV_VALUE();
		if (secrets.length === 0) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"SECRET ENV must be followed by at least one secret name",
				this.errors
			)
		}
	}


	enterExpose_website(ctx: Expose_websiteContext) {
		const webregex = /^(?:([^ 	:\/]+):\/\/)?([^ 	:\/]+)(?::([^ 	:\/]+))?/g
		const portregex = /^\d+$/
		const webItems = ctx.WEBSITE_ITEM()
		if (webItems.length == 0 || webItems[0].symbol.text === undefined) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"EXPOSE WEBSITE requires a URL immediately after it",
				this.errors
			)
			return
		}
		//check if it is a port
		if (webItems[0].symbol.text.match(portregex)) {
			return
		}
		const match = [...webItems[0].symbol.text.matchAll(webregex)][0]
		if (match === undefined) {
			addTokenDiagnostic(
				webItems[0].symbol,
				DiagnosticSeverity.Error,
				`EXPOSE WEBSITE was of incorrect form: ${webItems[0].symbol.text}`,
				this.errors
			)
			return
		}
		if (match[2] !== "localhost") {
			addTokenDiagnostic(
				webItems[0].symbol,
				DiagnosticSeverity.Error,
				`EXPOSE WEBSITE must expose 'localhost', not ${match[2]}'. Try EXPOSE WEBSITE 80`,
				this.errors
			)
			return
		}
		if (match[1] !== "http" && match[1] !== "https") {
			addTokenDiagnostic(
				webItems[0].symbol,
				DiagnosticSeverity.Error,
				`EXPOSE WEBSITE must be of the form http://localhost, not ${match[1]}://localhost`,
				this.errors
			)
			return
		}
		if (isNaN(parseInt(match[3]))) {
			addTokenDiagnostic(
				webItems[0].symbol,
				DiagnosticSeverity.Error,
				`invalid port specified: ${match[3]}`,
				this.errors
			)
			return
		}
		if (webItems.length > 2) {
			addTokenDiagnostic(
				webItems[2].symbol,
				DiagnosticSeverity.Error,
				"Invalid extra parameters provided",
				this.errors
			)
		}
	}

	enterSetup_file(ctx: Setup_fileContext) {
		const files = ctx.FILE();
		if (files.length === 0) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"usage: SETUP FILE [file...]",
				this.errors
			)
		}
	}

	enterSplit(ctx: SplitContext) {
		const splitNumRegex = /^\d+$/;
		const splitNum = ctx.SPLIT_NUMBER();
		if (splitNum === undefined || !splitNum.symbol.text?.trim().match(splitNumRegex)) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"usage is SPLIT (number)",
				this.errors
			)
		}
	}

	enterUser(ctx: UserContext) {
		const user = ctx.USER_NAME();
		if (user === undefined) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"USER instruction is missing a username",
				this.errors
			)
		}
	}

	enterWorkdir(ctx: WorkdirContext) {
		const workdir = ctx.FILE();
		if (workdir.length != 1) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				"usage: WORKDIR [directory]",
				this.errors
			)
		}
	}

	enterOther(ctx: OtherContext) {
		if (ctx.stop) {
			addContextDiagnostic(
				ctx,
				DiagnosticSeverity.Error,
				`Unknown instruction ${ctx.start.inputStream?.getText(new Interval(ctx.start.startIndex, ctx.stop?.stopIndex))}`,
				this.errors
			)
		}
	}
}


export function validateLayerfile(document: TextDocument): Diagnostic[] {
	var text = document.getText();
	var chars = CharStreams.fromString(text);
	var lexer = new LayerfileLexer(chars);
	var tokenStream = new CommonTokenStream(lexer);
	var parser = new LayerfileParser(tokenStream);
	let tree = parser.layerfile()
	// Create the listener
	const listener : LayerfileParserListener = new LayerValidator(document);
	// Use the entry point for listeners
	ParseTreeWalker.DEFAULT.walk(listener, tree)
	const errors = [...(listener as LayerValidator).errors];
	return errors;
}

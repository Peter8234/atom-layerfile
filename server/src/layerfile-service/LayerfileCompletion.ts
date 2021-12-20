import * as c3 from "antlr4-c3";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TextDocument } from "vscode-languageserver-textdocument";
import { CompletionItem, Position } from "vscode-languageserver-types";
import { LayerfileLexer } from "./antlr/LayerfileLexer";
import { LayerfileParser } from "./antlr/LayerfileParser";

const Directive = [
	LayerfileLexer.BUTTON,
	LayerfileLexer.CACHE,
	LayerfileLexer.CHECKPOINT,
	LayerfileLexer.CLONE,
	LayerfileLexer.COPY,
	LayerfileLexer.ENV,
	LayerfileLexer.BUILD_ENV,
	LayerfileLexer.FROM,
	LayerfileLexer.MEMORY,
	LayerfileLexer.RUN,
	LayerfileLexer.RUN_REPEATABLE,
	LayerfileLexer.RUN_BACKGROUND,
	LayerfileLexer.SECRET_ENV,
	LayerfileLexer.SETUP_FILE,
	LayerfileLexer.SKIP_REMAINING_IF,
	LayerfileLexer.SPLIT,
	LayerfileLexer.EXPOSE_WEBSITE,
	LayerfileLexer.USER,
	LayerfileLexer.WAIT,
	LayerfileLexer.WORKDIR,
]

const PresetVariables = [
	"SUBDOMAIN",
	"DEPLOYMENT_HOST",
	"CI",
	"DEBIAN_FRONTEND",
	"GIT_TAG",
	"GIT_COMMIT",
	"GIT_SHORT_COMMIT",
	"GIT_COMMIT_TITLE",
	"GIT_CLONE_USER",
	"EXPOSE_WEBSITE_HOST",
	"WEBAPPIO",
	"GIT_BRANCH",
	"JOB_ID",
	"PULL_REQUEST_URL",
	"REPOSITORY_NAME",
	"REPOSITORY_OWNER",
	"ORGANIZATION_NAME",
	"RUNNER_ID",
	"RETRY_INDEX",
	"API_EXTRA"
]


type TokenPosition = {
	index : number,
	text : string
}

function computeTokenIndex(parseTree: ParseTree, caretPosition: Position): TokenPosition | undefined {
    if(parseTree instanceof TerminalNode) {
        return computeTokenIndexOfTerminalNode(parseTree, caretPosition);
    } else {
        return computeTokenIndexOfChildNode(parseTree, caretPosition);
    }
}

function computeTokenIndexOfTerminalNode(parseTree: TerminalNode, caretPosition: Position) {
    let start = parseTree.symbol.charPositionInLine;
    let stop = parseTree.symbol.charPositionInLine + parseTree.text.length;
    if (parseTree.symbol.line - 1 == caretPosition.line && start <= caretPosition.character && stop >= caretPosition.character) {
        return {
			text: parseTree.text.substring(0, caretPosition.character - start),
			index: parseTree.symbol.tokenIndex,
		}
    } else {
        return undefined;
    }
}
function computeTokenIndexOfChildNode(parseTree: ParseTree, caretPosition: Position) {
    for (let i = 0; i < parseTree.childCount; i++) {
        let index = computeTokenIndex(parseTree.getChild(i), caretPosition);
        if (index !== undefined) {
            return index;
        }
    }
    return undefined;
}

export function computeCompletion(document: TextDocument, position : Position) : CompletionItem[] {
	const text = document.getText();
	const chars = CharStreams.fromString(text);
	const lexer = new LayerfileLexer(chars);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new LayerfileParser(tokenStream);
	const parseTree = parser.layerfile();
	const core = new c3.CodeCompletionCore(parser);
	const TokenPosition = computeTokenIndex(parseTree, position);
	if (TokenPosition !== undefined) {
		const completion : CompletionItem[] = [];
		const candidates = core.collectCandidates(TokenPosition.index)
		candidates.tokens.forEach((_, k) => {
			if (k == LayerfileLexer.FROM_DATA) {
				// current supported vm
				completion.push(...[
					{
						label:"vm/ubuntu:18.04",
						detail: "os",
					},
					{
						label: "vm/rails:2.7.1",
						detail: "os",
					}
				])
			} else if (Directive.includes(k)) {
				const directiveName = parser.vocabulary.getLiteralName(k);
				if (directiveName) {
					completion.push({
						label : directiveName.replaceAll("'", ""),
						detail: "directive"
					});
				}
			} else if ((k == LayerfileLexer.SKIP_REMAINING_IF_VALUE && !TokenPosition.text.includes("=")) ||
			    		k == LayerfileLexer.BUILD_ENV_VALUE) {
				completion.push(
					...PresetVariables.map((variables) => {
						return {
							label: variables,
							detail: "preset variable"
						}
					})
				)
			}
		})
		return completion;
	}
	return []
}
import { SemanticTokens, SemanticTokenTypes} from 'vscode-languageserver-types';
import * as antlr4 from "antlr4ts";
import { LayerfileLexer } from "./antlr/LayerfileLexer"
import { SemanticTokensLegend } from 'vscode-languageserver-protocol';
import { SemanticTokensBuilder } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';


interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

const tokenTypes = new Map<string, number>();


const handleNormalToken = (token : antlr4.Token, tokenType : string, tokenArray : IParsedToken[]) => {
	if (!token.text) {
		return
	}
	tokenArray.push({
		line : token.line - 1,
		startCharacter : token.charPositionInLine,
		length : token.text.length,
		tokenType: tokenType,
		tokenModifiers: []
	})
}

const handleKeyValToken = (token : antlr4.Token, tokenArray : IParsedToken[], types : {
	keyType : string,
	valType : string,
	split: RegExp
}) => {
	if (!token.text) {
		return
	}
	var keyVal = token.text.split(types.split);
	if (keyVal.length >= 2) {
		let [key, value] = keyVal;
		tokenArray.push({
			line : token.line - 1,
			startCharacter : token.charPositionInLine,
			length : key.length,
			tokenType: types.keyType,
			tokenModifiers: []
		})
		tokenArray.push({
			line : token.line - 1,
			startCharacter : token.charPositionInLine + token.text.indexOf(value, key.length),
			length : token.text.length - token.text.indexOf(value, key.length),
			tokenType: types.valType,
			tokenModifiers: []
		})
	}
}

const mapTokens = (token : antlr4.Token, tokenArray : IParsedToken[])  => {
	switch (token.type) {
		case LayerfileLexer.BUTTON:
		case LayerfileLexer.CACHE:
		case LayerfileLexer.CHECKPOINT:
		case LayerfileLexer.CLONE:
		case LayerfileLexer.COPY:
		case LayerfileLexer.ENV:
		case LayerfileLexer.BUILD_ENV:
		case LayerfileLexer.FROM:
		case LayerfileLexer.MEMORY:
		case LayerfileLexer.RUN:
		case LayerfileLexer.RUN_BACKGROUND:
		case LayerfileLexer.RUN_REPEATABLE:
		case LayerfileLexer.SECRET_ENV:
		case LayerfileLexer.SETUP_FILE:
		case LayerfileLexer.SKIP_REMAINING_IF:
		case LayerfileLexer.SPLIT:
		case LayerfileLexer.EXPOSE_WEBSITE:
		case LayerfileLexer.USER:
		case LayerfileLexer.WAIT:
		case LayerfileLexer.WORKDIR:
		case LayerfileLexer.SKIP_REMAINING_IF_AND:
			handleNormalToken(token, SemanticTokenTypes.keyword, tokenArray)
			return
		case LayerfileLexer.COMMENT:
			handleNormalToken(token, SemanticTokenTypes.comment, tokenArray)
			return
		case LayerfileLexer.BUILD_ENV_VALUE:
		case LayerfileLexer.CHECKPOINT_VALUE:
		case LayerfileLexer.BUTTON_DATA:
		case LayerfileLexer.SECRET_ENV_VALUE:
		case LayerfileLexer.USER_NAME:
			handleNormalToken(token, SemanticTokenTypes.variable, tokenArray)
			return
		case LayerfileLexer.FILE:
			handleNormalToken(token, SemanticTokenTypes.string, tokenArray)
			return
		case LayerfileLexer.ENV_VALUE:
			handleKeyValToken(token, tokenArray, {
				keyType: SemanticTokenTypes.variable,
				valType: SemanticTokenTypes.variable,
				split: /\s*=\s*/
			})
			return
		case LayerfileLexer.SKIP_REMAINING_IF_VALUE:
			handleKeyValToken(token, tokenArray, {
				keyType: SemanticTokenTypes.variable,
				valType: SemanticTokenTypes.string,
				split: /!=~|!=|=~|=/
			})
			return
		default:
			return
	}
}


function encodeTokenType(tokenType: string): number {
	if (tokenTypes.has(tokenType)) {
		return tokenTypes.get(tokenType)!;
	}
	return 0;
}

function parseText(text: string): IParsedToken[] {
	const r: IParsedToken[] = [];
	var chars = antlr4.CharStreams.fromString(text)
	var lexer = new LayerfileLexer(chars);
	var tokens = lexer.getAllTokens();
	for (const token of tokens) {
		mapTokens(token, r)
	}
	return r;
}


export const legend = (function () : SemanticTokensLegend {
	const tokenTypesLegend = [
		SemanticTokenTypes.comment,
		SemanticTokenTypes.variable,
		SemanticTokenTypes.string,
		SemanticTokenTypes.keyword
	];
	tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));
	return {
		tokenTypes : tokenTypesLegend,
		tokenModifiers : []
	}
})();

export function computeSemanticTokens(document: TextDocument) : SemanticTokens {
	const allTokens = parseText(document.getText());
	const builder = new SemanticTokensBuilder();
	allTokens.forEach((token) => {
		builder.push(token.line, token.startCharacter, token.length, encodeTokenType(token.tokenType), 0);
	});
	return builder.build();
}


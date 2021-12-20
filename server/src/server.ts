'use strict';
import {
	createConnection, InitializeParams, InitializeResult,
	TextDocuments, TextDocumentSyncKind, DidChangeConfigurationNotification, TextDocumentPositionParams,
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { legend, computeSemanticTokens, validateLayerfile, computeHover , computeCompletion } from './layerfile-service'


const connection = createConnection();
connection.console.info(`server running ${process.version}`);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// LSP supports code completion
			completionProvider: {
				resolveProvider: false
			},
			// LSP support semantic tokens
			semanticTokensProvider: {
				full: {
					delta: false
				},
				legend
			},
			hoverProvider: true,
		}
	};
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});


connection.onCompletion((textDocumentPosition) => {
	const document = documents.get(textDocumentPosition.textDocument.uri);
	if (!document) {
		return null;
	}
	return computeCompletion(document, textDocumentPosition.position);
});

connection.onHover((textDocumentPosition: TextDocumentPositionParams) => {
	const document = documents.get(textDocumentPosition.textDocument.uri);
	if (!document) {
		return null;
	}
	return computeHover(document, textDocumentPosition.position)
});

documents.onDidChangeContent(change => {
	connection.sendDiagnostics({
		uri: change.document.uri,
		diagnostics : validateLayerfile(change.document)
	})
});


connection.languages.semanticTokens.on((semanticTokenParams) => {
	const document = documents.get(semanticTokenParams.textDocument.uri);
	if (!document) {
		return {
			data: []
		}
	}
	return computeSemanticTokens(document);
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);
connection.listen();

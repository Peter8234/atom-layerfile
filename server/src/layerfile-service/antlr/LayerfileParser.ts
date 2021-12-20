// Generated from LayerfileParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LayerfileParserListener } from "./LayerfileParserListener";

export class LayerfileParser extends Parser {
	public static readonly WS = 1;
	public static readonly COMMENT = 2;
	public static readonly BUTTON = 3;
	public static readonly CACHE = 4;
	public static readonly CHECKPOINT = 5;
	public static readonly CLONE = 6;
	public static readonly COPY = 7;
	public static readonly ENV = 8;
	public static readonly BUILD_ENV = 9;
	public static readonly FROM = 10;
	public static readonly MEMORY = 11;
	public static readonly RUN = 12;
	public static readonly RUN_BACKGROUND = 13;
	public static readonly RUN_REPEATABLE = 14;
	public static readonly SECRET_ENV = 15;
	public static readonly SETUP_FILE = 16;
	public static readonly SKIP_REMAINING_IF = 17;
	public static readonly SPLIT = 18;
	public static readonly EXPOSE_WEBSITE = 19;
	public static readonly USER = 20;
	public static readonly WAIT = 21;
	public static readonly WORKDIR = 22;
	public static readonly OTHER = 23;
	public static readonly BUILD_ENV_VALUE = 24;
	public static readonly BUILD_ENV_WS = 25;
	public static readonly BUILD_ENV_EOL = 26;
	public static readonly BUTTON_DATA = 27;
	public static readonly CHECKPOINT_VALUE = 28;
	public static readonly CHECKPOINT_WS = 29;
	public static readonly CHECKPOINT_EOL = 30;
	public static readonly CLONE_VALUE = 31;
	public static readonly CLONE_WS = 32;
	public static readonly CLONE_EOL = 33;
	public static readonly ENV_VALUE = 34;
	public static readonly ENV_WS = 35;
	public static readonly ENV_EOL = 36;
	public static readonly WEBSITE_EOL = 37;
	public static readonly WEBSITE_ITEM = 38;
	public static readonly WEBSITE_WS = 39;
	public static readonly FROM_DATA = 40;
	public static readonly MEMORY_AMOUNT = 41;
	public static readonly RUN_DATA = 42;
	public static readonly RUN_NEXT = 43;
	public static readonly SECRET_ENV_VALUE = 44;
	public static readonly SECRET_ENV_WS = 45;
	public static readonly SECRET_ENV_EOL = 46;
	public static readonly SKIP_REMAINING_IF_VALUE = 47;
	public static readonly SKIP_REMAINING_IF_AND = 48;
	public static readonly SKIP_REMAINING_IF_WS = 49;
	public static readonly SKIP_REMAINING_IF_EOL = 50;
	public static readonly SPLIT_NUMBER = 51;
	public static readonly SPLIT_WS = 52;
	public static readonly USER_NAME = 53;
	public static readonly END_OF_FILES = 54;
	public static readonly FILE = 55;
	public static readonly FILE_WS = 56;
	public static readonly RULE_layerfile = 0;
	public static readonly RULE_cmd = 1;
	public static readonly RULE_button = 2;
	public static readonly RULE_cache = 3;
	public static readonly RULE_checkpoint = 4;
	public static readonly RULE_clone = 5;
	public static readonly RULE_copy = 6;
	public static readonly RULE_env = 7;
	public static readonly RULE_build_env = 8;
	public static readonly RULE_from = 9;
	public static readonly RULE_memory = 10;
	public static readonly RULE_run = 11;
	public static readonly RULE_run_background = 12;
	public static readonly RULE_run_repeatable = 13;
	public static readonly RULE_secret_env = 14;
	public static readonly RULE_setup_file = 15;
	public static readonly RULE_skip_remain_if = 16;
	public static readonly RULE_split = 17;
	public static readonly RULE_expose_website = 18;
	public static readonly RULE_user = 19;
	public static readonly RULE_wait = 20;
	public static readonly RULE_workdir = 21;
	public static readonly RULE_other = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"layerfile", "cmd", "button", "cache", "checkpoint", "clone", "copy", 
		"env", "build_env", "from", "memory", "run", "run_background", "run_repeatable", 
		"secret_env", "setup_file", "skip_remain_if", "split", "expose_website", 
		"user", "wait", "workdir", "other",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'BUTTON'", "'CACHE'", "'CHECKPOINT'", 
		"'CLONE '", "'COPY'", "'ENV'", "'BUILD ENV '", "'FROM '", "'MEMORY '", 
		"'RUN '", "'RUN BACKGROUND '", "'RUN REPEATABLE '", "'SECRET ENV '", "'SETUP FILE '", 
		"'SKIP REMAINING IF '", "'SPLIT '", "'EXPOSE WEBSITE '", "'USER '", "'WAIT '", 
		"'WORKDIR '", undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "'AND'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WS", "COMMENT", "BUTTON", "CACHE", "CHECKPOINT", "CLONE", 
		"COPY", "ENV", "BUILD_ENV", "FROM", "MEMORY", "RUN", "RUN_BACKGROUND", 
		"RUN_REPEATABLE", "SECRET_ENV", "SETUP_FILE", "SKIP_REMAINING_IF", "SPLIT", 
		"EXPOSE_WEBSITE", "USER", "WAIT", "WORKDIR", "OTHER", "BUILD_ENV_VALUE", 
		"BUILD_ENV_WS", "BUILD_ENV_EOL", "BUTTON_DATA", "CHECKPOINT_VALUE", "CHECKPOINT_WS", 
		"CHECKPOINT_EOL", "CLONE_VALUE", "CLONE_WS", "CLONE_EOL", "ENV_VALUE", 
		"ENV_WS", "ENV_EOL", "WEBSITE_EOL", "WEBSITE_ITEM", "WEBSITE_WS", "FROM_DATA", 
		"MEMORY_AMOUNT", "RUN_DATA", "RUN_NEXT", "SECRET_ENV_VALUE", "SECRET_ENV_WS", 
		"SECRET_ENV_EOL", "SKIP_REMAINING_IF_VALUE", "SKIP_REMAINING_IF_AND", 
		"SKIP_REMAINING_IF_WS", "SKIP_REMAINING_IF_EOL", "SPLIT_NUMBER", "SPLIT_WS", 
		"USER_NAME", "END_OF_FILES", "FILE", "FILE_WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LayerfileParser._LITERAL_NAMES, LayerfileParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LayerfileParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "LayerfileParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return LayerfileParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LayerfileParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LayerfileParser._ATN, this);
	}
	// @RuleVersion(0)
	public layerfile(): LayerfileContext {
		let _localctx: LayerfileContext = new LayerfileContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LayerfileParser.RULE_layerfile);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LayerfileParser.COMMENT) | (1 << LayerfileParser.BUTTON) | (1 << LayerfileParser.CACHE) | (1 << LayerfileParser.CHECKPOINT) | (1 << LayerfileParser.CLONE) | (1 << LayerfileParser.COPY) | (1 << LayerfileParser.ENV) | (1 << LayerfileParser.BUILD_ENV) | (1 << LayerfileParser.FROM) | (1 << LayerfileParser.MEMORY) | (1 << LayerfileParser.RUN) | (1 << LayerfileParser.RUN_BACKGROUND) | (1 << LayerfileParser.RUN_REPEATABLE) | (1 << LayerfileParser.SECRET_ENV) | (1 << LayerfileParser.SETUP_FILE) | (1 << LayerfileParser.SKIP_REMAINING_IF) | (1 << LayerfileParser.SPLIT) | (1 << LayerfileParser.EXPOSE_WEBSITE) | (1 << LayerfileParser.USER) | (1 << LayerfileParser.WAIT) | (1 << LayerfileParser.WORKDIR))) !== 0)) {
				{
				{
				this.state = 46;
				this.cmd();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
			this.match(LayerfileParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmd(): CmdContext {
		let _localctx: CmdContext = new CmdContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LayerfileParser.RULE_cmd);
		try {
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.button();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.cache();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 56;
				this.checkpoint();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 57;
				this.from();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 58;
				this.clone();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 59;
				this.copy();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 60;
				this.env();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 61;
				this.build_env();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 62;
				this.from();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 63;
				this.memory();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 64;
				this.run();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 65;
				this.run_background();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 66;
				this.run_repeatable();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 67;
				this.secret_env();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 68;
				this.setup_file();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 69;
				this.skip_remain_if();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 70;
				this.split();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 71;
				this.expose_website();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 72;
				this.user();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 73;
				this.wait();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 74;
				this.workdir();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 75;
				this.match(LayerfileParser.COMMENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public button(): ButtonContext {
		let _localctx: ButtonContext = new ButtonContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LayerfileParser.RULE_button);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this.match(LayerfileParser.BUTTON);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.BUTTON_DATA) {
				{
				this.state = 79;
				this.match(LayerfileParser.BUTTON_DATA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cache(): CacheContext {
		let _localctx: CacheContext = new CacheContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LayerfileParser.RULE_cache);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(LayerfileParser.CACHE);
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 83;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 88;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 89;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public checkpoint(): CheckpointContext {
		let _localctx: CheckpointContext = new CheckpointContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LayerfileParser.RULE_checkpoint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 91;
			this.match(LayerfileParser.CHECKPOINT);
			this.state = 95;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.CHECKPOINT_VALUE) {
				{
				{
				this.state = 92;
				this.match(LayerfileParser.CHECKPOINT_VALUE);
				}
				}
				this.state = 97;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 98;
			this.match(LayerfileParser.CHECKPOINT_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public clone(): CloneContext {
		let _localctx: CloneContext = new CloneContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LayerfileParser.RULE_clone);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(LayerfileParser.CLONE);
			this.state = 104;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.CLONE_VALUE) {
				{
				{
				this.state = 101;
				this.match(LayerfileParser.CLONE_VALUE);
				}
				}
				this.state = 106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 107;
			this.match(LayerfileParser.CLONE_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public copy(): CopyContext {
		let _localctx: CopyContext = new CopyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LayerfileParser.RULE_copy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			this.match(LayerfileParser.COPY);
			this.state = 110;
			this.match(LayerfileParser.FILE);
			this.state = 111;
			this.match(LayerfileParser.FILE);
			this.state = 112;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public env(): EnvContext {
		let _localctx: EnvContext = new EnvContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LayerfileParser.RULE_env);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(LayerfileParser.ENV);
			this.state = 118;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.ENV_VALUE) {
				{
				{
				this.state = 115;
				this.match(LayerfileParser.ENV_VALUE);
				}
				}
				this.state = 120;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 121;
			this.match(LayerfileParser.ENV_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public build_env(): Build_envContext {
		let _localctx: Build_envContext = new Build_envContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LayerfileParser.RULE_build_env);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(LayerfileParser.BUILD_ENV);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.BUILD_ENV_VALUE) {
				{
				{
				this.state = 124;
				this.match(LayerfileParser.BUILD_ENV_VALUE);
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 130;
			this.match(LayerfileParser.BUILD_ENV_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public from(): FromContext {
		let _localctx: FromContext = new FromContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LayerfileParser.RULE_from);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(LayerfileParser.FROM);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.FROM_DATA) {
				{
				this.state = 133;
				this.match(LayerfileParser.FROM_DATA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public memory(): MemoryContext {
		let _localctx: MemoryContext = new MemoryContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LayerfileParser.RULE_memory);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 136;
			this.match(LayerfileParser.MEMORY);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.MEMORY_AMOUNT) {
				{
				this.state = 137;
				this.match(LayerfileParser.MEMORY_AMOUNT);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public run(): RunContext {
		let _localctx: RunContext = new RunContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LayerfileParser.RULE_run);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 140;
			this.match(LayerfileParser.RUN);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.RUN_DATA) {
				{
				this.state = 141;
				this.match(LayerfileParser.RUN_DATA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public run_background(): Run_backgroundContext {
		let _localctx: Run_backgroundContext = new Run_backgroundContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LayerfileParser.RULE_run_background);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(LayerfileParser.RUN_BACKGROUND);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.RUN_DATA) {
				{
				this.state = 145;
				this.match(LayerfileParser.RUN_DATA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public run_repeatable(): Run_repeatableContext {
		let _localctx: Run_repeatableContext = new Run_repeatableContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LayerfileParser.RULE_run_repeatable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 148;
			this.match(LayerfileParser.RUN_REPEATABLE);
			this.state = 150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.RUN_DATA) {
				{
				this.state = 149;
				this.match(LayerfileParser.RUN_DATA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public secret_env(): Secret_envContext {
		let _localctx: Secret_envContext = new Secret_envContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LayerfileParser.RULE_secret_env);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(LayerfileParser.SECRET_ENV);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.SECRET_ENV_VALUE) {
				{
				{
				this.state = 153;
				this.match(LayerfileParser.SECRET_ENV_VALUE);
				}
				}
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 159;
			this.match(LayerfileParser.SECRET_ENV_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setup_file(): Setup_fileContext {
		let _localctx: Setup_fileContext = new Setup_fileContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, LayerfileParser.RULE_setup_file);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 161;
			this.match(LayerfileParser.SETUP_FILE);
			this.state = 165;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 162;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 167;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 168;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public skip_remain_if(): Skip_remain_ifContext {
		let _localctx: Skip_remain_ifContext = new Skip_remain_ifContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LayerfileParser.RULE_skip_remain_if);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 170;
			this.match(LayerfileParser.SKIP_REMAINING_IF);
			this.state = 171;
			this.match(LayerfileParser.SKIP_REMAINING_IF_VALUE);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.SKIP_REMAINING_IF_AND) {
				{
				this.state = 172;
				this.match(LayerfileParser.SKIP_REMAINING_IF_AND);
				this.state = 173;
				this.match(LayerfileParser.SKIP_REMAINING_IF_VALUE);
				}
			}

			this.state = 176;
			this.match(LayerfileParser.SKIP_REMAINING_IF_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public split(): SplitContext {
		let _localctx: SplitContext = new SplitContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LayerfileParser.RULE_split);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 178;
			this.match(LayerfileParser.SPLIT);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.SPLIT_NUMBER) {
				{
				this.state = 179;
				this.match(LayerfileParser.SPLIT_NUMBER);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expose_website(): Expose_websiteContext {
		let _localctx: Expose_websiteContext = new Expose_websiteContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LayerfileParser.RULE_expose_website);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(LayerfileParser.EXPOSE_WEBSITE);
			this.state = 186;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.WEBSITE_ITEM) {
				{
				{
				this.state = 183;
				this.match(LayerfileParser.WEBSITE_ITEM);
				}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 189;
			this.match(LayerfileParser.WEBSITE_EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public user(): UserContext {
		let _localctx: UserContext = new UserContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, LayerfileParser.RULE_user);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 191;
			this.match(LayerfileParser.USER);
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LayerfileParser.USER_NAME) {
				{
				this.state = 192;
				this.match(LayerfileParser.USER_NAME);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public wait(): WaitContext {
		let _localctx: WaitContext = new WaitContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, LayerfileParser.RULE_wait);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 195;
			this.match(LayerfileParser.WAIT);
			this.state = 199;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 196;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 202;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public workdir(): WorkdirContext {
		let _localctx: WorkdirContext = new WorkdirContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, LayerfileParser.RULE_workdir);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 204;
			this.match(LayerfileParser.WORKDIR);
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LayerfileParser.FILE) {
				{
				{
				this.state = 205;
				this.match(LayerfileParser.FILE);
				}
				}
				this.state = 210;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 211;
			this.match(LayerfileParser.END_OF_FILES);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public other(): OtherContext {
		let _localctx: OtherContext = new OtherContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, LayerfileParser.RULE_other);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 213;
				this.match(LayerfileParser.OTHER);
				}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === LayerfileParser.OTHER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03:\xDD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03O\n\x03\x03\x04\x03\x04\x05\x04" +
		"S\n\x04\x03\x05\x03\x05\x07\x05W\n\x05\f\x05\x0E\x05Z\v\x05\x03\x05\x03" +
		"\x05\x03\x06\x03\x06\x07\x06`\n\x06\f\x06\x0E\x06c\v\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x07\x07i\n\x07\f\x07\x0E\x07l\v\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x07\tw\n\t\f\t\x0E\tz\v\t\x03\t" +
		"\x03\t\x03\n\x03\n\x07\n\x80\n\n\f\n\x0E\n\x83\v\n\x03\n\x03\n\x03\v\x03" +
		"\v\x05\v\x89\n\v\x03\f\x03\f\x05\f\x8D\n\f\x03\r\x03\r\x05\r\x91\n\r\x03" +
		"\x0E\x03\x0E\x05\x0E\x95\n\x0E\x03\x0F\x03\x0F\x05\x0F\x99\n\x0F\x03\x10" +
		"\x03\x10\x07\x10\x9D\n\x10\f\x10\x0E\x10\xA0\v\x10\x03\x10\x03\x10\x03" +
		"\x11\x03\x11\x07\x11\xA6\n\x11\f\x11\x0E\x11\xA9\v\x11\x03\x11\x03\x11" +
		"\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\xB1\n\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x05\x13\xB7\n\x13\x03\x14\x03\x14\x07\x14\xBB\n\x14\f\x14" +
		"\x0E\x14\xBE\v\x14\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\xC4\n\x15\x03" +
		"\x16\x03\x16\x07\x16\xC8\n\x16\f\x16\x0E\x16\xCB\v\x16\x03\x16\x03\x16" +
		"\x03\x17\x03\x17\x07\x17\xD1\n\x17\f\x17\x0E\x17\xD4\v\x17\x03\x17\x03" +
		"\x17\x03\x18\x06\x18\xD9\n\x18\r\x18\x0E\x18\xDA\x03\x18\x02\x02\x02\x19" +
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14" +
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02" +
		"*\x02,\x02.\x02\x02\x02\x02\xEF\x023\x03\x02\x02\x02\x04N\x03\x02\x02" +
		"\x02\x06P\x03\x02\x02\x02\bT\x03\x02\x02\x02\n]\x03\x02\x02\x02\ff\x03" +
		"\x02\x02\x02\x0Eo\x03\x02\x02\x02\x10t\x03\x02\x02\x02\x12}\x03\x02\x02" +
		"\x02\x14\x86\x03\x02\x02\x02\x16\x8A\x03\x02\x02\x02\x18\x8E\x03\x02\x02" +
		"\x02\x1A\x92\x03\x02\x02\x02\x1C\x96\x03\x02\x02\x02\x1E\x9A\x03\x02\x02" +
		"\x02 \xA3\x03\x02\x02\x02\"\xAC\x03\x02\x02\x02$\xB4\x03\x02\x02\x02&" +
		"\xB8\x03\x02\x02\x02(\xC1\x03\x02\x02\x02*\xC5\x03\x02\x02\x02,\xCE\x03" +
		"\x02\x02\x02.\xD8\x03\x02\x02\x0202\x05\x04\x03\x0210\x03\x02\x02\x02" +
		"25\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03\x02\x02\x02" +
		"53\x03\x02\x02\x0267\x07\x02\x02\x037\x03\x03\x02\x02\x028O\x05\x06\x04" +
		"\x029O\x05\b\x05\x02:O\x05\n\x06\x02;O\x05\x14\v\x02<O\x05\f\x07\x02=" +
		"O\x05\x0E\b\x02>O\x05\x10\t\x02?O\x05\x12\n\x02@O\x05\x14\v\x02AO\x05" +
		"\x16\f\x02BO\x05\x18\r\x02CO\x05\x1A\x0E\x02DO\x05\x1C\x0F\x02EO\x05\x1E" +
		"\x10\x02FO\x05 \x11\x02GO\x05\"\x12\x02HO\x05$\x13\x02IO\x05&\x14\x02" +
		"JO\x05(\x15\x02KO\x05*\x16\x02LO\x05,\x17\x02MO\x07\x04\x02\x02N8\x03" +
		"\x02\x02\x02N9\x03\x02\x02\x02N:\x03\x02\x02\x02N;\x03\x02\x02\x02N<\x03" +
		"\x02\x02\x02N=\x03\x02\x02\x02N>\x03\x02\x02\x02N?\x03\x02\x02\x02N@\x03" +
		"\x02\x02\x02NA\x03\x02\x02\x02NB\x03\x02\x02\x02NC\x03\x02\x02\x02ND\x03" +
		"\x02\x02\x02NE\x03\x02\x02\x02NF\x03\x02\x02\x02NG\x03\x02\x02\x02NH\x03" +
		"\x02\x02\x02NI\x03\x02\x02\x02NJ\x03\x02\x02\x02NK\x03\x02\x02\x02NL\x03" +
		"\x02\x02\x02NM\x03\x02\x02\x02O\x05\x03\x02\x02\x02PR\x07\x05\x02\x02" +
		"QS\x07\x1D\x02\x02RQ\x03\x02\x02\x02RS\x03\x02\x02\x02S\x07\x03\x02\x02" +
		"\x02TX\x07\x06\x02\x02UW\x079\x02\x02VU\x03\x02\x02\x02WZ\x03\x02\x02" +
		"\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x03\x02\x02\x02ZX\x03\x02\x02" +
		"\x02[\\\x078\x02\x02\\\t\x03\x02\x02\x02]a\x07\x07\x02\x02^`\x07\x1E\x02" +
		"\x02_^\x03\x02\x02\x02`c\x03\x02\x02\x02a_\x03\x02\x02\x02ab\x03\x02\x02" +
		"\x02bd\x03\x02\x02\x02ca\x03\x02\x02\x02de\x07 \x02\x02e\v\x03\x02\x02" +
		"\x02fj\x07\b\x02\x02gi\x07!\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02\x02" +
		"jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02lj\x03\x02\x02\x02" +
		"mn\x07#\x02\x02n\r\x03\x02\x02\x02op\x07\t\x02\x02pq\x079\x02\x02qr\x07" +
		"9\x02\x02rs\x078\x02\x02s\x0F\x03\x02\x02\x02tx\x07\n\x02\x02uw\x07$\x02" +
		"\x02vu\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02" +
		"\x02y{\x03\x02\x02\x02zx\x03\x02\x02\x02{|\x07&\x02\x02|\x11\x03\x02\x02" +
		"\x02}\x81\x07\v\x02\x02~\x80\x07\x1A\x02\x02\x7F~\x03\x02\x02\x02\x80" +
		"\x83\x03\x02\x02\x02\x81\x7F\x03\x02\x02\x02\x81\x82\x03\x02\x02\x02\x82" +
		"\x84\x03\x02\x02\x02\x83\x81\x03\x02\x02\x02\x84\x85\x07\x1C\x02\x02\x85" +
		"\x13\x03\x02\x02\x02\x86\x88\x07\f\x02\x02\x87\x89\x07*\x02\x02\x88\x87" +
		"\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x15\x03\x02\x02\x02\x8A\x8C" +
		"\x07\r\x02\x02\x8B\x8D\x07+\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03" +
		"\x02\x02\x02\x8D\x17\x03\x02\x02\x02\x8E\x90\x07\x0E\x02\x02\x8F\x91\x07" +
		",\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x19\x03" +
		"\x02\x02\x02\x92\x94\x07\x0F\x02\x02\x93\x95\x07,\x02\x02\x94\x93\x03" +
		"\x02\x02\x02\x94\x95\x03\x02\x02\x02\x95\x1B\x03\x02\x02\x02\x96\x98\x07" +
		"\x10\x02\x02\x97\x99\x07,\x02\x02\x98\x97\x03\x02\x02\x02\x98\x99\x03" +
		"\x02\x02\x02\x99\x1D\x03\x02\x02\x02\x9A\x9E\x07\x11\x02\x02\x9B\x9D\x07" +
		".\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\xA0\x03\x02\x02\x02\x9E\x9C\x03" +
		"\x02\x02\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x9E\x03" +
		"\x02\x02\x02\xA1\xA2\x070\x02\x02\xA2\x1F\x03\x02\x02\x02\xA3\xA7\x07" +
		"\x12\x02\x02\xA4\xA6\x079\x02\x02\xA5\xA4\x03\x02\x02\x02\xA6\xA9\x03" +
		"\x02\x02\x02\xA7\xA5\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xAA\x03" +
		"\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAB\x078\x02\x02\xAB!\x03\x02" +
		"\x02\x02\xAC\xAD\x07\x13\x02\x02\xAD\xB0\x071\x02\x02\xAE\xAF\x072\x02" +
		"\x02\xAF\xB1\x071\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02" +
		"\x02\xB1\xB2\x03\x02\x02\x02\xB2\xB3\x074\x02\x02\xB3#\x03\x02\x02\x02" +
		"\xB4\xB6\x07\x14\x02\x02\xB5\xB7\x075\x02\x02\xB6\xB5\x03\x02\x02\x02" +
		"\xB6\xB7\x03\x02\x02\x02\xB7%\x03\x02\x02\x02\xB8\xBC\x07\x15\x02\x02" +
		"\xB9\xBB\x07(\x02\x02\xBA\xB9\x03\x02\x02\x02\xBB\xBE\x03\x02\x02\x02" +
		"\xBC\xBA\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBF\x03\x02\x02\x02" +
		"\xBE\xBC\x03\x02\x02\x02\xBF\xC0\x07\'\x02\x02\xC0\'\x03\x02\x02\x02\xC1" +
		"\xC3\x07\x16\x02\x02\xC2\xC4\x077\x02\x02\xC3\xC2\x03\x02\x02\x02\xC3" +
		"\xC4\x03\x02\x02\x02\xC4)\x03\x02\x02\x02\xC5\xC9\x07\x17\x02\x02\xC6" +
		"\xC8\x079\x02\x02\xC7\xC6\x03\x02\x02\x02\xC8\xCB\x03\x02\x02\x02\xC9" +
		"\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCC\x03\x02\x02\x02\xCB" +
		"\xC9\x03\x02\x02\x02\xCC\xCD\x078\x02\x02\xCD+\x03\x02\x02\x02\xCE\xD2" +
		"\x07\x18\x02\x02\xCF\xD1\x079\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\xD4" +
		"\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD2\xD3\x03\x02\x02\x02\xD3\xD5" +
		"\x03\x02\x02\x02\xD4\xD2\x03\x02\x02\x02\xD5\xD6\x078\x02\x02\xD6-\x03" +
		"\x02\x02\x02\xD7\xD9\x07\x19\x02\x02\xD8\xD7\x03\x02\x02\x02\xD9\xDA\x03" +
		"\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB/\x03" +
		"\x02\x02\x02\x183NRXajx\x81\x88\x8C\x90\x94\x98\x9E\xA7\xB0\xB6\xBC\xC3" +
		"\xC9\xD2\xDA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LayerfileParser.__ATN) {
			LayerfileParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LayerfileParser._serializedATN));
		}

		return LayerfileParser.__ATN;
	}

}

export class LayerfileContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(LayerfileParser.EOF, 0); }
	public cmd(): CmdContext[];
	public cmd(i: number): CmdContext;
	public cmd(i?: number): CmdContext | CmdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CmdContext);
		} else {
			return this.getRuleContext(i, CmdContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_layerfile; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterLayerfile) {
			listener.enterLayerfile(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitLayerfile) {
			listener.exitLayerfile(this);
		}
	}
}


export class CmdContext extends ParserRuleContext {
	public button(): ButtonContext | undefined {
		return this.tryGetRuleContext(0, ButtonContext);
	}
	public cache(): CacheContext | undefined {
		return this.tryGetRuleContext(0, CacheContext);
	}
	public checkpoint(): CheckpointContext | undefined {
		return this.tryGetRuleContext(0, CheckpointContext);
	}
	public from(): FromContext | undefined {
		return this.tryGetRuleContext(0, FromContext);
	}
	public clone(): CloneContext | undefined {
		return this.tryGetRuleContext(0, CloneContext);
	}
	public copy(): CopyContext | undefined {
		return this.tryGetRuleContext(0, CopyContext);
	}
	public env(): EnvContext | undefined {
		return this.tryGetRuleContext(0, EnvContext);
	}
	public build_env(): Build_envContext | undefined {
		return this.tryGetRuleContext(0, Build_envContext);
	}
	public memory(): MemoryContext | undefined {
		return this.tryGetRuleContext(0, MemoryContext);
	}
	public run(): RunContext | undefined {
		return this.tryGetRuleContext(0, RunContext);
	}
	public run_background(): Run_backgroundContext | undefined {
		return this.tryGetRuleContext(0, Run_backgroundContext);
	}
	public run_repeatable(): Run_repeatableContext | undefined {
		return this.tryGetRuleContext(0, Run_repeatableContext);
	}
	public secret_env(): Secret_envContext | undefined {
		return this.tryGetRuleContext(0, Secret_envContext);
	}
	public setup_file(): Setup_fileContext | undefined {
		return this.tryGetRuleContext(0, Setup_fileContext);
	}
	public skip_remain_if(): Skip_remain_ifContext | undefined {
		return this.tryGetRuleContext(0, Skip_remain_ifContext);
	}
	public split(): SplitContext | undefined {
		return this.tryGetRuleContext(0, SplitContext);
	}
	public expose_website(): Expose_websiteContext | undefined {
		return this.tryGetRuleContext(0, Expose_websiteContext);
	}
	public user(): UserContext | undefined {
		return this.tryGetRuleContext(0, UserContext);
	}
	public wait(): WaitContext | undefined {
		return this.tryGetRuleContext(0, WaitContext);
	}
	public workdir(): WorkdirContext | undefined {
		return this.tryGetRuleContext(0, WorkdirContext);
	}
	public COMMENT(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.COMMENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_cmd; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterCmd) {
			listener.enterCmd(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitCmd) {
			listener.exitCmd(this);
		}
	}
}


export class ButtonContext extends ParserRuleContext {
	public BUTTON(): TerminalNode { return this.getToken(LayerfileParser.BUTTON, 0); }
	public BUTTON_DATA(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.BUTTON_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_button; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterButton) {
			listener.enterButton(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitButton) {
			listener.exitButton(this);
		}
	}
}


export class CacheContext extends ParserRuleContext {
	public CACHE(): TerminalNode { return this.getToken(LayerfileParser.CACHE, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_cache; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterCache) {
			listener.enterCache(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitCache) {
			listener.exitCache(this);
		}
	}
}


export class CheckpointContext extends ParserRuleContext {
	public CHECKPOINT(): TerminalNode { return this.getToken(LayerfileParser.CHECKPOINT, 0); }
	public CHECKPOINT_EOL(): TerminalNode { return this.getToken(LayerfileParser.CHECKPOINT_EOL, 0); }
	public CHECKPOINT_VALUE(): TerminalNode[];
	public CHECKPOINT_VALUE(i: number): TerminalNode;
	public CHECKPOINT_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.CHECKPOINT_VALUE);
		} else {
			return this.getToken(LayerfileParser.CHECKPOINT_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_checkpoint; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterCheckpoint) {
			listener.enterCheckpoint(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitCheckpoint) {
			listener.exitCheckpoint(this);
		}
	}
}


export class CloneContext extends ParserRuleContext {
	public CLONE(): TerminalNode { return this.getToken(LayerfileParser.CLONE, 0); }
	public CLONE_EOL(): TerminalNode { return this.getToken(LayerfileParser.CLONE_EOL, 0); }
	public CLONE_VALUE(): TerminalNode[];
	public CLONE_VALUE(i: number): TerminalNode;
	public CLONE_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.CLONE_VALUE);
		} else {
			return this.getToken(LayerfileParser.CLONE_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_clone; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterClone) {
			listener.enterClone(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitClone) {
			listener.exitClone(this);
		}
	}
}


export class CopyContext extends ParserRuleContext {
	public COPY(): TerminalNode { return this.getToken(LayerfileParser.COPY, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_copy; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterCopy) {
			listener.enterCopy(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitCopy) {
			listener.exitCopy(this);
		}
	}
}


export class EnvContext extends ParserRuleContext {
	public ENV(): TerminalNode { return this.getToken(LayerfileParser.ENV, 0); }
	public ENV_EOL(): TerminalNode { return this.getToken(LayerfileParser.ENV_EOL, 0); }
	public ENV_VALUE(): TerminalNode[];
	public ENV_VALUE(i: number): TerminalNode;
	public ENV_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.ENV_VALUE);
		} else {
			return this.getToken(LayerfileParser.ENV_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_env; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterEnv) {
			listener.enterEnv(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitEnv) {
			listener.exitEnv(this);
		}
	}
}


export class Build_envContext extends ParserRuleContext {
	public BUILD_ENV(): TerminalNode { return this.getToken(LayerfileParser.BUILD_ENV, 0); }
	public BUILD_ENV_EOL(): TerminalNode { return this.getToken(LayerfileParser.BUILD_ENV_EOL, 0); }
	public BUILD_ENV_VALUE(): TerminalNode[];
	public BUILD_ENV_VALUE(i: number): TerminalNode;
	public BUILD_ENV_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.BUILD_ENV_VALUE);
		} else {
			return this.getToken(LayerfileParser.BUILD_ENV_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_build_env; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterBuild_env) {
			listener.enterBuild_env(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitBuild_env) {
			listener.exitBuild_env(this);
		}
	}
}


export class FromContext extends ParserRuleContext {
	public FROM(): TerminalNode { return this.getToken(LayerfileParser.FROM, 0); }
	public FROM_DATA(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.FROM_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_from; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterFrom) {
			listener.enterFrom(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitFrom) {
			listener.exitFrom(this);
		}
	}
}


export class MemoryContext extends ParserRuleContext {
	public MEMORY(): TerminalNode { return this.getToken(LayerfileParser.MEMORY, 0); }
	public MEMORY_AMOUNT(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.MEMORY_AMOUNT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_memory; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterMemory) {
			listener.enterMemory(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitMemory) {
			listener.exitMemory(this);
		}
	}
}


export class RunContext extends ParserRuleContext {
	public RUN(): TerminalNode { return this.getToken(LayerfileParser.RUN, 0); }
	public RUN_DATA(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.RUN_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_run; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterRun) {
			listener.enterRun(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitRun) {
			listener.exitRun(this);
		}
	}
}


export class Run_backgroundContext extends ParserRuleContext {
	public RUN_BACKGROUND(): TerminalNode { return this.getToken(LayerfileParser.RUN_BACKGROUND, 0); }
	public RUN_DATA(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.RUN_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_run_background; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterRun_background) {
			listener.enterRun_background(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitRun_background) {
			listener.exitRun_background(this);
		}
	}
}


export class Run_repeatableContext extends ParserRuleContext {
	public RUN_REPEATABLE(): TerminalNode { return this.getToken(LayerfileParser.RUN_REPEATABLE, 0); }
	public RUN_DATA(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.RUN_DATA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_run_repeatable; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterRun_repeatable) {
			listener.enterRun_repeatable(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitRun_repeatable) {
			listener.exitRun_repeatable(this);
		}
	}
}


export class Secret_envContext extends ParserRuleContext {
	public SECRET_ENV(): TerminalNode { return this.getToken(LayerfileParser.SECRET_ENV, 0); }
	public SECRET_ENV_EOL(): TerminalNode { return this.getToken(LayerfileParser.SECRET_ENV_EOL, 0); }
	public SECRET_ENV_VALUE(): TerminalNode[];
	public SECRET_ENV_VALUE(i: number): TerminalNode;
	public SECRET_ENV_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.SECRET_ENV_VALUE);
		} else {
			return this.getToken(LayerfileParser.SECRET_ENV_VALUE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_secret_env; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSecret_env) {
			listener.enterSecret_env(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSecret_env) {
			listener.exitSecret_env(this);
		}
	}
}


export class Setup_fileContext extends ParserRuleContext {
	public SETUP_FILE(): TerminalNode { return this.getToken(LayerfileParser.SETUP_FILE, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_setup_file; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSetup_file) {
			listener.enterSetup_file(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSetup_file) {
			listener.exitSetup_file(this);
		}
	}
}


export class Skip_remain_ifContext extends ParserRuleContext {
	public SKIP_REMAINING_IF(): TerminalNode { return this.getToken(LayerfileParser.SKIP_REMAINING_IF, 0); }
	public SKIP_REMAINING_IF_VALUE(): TerminalNode[];
	public SKIP_REMAINING_IF_VALUE(i: number): TerminalNode;
	public SKIP_REMAINING_IF_VALUE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.SKIP_REMAINING_IF_VALUE);
		} else {
			return this.getToken(LayerfileParser.SKIP_REMAINING_IF_VALUE, i);
		}
	}
	public SKIP_REMAINING_IF_EOL(): TerminalNode { return this.getToken(LayerfileParser.SKIP_REMAINING_IF_EOL, 0); }
	public SKIP_REMAINING_IF_AND(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.SKIP_REMAINING_IF_AND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_skip_remain_if; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSkip_remain_if) {
			listener.enterSkip_remain_if(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSkip_remain_if) {
			listener.exitSkip_remain_if(this);
		}
	}
}


export class SplitContext extends ParserRuleContext {
	public SPLIT(): TerminalNode { return this.getToken(LayerfileParser.SPLIT, 0); }
	public SPLIT_NUMBER(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.SPLIT_NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_split; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterSplit) {
			listener.enterSplit(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitSplit) {
			listener.exitSplit(this);
		}
	}
}


export class Expose_websiteContext extends ParserRuleContext {
	public EXPOSE_WEBSITE(): TerminalNode { return this.getToken(LayerfileParser.EXPOSE_WEBSITE, 0); }
	public WEBSITE_EOL(): TerminalNode { return this.getToken(LayerfileParser.WEBSITE_EOL, 0); }
	public WEBSITE_ITEM(): TerminalNode[];
	public WEBSITE_ITEM(i: number): TerminalNode;
	public WEBSITE_ITEM(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.WEBSITE_ITEM);
		} else {
			return this.getToken(LayerfileParser.WEBSITE_ITEM, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_expose_website; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterExpose_website) {
			listener.enterExpose_website(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitExpose_website) {
			listener.exitExpose_website(this);
		}
	}
}


export class UserContext extends ParserRuleContext {
	public USER(): TerminalNode { return this.getToken(LayerfileParser.USER, 0); }
	public USER_NAME(): TerminalNode | undefined { return this.tryGetToken(LayerfileParser.USER_NAME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_user; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterUser) {
			listener.enterUser(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitUser) {
			listener.exitUser(this);
		}
	}
}


export class WaitContext extends ParserRuleContext {
	public WAIT(): TerminalNode { return this.getToken(LayerfileParser.WAIT, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_wait; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterWait) {
			listener.enterWait(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitWait) {
			listener.exitWait(this);
		}
	}
}


export class WorkdirContext extends ParserRuleContext {
	public WORKDIR(): TerminalNode { return this.getToken(LayerfileParser.WORKDIR, 0); }
	public END_OF_FILES(): TerminalNode { return this.getToken(LayerfileParser.END_OF_FILES, 0); }
	public FILE(): TerminalNode[];
	public FILE(i: number): TerminalNode;
	public FILE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.FILE);
		} else {
			return this.getToken(LayerfileParser.FILE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_workdir; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterWorkdir) {
			listener.enterWorkdir(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitWorkdir) {
			listener.exitWorkdir(this);
		}
	}
}


export class OtherContext extends ParserRuleContext {
	public OTHER(): TerminalNode[];
	public OTHER(i: number): TerminalNode;
	public OTHER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(LayerfileParser.OTHER);
		} else {
			return this.getToken(LayerfileParser.OTHER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LayerfileParser.RULE_other; }
	// @Override
	public enterRule(listener: LayerfileParserListener): void {
		if (listener.enterOther) {
			listener.enterOther(this);
		}
	}
	// @Override
	public exitRule(listener: LayerfileParserListener): void {
		if (listener.exitOther) {
			listener.exitOther(this);
		}
	}
}



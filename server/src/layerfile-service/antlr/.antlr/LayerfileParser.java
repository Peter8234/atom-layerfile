// Generated from /home/peter/projects/vscode-layerfile/server/src/layerfile-service/antlr/LayerfileParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class LayerfileParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		WS=1, COMMENT=2, BUTTON=3, CACHE=4, CHECKPOINT=5, CLONE=6, COPY=7, ENV=8, 
		BUILD_ENV=9, FROM=10, MEMORY=11, RUN=12, RUN_BACKGROUND=13, RUN_REPEATABLE=14, 
		SECRET_ENV=15, SETUP_FILE=16, SKIP_REMAINING_IF=17, SPLIT=18, EXPOSE_WEBSITE=19, 
		USER=20, WAIT=21, WORKDIR=22, OTHER=23, BUILD_ENV_VALUE=24, BUILD_ENV_WS=25, 
		BUILD_ENV_EOL=26, BUTTON_DATA=27, CHECKPOINT_VALUE=28, CHECKPOINT_WS=29, 
		CHECKPOINT_EOL=30, CLONE_VALUE=31, CLONE_WS=32, CLONE_EOL=33, ENV_VALUE=34, 
		ENV_WS=35, ENV_EOL=36, WEBSITE_EOL=37, WEBSITE_ITEM=38, WEBSITE_WS=39, 
		FROM_DATA=40, MEMORY_AMOUNT=41, RUN_DATA=42, RUN_NEXT=43, SECRET_ENV_VALUE=44, 
		SECRET_ENV_WS=45, SECRET_ENV_EOL=46, SKIP_REMAINING_IF_VALUE=47, SKIP_REMAINING_IF_AND=48, 
		SKIP_REMAINING_IF_WS=49, SKIP_REMAINING_IF_EOL=50, SPLIT_NUMBER=51, SPLIT_WS=52, 
		USER_NAME=53, END_OF_FILES=54, FILE=55, FILE_WS=56;
	public static final int
		RULE_layerfile = 0, RULE_cmd = 1, RULE_button = 2, RULE_cache = 3, RULE_checkpoint = 4, 
		RULE_clone = 5, RULE_copy = 6, RULE_env = 7, RULE_build_env = 8, RULE_from = 9, 
		RULE_memory = 10, RULE_run = 11, RULE_run_background = 12, RULE_run_repeatable = 13, 
		RULE_secret_env = 14, RULE_setup_file = 15, RULE_skip_remain_if = 16, 
		RULE_split = 17, RULE_expose_website = 18, RULE_user = 19, RULE_wait = 20, 
		RULE_workdir = 21, RULE_other = 22;
	private static String[] makeRuleNames() {
		return new String[] {
			"layerfile", "cmd", "button", "cache", "checkpoint", "clone", "copy", 
			"env", "build_env", "from", "memory", "run", "run_background", "run_repeatable", 
			"secret_env", "setup_file", "skip_remain_if", "split", "expose_website", 
			"user", "wait", "workdir", "other"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, "'BUTTON'", "'CACHE'", "'CHECKPOINT'", "'CLONE '", 
			"'COPY'", "'ENV'", "'BUILD ENV '", "'FROM '", "'MEMORY '", "'RUN '", 
			"'RUN BACKGROUND '", "'RUN REPEATABLE '", "'SECRET ENV '", "'SETUP FILE '", 
			"'SKIP REMAINING IF '", "'SPLIT '", "'EXPOSE WEBSITE '", "'USER '", "'WAIT '", 
			"'WORKDIR '", null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "'AND'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "WS", "COMMENT", "BUTTON", "CACHE", "CHECKPOINT", "CLONE", "COPY", 
			"ENV", "BUILD_ENV", "FROM", "MEMORY", "RUN", "RUN_BACKGROUND", "RUN_REPEATABLE", 
			"SECRET_ENV", "SETUP_FILE", "SKIP_REMAINING_IF", "SPLIT", "EXPOSE_WEBSITE", 
			"USER", "WAIT", "WORKDIR", "OTHER", "BUILD_ENV_VALUE", "BUILD_ENV_WS", 
			"BUILD_ENV_EOL", "BUTTON_DATA", "CHECKPOINT_VALUE", "CHECKPOINT_WS", 
			"CHECKPOINT_EOL", "CLONE_VALUE", "CLONE_WS", "CLONE_EOL", "ENV_VALUE", 
			"ENV_WS", "ENV_EOL", "WEBSITE_EOL", "WEBSITE_ITEM", "WEBSITE_WS", "FROM_DATA", 
			"MEMORY_AMOUNT", "RUN_DATA", "RUN_NEXT", "SECRET_ENV_VALUE", "SECRET_ENV_WS", 
			"SECRET_ENV_EOL", "SKIP_REMAINING_IF_VALUE", "SKIP_REMAINING_IF_AND", 
			"SKIP_REMAINING_IF_WS", "SKIP_REMAINING_IF_EOL", "SPLIT_NUMBER", "SPLIT_WS", 
			"USER_NAME", "END_OF_FILES", "FILE", "FILE_WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "LayerfileParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public LayerfileParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class LayerfileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(LayerfileParser.EOF, 0); }
		public List<CmdContext> cmd() {
			return getRuleContexts(CmdContext.class);
		}
		public CmdContext cmd(int i) {
			return getRuleContext(CmdContext.class,i);
		}
		public LayerfileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_layerfile; }
	}

	public final LayerfileContext layerfile() throws RecognitionException {
		LayerfileContext _localctx = new LayerfileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_layerfile);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << COMMENT) | (1L << BUTTON) | (1L << CACHE) | (1L << CHECKPOINT) | (1L << CLONE) | (1L << COPY) | (1L << ENV) | (1L << BUILD_ENV) | (1L << FROM) | (1L << MEMORY) | (1L << RUN) | (1L << RUN_BACKGROUND) | (1L << RUN_REPEATABLE) | (1L << SECRET_ENV) | (1L << SETUP_FILE) | (1L << SKIP_REMAINING_IF) | (1L << SPLIT) | (1L << EXPOSE_WEBSITE) | (1L << USER) | (1L << WAIT) | (1L << WORKDIR))) != 0)) {
				{
				{
				setState(46);
				cmd();
				}
				}
				setState(51);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(52);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CmdContext extends ParserRuleContext {
		public ButtonContext button() {
			return getRuleContext(ButtonContext.class,0);
		}
		public CacheContext cache() {
			return getRuleContext(CacheContext.class,0);
		}
		public CheckpointContext checkpoint() {
			return getRuleContext(CheckpointContext.class,0);
		}
		public FromContext from() {
			return getRuleContext(FromContext.class,0);
		}
		public CloneContext clone() {
			return getRuleContext(CloneContext.class,0);
		}
		public CopyContext copy() {
			return getRuleContext(CopyContext.class,0);
		}
		public EnvContext env() {
			return getRuleContext(EnvContext.class,0);
		}
		public Build_envContext build_env() {
			return getRuleContext(Build_envContext.class,0);
		}
		public MemoryContext memory() {
			return getRuleContext(MemoryContext.class,0);
		}
		public RunContext run() {
			return getRuleContext(RunContext.class,0);
		}
		public Run_backgroundContext run_background() {
			return getRuleContext(Run_backgroundContext.class,0);
		}
		public Run_repeatableContext run_repeatable() {
			return getRuleContext(Run_repeatableContext.class,0);
		}
		public Secret_envContext secret_env() {
			return getRuleContext(Secret_envContext.class,0);
		}
		public Setup_fileContext setup_file() {
			return getRuleContext(Setup_fileContext.class,0);
		}
		public Skip_remain_ifContext skip_remain_if() {
			return getRuleContext(Skip_remain_ifContext.class,0);
		}
		public SplitContext split() {
			return getRuleContext(SplitContext.class,0);
		}
		public Expose_websiteContext expose_website() {
			return getRuleContext(Expose_websiteContext.class,0);
		}
		public UserContext user() {
			return getRuleContext(UserContext.class,0);
		}
		public WaitContext wait() {
			return getRuleContext(WaitContext.class,0);
		}
		public WorkdirContext workdir() {
			return getRuleContext(WorkdirContext.class,0);
		}
		public TerminalNode COMMENT() { return getToken(LayerfileParser.COMMENT, 0); }
		public CmdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cmd; }
	}

	public final CmdContext cmd() throws RecognitionException {
		CmdContext _localctx = new CmdContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_cmd);
		try {
			setState(76);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(54);
				button();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(55);
				cache();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(56);
				checkpoint();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(57);
				from();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(58);
				clone();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(59);
				copy();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(60);
				env();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(61);
				build_env();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(62);
				from();
				}
				break;
			case 10:
				enterOuterAlt(_localctx, 10);
				{
				setState(63);
				memory();
				}
				break;
			case 11:
				enterOuterAlt(_localctx, 11);
				{
				setState(64);
				run();
				}
				break;
			case 12:
				enterOuterAlt(_localctx, 12);
				{
				setState(65);
				run_background();
				}
				break;
			case 13:
				enterOuterAlt(_localctx, 13);
				{
				setState(66);
				run_repeatable();
				}
				break;
			case 14:
				enterOuterAlt(_localctx, 14);
				{
				setState(67);
				secret_env();
				}
				break;
			case 15:
				enterOuterAlt(_localctx, 15);
				{
				setState(68);
				setup_file();
				}
				break;
			case 16:
				enterOuterAlt(_localctx, 16);
				{
				setState(69);
				skip_remain_if();
				}
				break;
			case 17:
				enterOuterAlt(_localctx, 17);
				{
				setState(70);
				split();
				}
				break;
			case 18:
				enterOuterAlt(_localctx, 18);
				{
				setState(71);
				expose_website();
				}
				break;
			case 19:
				enterOuterAlt(_localctx, 19);
				{
				setState(72);
				user();
				}
				break;
			case 20:
				enterOuterAlt(_localctx, 20);
				{
				setState(73);
				wait();
				}
				break;
			case 21:
				enterOuterAlt(_localctx, 21);
				{
				setState(74);
				workdir();
				}
				break;
			case 22:
				enterOuterAlt(_localctx, 22);
				{
				setState(75);
				match(COMMENT);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ButtonContext extends ParserRuleContext {
		public TerminalNode BUTTON() { return getToken(LayerfileParser.BUTTON, 0); }
		public TerminalNode BUTTON_DATA() { return getToken(LayerfileParser.BUTTON_DATA, 0); }
		public ButtonContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_button; }
	}

	public final ButtonContext button() throws RecognitionException {
		ButtonContext _localctx = new ButtonContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_button);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(78);
			match(BUTTON);
			setState(80);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==BUTTON_DATA) {
				{
				setState(79);
				match(BUTTON_DATA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CacheContext extends ParserRuleContext {
		public TerminalNode CACHE() { return getToken(LayerfileParser.CACHE, 0); }
		public TerminalNode END_OF_FILES() { return getToken(LayerfileParser.END_OF_FILES, 0); }
		public List<TerminalNode> FILE() { return getTokens(LayerfileParser.FILE); }
		public TerminalNode FILE(int i) {
			return getToken(LayerfileParser.FILE, i);
		}
		public CacheContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cache; }
	}

	public final CacheContext cache() throws RecognitionException {
		CacheContext _localctx = new CacheContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_cache);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(82);
			match(CACHE);
			setState(86);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FILE) {
				{
				{
				setState(83);
				match(FILE);
				}
				}
				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(89);
			match(END_OF_FILES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CheckpointContext extends ParserRuleContext {
		public TerminalNode CHECKPOINT() { return getToken(LayerfileParser.CHECKPOINT, 0); }
		public TerminalNode CHECKPOINT_EOL() { return getToken(LayerfileParser.CHECKPOINT_EOL, 0); }
		public List<TerminalNode> CHECKPOINT_VALUE() { return getTokens(LayerfileParser.CHECKPOINT_VALUE); }
		public TerminalNode CHECKPOINT_VALUE(int i) {
			return getToken(LayerfileParser.CHECKPOINT_VALUE, i);
		}
		public CheckpointContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_checkpoint; }
	}

	public final CheckpointContext checkpoint() throws RecognitionException {
		CheckpointContext _localctx = new CheckpointContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_checkpoint);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			match(CHECKPOINT);
			setState(95);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CHECKPOINT_VALUE) {
				{
				{
				setState(92);
				match(CHECKPOINT_VALUE);
				}
				}
				setState(97);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(98);
			match(CHECKPOINT_EOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CloneContext extends ParserRuleContext {
		public TerminalNode CLONE() { return getToken(LayerfileParser.CLONE, 0); }
		public TerminalNode CLONE_EOL() { return getToken(LayerfileParser.CLONE_EOL, 0); }
		public List<TerminalNode> CLONE_VALUE() { return getTokens(LayerfileParser.CLONE_VALUE); }
		public TerminalNode CLONE_VALUE(int i) {
			return getToken(LayerfileParser.CLONE_VALUE, i);
		}
		public CloneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_clone; }
	}

	public final CloneContext clone() throws RecognitionException {
		CloneContext _localctx = new CloneContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_clone);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(100);
			match(CLONE);
			setState(104);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==CLONE_VALUE) {
				{
				{
				setState(101);
				match(CLONE_VALUE);
				}
				}
				setState(106);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(107);
			match(CLONE_EOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CopyContext extends ParserRuleContext {
		public TerminalNode COPY() { return getToken(LayerfileParser.COPY, 0); }
		public List<TerminalNode> FILE() { return getTokens(LayerfileParser.FILE); }
		public TerminalNode FILE(int i) {
			return getToken(LayerfileParser.FILE, i);
		}
		public TerminalNode END_OF_FILES() { return getToken(LayerfileParser.END_OF_FILES, 0); }
		public CopyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_copy; }
	}

	public final CopyContext copy() throws RecognitionException {
		CopyContext _localctx = new CopyContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_copy);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			match(COPY);
			setState(110);
			match(FILE);
			setState(111);
			match(FILE);
			setState(112);
			match(END_OF_FILES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EnvContext extends ParserRuleContext {
		public TerminalNode ENV() { return getToken(LayerfileParser.ENV, 0); }
		public TerminalNode ENV_EOL() { return getToken(LayerfileParser.ENV_EOL, 0); }
		public List<TerminalNode> ENV_VALUE() { return getTokens(LayerfileParser.ENV_VALUE); }
		public TerminalNode ENV_VALUE(int i) {
			return getToken(LayerfileParser.ENV_VALUE, i);
		}
		public EnvContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_env; }
	}

	public final EnvContext env() throws RecognitionException {
		EnvContext _localctx = new EnvContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_env);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(114);
			match(ENV);
			setState(118);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==ENV_VALUE) {
				{
				{
				setState(115);
				match(ENV_VALUE);
				}
				}
				setState(120);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(121);
			match(ENV_EOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Build_envContext extends ParserRuleContext {
		public TerminalNode BUILD_ENV() { return getToken(LayerfileParser.BUILD_ENV, 0); }
		public TerminalNode BUILD_ENV_EOL() { return getToken(LayerfileParser.BUILD_ENV_EOL, 0); }
		public List<TerminalNode> BUILD_ENV_VALUE() { return getTokens(LayerfileParser.BUILD_ENV_VALUE); }
		public TerminalNode BUILD_ENV_VALUE(int i) {
			return getToken(LayerfileParser.BUILD_ENV_VALUE, i);
		}
		public Build_envContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_build_env; }
	}

	public final Build_envContext build_env() throws RecognitionException {
		Build_envContext _localctx = new Build_envContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_build_env);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(123);
			match(BUILD_ENV);
			setState(127);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==BUILD_ENV_VALUE) {
				{
				{
				setState(124);
				match(BUILD_ENV_VALUE);
				}
				}
				setState(129);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(130);
			match(BUILD_ENV_EOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FromContext extends ParserRuleContext {
		public TerminalNode FROM() { return getToken(LayerfileParser.FROM, 0); }
		public TerminalNode FROM_DATA() { return getToken(LayerfileParser.FROM_DATA, 0); }
		public FromContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_from; }
	}

	public final FromContext from() throws RecognitionException {
		FromContext _localctx = new FromContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_from);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(132);
			match(FROM);
			setState(134);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM_DATA) {
				{
				setState(133);
				match(FROM_DATA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class MemoryContext extends ParserRuleContext {
		public TerminalNode MEMORY() { return getToken(LayerfileParser.MEMORY, 0); }
		public TerminalNode MEMORY_AMOUNT() { return getToken(LayerfileParser.MEMORY_AMOUNT, 0); }
		public MemoryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_memory; }
	}

	public final MemoryContext memory() throws RecognitionException {
		MemoryContext _localctx = new MemoryContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_memory);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(MEMORY);
			setState(138);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==MEMORY_AMOUNT) {
				{
				setState(137);
				match(MEMORY_AMOUNT);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RunContext extends ParserRuleContext {
		public TerminalNode RUN() { return getToken(LayerfileParser.RUN, 0); }
		public TerminalNode RUN_DATA() { return getToken(LayerfileParser.RUN_DATA, 0); }
		public RunContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_run; }
	}

	public final RunContext run() throws RecognitionException {
		RunContext _localctx = new RunContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_run);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(140);
			match(RUN);
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RUN_DATA) {
				{
				setState(141);
				match(RUN_DATA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Run_backgroundContext extends ParserRuleContext {
		public TerminalNode RUN_BACKGROUND() { return getToken(LayerfileParser.RUN_BACKGROUND, 0); }
		public TerminalNode RUN_DATA() { return getToken(LayerfileParser.RUN_DATA, 0); }
		public Run_backgroundContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_run_background; }
	}

	public final Run_backgroundContext run_background() throws RecognitionException {
		Run_backgroundContext _localctx = new Run_backgroundContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_run_background);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(144);
			match(RUN_BACKGROUND);
			setState(146);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RUN_DATA) {
				{
				setState(145);
				match(RUN_DATA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Run_repeatableContext extends ParserRuleContext {
		public TerminalNode RUN_REPEATABLE() { return getToken(LayerfileParser.RUN_REPEATABLE, 0); }
		public TerminalNode RUN_DATA() { return getToken(LayerfileParser.RUN_DATA, 0); }
		public Run_repeatableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_run_repeatable; }
	}

	public final Run_repeatableContext run_repeatable() throws RecognitionException {
		Run_repeatableContext _localctx = new Run_repeatableContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_run_repeatable);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(RUN_REPEATABLE);
			setState(150);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==RUN_DATA) {
				{
				setState(149);
				match(RUN_DATA);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Secret_envContext extends ParserRuleContext {
		public TerminalNode SECRET_ENV() { return getToken(LayerfileParser.SECRET_ENV, 0); }
		public TerminalNode SECRET_ENV_EOL() { return getToken(LayerfileParser.SECRET_ENV_EOL, 0); }
		public List<TerminalNode> SECRET_ENV_VALUE() { return getTokens(LayerfileParser.SECRET_ENV_VALUE); }
		public TerminalNode SECRET_ENV_VALUE(int i) {
			return getToken(LayerfileParser.SECRET_ENV_VALUE, i);
		}
		public Secret_envContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_secret_env; }
	}

	public final Secret_envContext secret_env() throws RecognitionException {
		Secret_envContext _localctx = new Secret_envContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_secret_env);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			match(SECRET_ENV);
			setState(156);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==SECRET_ENV_VALUE) {
				{
				{
				setState(153);
				match(SECRET_ENV_VALUE);
				}
				}
				setState(158);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(159);
			match(SECRET_ENV_EOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Setup_fileContext extends ParserRuleContext {
		public TerminalNode SETUP_FILE() { return getToken(LayerfileParser.SETUP_FILE, 0); }
		public TerminalNode END_OF_FILES() { return getToken(LayerfileParser.END_OF_FILES, 0); }
		public List<TerminalNode> FILE() { return getTokens(LayerfileParser.FILE); }
		public TerminalNode FILE(int i) {
			return getToken(LayerfileParser.FILE, i);
		}
		public Setup_fileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_setup_file; }
	}

	public final Setup_fileContext setup_file() throws RecognitionException {
		Setup_fileContext _localctx = new Setup_fileContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_setup_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(161);
			match(SETUP_FILE);
			setState(165);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FILE) {
				{
				{
				setState(162);
				match(FILE);
				}
				}
				setState(167);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(168);
			match(END_OF_FILES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Skip_remain_ifContext extends ParserRuleContext {
		public TerminalNode SKIP_REMAINING_IF() { return getToken(LayerfileParser.SKIP_REMAINING_IF, 0); }
		public List<TerminalNode> SKIP_REMAINING_IF_VALUE() { return getTokens(LayerfileParser.SKIP_REMAINING_IF_VALUE); }
		public TerminalNode SKIP_REMAINING_IF_VALUE(int i) {
			return getToken(LayerfileParser.SKIP_REMAINING_IF_VALUE, i);
		}
		public TerminalNode SKIP_REMAINING_IF_EOL() { return getToken(LayerfileParser.SKIP_REMAINING_IF_EOL, 0); }
		public TerminalNode SKIP_REMAINING_IF_AND() { return getToken(LayerfileParser.SKIP_REMAINING_IF_AND, 0); }
		public Skip_remain_ifContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_skip_remain_if; }
	}

	public final Skip_remain_ifContext skip_remain_if() throws RecognitionException {
		Skip_remain_ifContext _localctx = new Skip_remain_ifContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_skip_remain_if);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(170);
			match(SKIP_REMAINING_IF);
			setState(171);
			match(SKIP_REMAINING_IF_VALUE);
			setState(174);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SKIP_REMAINING_IF_AND) {
				{
				setState(172);
				match(SKIP_REMAINING_IF_AND);
				setState(173);
				match(SKIP_REMAINING_IF_VALUE);
				}
			}

			setState(176);
			match(SKIP_REMAINING_IF_EOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SplitContext extends ParserRuleContext {
		public TerminalNode SPLIT() { return getToken(LayerfileParser.SPLIT, 0); }
		public TerminalNode SPLIT_NUMBER() { return getToken(LayerfileParser.SPLIT_NUMBER, 0); }
		public SplitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_split; }
	}

	public final SplitContext split() throws RecognitionException {
		SplitContext _localctx = new SplitContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_split);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(178);
			match(SPLIT);
			setState(180);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPLIT_NUMBER) {
				{
				setState(179);
				match(SPLIT_NUMBER);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expose_websiteContext extends ParserRuleContext {
		public TerminalNode EXPOSE_WEBSITE() { return getToken(LayerfileParser.EXPOSE_WEBSITE, 0); }
		public TerminalNode WEBSITE_EOL() { return getToken(LayerfileParser.WEBSITE_EOL, 0); }
		public List<TerminalNode> WEBSITE_ITEM() { return getTokens(LayerfileParser.WEBSITE_ITEM); }
		public TerminalNode WEBSITE_ITEM(int i) {
			return getToken(LayerfileParser.WEBSITE_ITEM, i);
		}
		public Expose_websiteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expose_website; }
	}

	public final Expose_websiteContext expose_website() throws RecognitionException {
		Expose_websiteContext _localctx = new Expose_websiteContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_expose_website);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(182);
			match(EXPOSE_WEBSITE);
			setState(186);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==WEBSITE_ITEM) {
				{
				{
				setState(183);
				match(WEBSITE_ITEM);
				}
				}
				setState(188);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(189);
			match(WEBSITE_EOL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UserContext extends ParserRuleContext {
		public TerminalNode USER() { return getToken(LayerfileParser.USER, 0); }
		public TerminalNode USER_NAME() { return getToken(LayerfileParser.USER_NAME, 0); }
		public UserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_user; }
	}

	public final UserContext user() throws RecognitionException {
		UserContext _localctx = new UserContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_user);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(191);
			match(USER);
			setState(193);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==USER_NAME) {
				{
				setState(192);
				match(USER_NAME);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WaitContext extends ParserRuleContext {
		public TerminalNode WAIT() { return getToken(LayerfileParser.WAIT, 0); }
		public TerminalNode END_OF_FILES() { return getToken(LayerfileParser.END_OF_FILES, 0); }
		public List<TerminalNode> FILE() { return getTokens(LayerfileParser.FILE); }
		public TerminalNode FILE(int i) {
			return getToken(LayerfileParser.FILE, i);
		}
		public WaitContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_wait; }
	}

	public final WaitContext wait() throws RecognitionException {
		WaitContext _localctx = new WaitContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_wait);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(195);
			match(WAIT);
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FILE) {
				{
				{
				setState(196);
				match(FILE);
				}
				}
				setState(201);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(202);
			match(END_OF_FILES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class WorkdirContext extends ParserRuleContext {
		public TerminalNode WORKDIR() { return getToken(LayerfileParser.WORKDIR, 0); }
		public TerminalNode END_OF_FILES() { return getToken(LayerfileParser.END_OF_FILES, 0); }
		public List<TerminalNode> FILE() { return getTokens(LayerfileParser.FILE); }
		public TerminalNode FILE(int i) {
			return getToken(LayerfileParser.FILE, i);
		}
		public WorkdirContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_workdir; }
	}

	public final WorkdirContext workdir() throws RecognitionException {
		WorkdirContext _localctx = new WorkdirContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_workdir);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			match(WORKDIR);
			setState(208);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==FILE) {
				{
				{
				setState(205);
				match(FILE);
				}
				}
				setState(210);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(211);
			match(END_OF_FILES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class OtherContext extends ParserRuleContext {
		public List<TerminalNode> OTHER() { return getTokens(LayerfileParser.OTHER); }
		public TerminalNode OTHER(int i) {
			return getToken(LayerfileParser.OTHER, i);
		}
		public OtherContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_other; }
	}

	public final OtherContext other() throws RecognitionException {
		OtherContext _localctx = new OtherContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_other);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(214); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(213);
				match(OTHER);
				}
				}
				setState(216); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==OTHER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3:\u00dd\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\3\2\7\2\62"+
		"\n\2\f\2\16\2\65\13\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3O\n\3\3\4\3\4\5\4"+
		"S\n\4\3\5\3\5\7\5W\n\5\f\5\16\5Z\13\5\3\5\3\5\3\6\3\6\7\6`\n\6\f\6\16"+
		"\6c\13\6\3\6\3\6\3\7\3\7\7\7i\n\7\f\7\16\7l\13\7\3\7\3\7\3\b\3\b\3\b\3"+
		"\b\3\b\3\t\3\t\7\tw\n\t\f\t\16\tz\13\t\3\t\3\t\3\n\3\n\7\n\u0080\n\n\f"+
		"\n\16\n\u0083\13\n\3\n\3\n\3\13\3\13\5\13\u0089\n\13\3\f\3\f\5\f\u008d"+
		"\n\f\3\r\3\r\5\r\u0091\n\r\3\16\3\16\5\16\u0095\n\16\3\17\3\17\5\17\u0099"+
		"\n\17\3\20\3\20\7\20\u009d\n\20\f\20\16\20\u00a0\13\20\3\20\3\20\3\21"+
		"\3\21\7\21\u00a6\n\21\f\21\16\21\u00a9\13\21\3\21\3\21\3\22\3\22\3\22"+
		"\3\22\5\22\u00b1\n\22\3\22\3\22\3\23\3\23\5\23\u00b7\n\23\3\24\3\24\7"+
		"\24\u00bb\n\24\f\24\16\24\u00be\13\24\3\24\3\24\3\25\3\25\5\25\u00c4\n"+
		"\25\3\26\3\26\7\26\u00c8\n\26\f\26\16\26\u00cb\13\26\3\26\3\26\3\27\3"+
		"\27\7\27\u00d1\n\27\f\27\16\27\u00d4\13\27\3\27\3\27\3\30\6\30\u00d9\n"+
		"\30\r\30\16\30\u00da\3\30\2\2\31\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36"+
		" \"$&(*,.\2\2\2\u00ef\2\63\3\2\2\2\4N\3\2\2\2\6P\3\2\2\2\bT\3\2\2\2\n"+
		"]\3\2\2\2\ff\3\2\2\2\16o\3\2\2\2\20t\3\2\2\2\22}\3\2\2\2\24\u0086\3\2"+
		"\2\2\26\u008a\3\2\2\2\30\u008e\3\2\2\2\32\u0092\3\2\2\2\34\u0096\3\2\2"+
		"\2\36\u009a\3\2\2\2 \u00a3\3\2\2\2\"\u00ac\3\2\2\2$\u00b4\3\2\2\2&\u00b8"+
		"\3\2\2\2(\u00c1\3\2\2\2*\u00c5\3\2\2\2,\u00ce\3\2\2\2.\u00d8\3\2\2\2\60"+
		"\62\5\4\3\2\61\60\3\2\2\2\62\65\3\2\2\2\63\61\3\2\2\2\63\64\3\2\2\2\64"+
		"\66\3\2\2\2\65\63\3\2\2\2\66\67\7\2\2\3\67\3\3\2\2\28O\5\6\4\29O\5\b\5"+
		"\2:O\5\n\6\2;O\5\24\13\2<O\5\f\7\2=O\5\16\b\2>O\5\20\t\2?O\5\22\n\2@O"+
		"\5\24\13\2AO\5\26\f\2BO\5\30\r\2CO\5\32\16\2DO\5\34\17\2EO\5\36\20\2F"+
		"O\5 \21\2GO\5\"\22\2HO\5$\23\2IO\5&\24\2JO\5(\25\2KO\5*\26\2LO\5,\27\2"+
		"MO\7\4\2\2N8\3\2\2\2N9\3\2\2\2N:\3\2\2\2N;\3\2\2\2N<\3\2\2\2N=\3\2\2\2"+
		"N>\3\2\2\2N?\3\2\2\2N@\3\2\2\2NA\3\2\2\2NB\3\2\2\2NC\3\2\2\2ND\3\2\2\2"+
		"NE\3\2\2\2NF\3\2\2\2NG\3\2\2\2NH\3\2\2\2NI\3\2\2\2NJ\3\2\2\2NK\3\2\2\2"+
		"NL\3\2\2\2NM\3\2\2\2O\5\3\2\2\2PR\7\5\2\2QS\7\35\2\2RQ\3\2\2\2RS\3\2\2"+
		"\2S\7\3\2\2\2TX\7\6\2\2UW\79\2\2VU\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2"+
		"\2Y[\3\2\2\2ZX\3\2\2\2[\\\78\2\2\\\t\3\2\2\2]a\7\7\2\2^`\7\36\2\2_^\3"+
		"\2\2\2`c\3\2\2\2a_\3\2\2\2ab\3\2\2\2bd\3\2\2\2ca\3\2\2\2de\7 \2\2e\13"+
		"\3\2\2\2fj\7\b\2\2gi\7!\2\2hg\3\2\2\2il\3\2\2\2jh\3\2\2\2jk\3\2\2\2km"+
		"\3\2\2\2lj\3\2\2\2mn\7#\2\2n\r\3\2\2\2op\7\t\2\2pq\79\2\2qr\79\2\2rs\7"+
		"8\2\2s\17\3\2\2\2tx\7\n\2\2uw\7$\2\2vu\3\2\2\2wz\3\2\2\2xv\3\2\2\2xy\3"+
		"\2\2\2y{\3\2\2\2zx\3\2\2\2{|\7&\2\2|\21\3\2\2\2}\u0081\7\13\2\2~\u0080"+
		"\7\32\2\2\177~\3\2\2\2\u0080\u0083\3\2\2\2\u0081\177\3\2\2\2\u0081\u0082"+
		"\3\2\2\2\u0082\u0084\3\2\2\2\u0083\u0081\3\2\2\2\u0084\u0085\7\34\2\2"+
		"\u0085\23\3\2\2\2\u0086\u0088\7\f\2\2\u0087\u0089\7*\2\2\u0088\u0087\3"+
		"\2\2\2\u0088\u0089\3\2\2\2\u0089\25\3\2\2\2\u008a\u008c\7\r\2\2\u008b"+
		"\u008d\7+\2\2\u008c\u008b\3\2\2\2\u008c\u008d\3\2\2\2\u008d\27\3\2\2\2"+
		"\u008e\u0090\7\16\2\2\u008f\u0091\7,\2\2\u0090\u008f\3\2\2\2\u0090\u0091"+
		"\3\2\2\2\u0091\31\3\2\2\2\u0092\u0094\7\17\2\2\u0093\u0095\7,\2\2\u0094"+
		"\u0093\3\2\2\2\u0094\u0095\3\2\2\2\u0095\33\3\2\2\2\u0096\u0098\7\20\2"+
		"\2\u0097\u0099\7,\2\2\u0098\u0097\3\2\2\2\u0098\u0099\3\2\2\2\u0099\35"+
		"\3\2\2\2\u009a\u009e\7\21\2\2\u009b\u009d\7.\2\2\u009c\u009b\3\2\2\2\u009d"+
		"\u00a0\3\2\2\2\u009e\u009c\3\2\2\2\u009e\u009f\3\2\2\2\u009f\u00a1\3\2"+
		"\2\2\u00a0\u009e\3\2\2\2\u00a1\u00a2\7\60\2\2\u00a2\37\3\2\2\2\u00a3\u00a7"+
		"\7\22\2\2\u00a4\u00a6\79\2\2\u00a5\u00a4\3\2\2\2\u00a6\u00a9\3\2\2\2\u00a7"+
		"\u00a5\3\2\2\2\u00a7\u00a8\3\2\2\2\u00a8\u00aa\3\2\2\2\u00a9\u00a7\3\2"+
		"\2\2\u00aa\u00ab\78\2\2\u00ab!\3\2\2\2\u00ac\u00ad\7\23\2\2\u00ad\u00b0"+
		"\7\61\2\2\u00ae\u00af\7\62\2\2\u00af\u00b1\7\61\2\2\u00b0\u00ae\3\2\2"+
		"\2\u00b0\u00b1\3\2\2\2\u00b1\u00b2\3\2\2\2\u00b2\u00b3\7\64\2\2\u00b3"+
		"#\3\2\2\2\u00b4\u00b6\7\24\2\2\u00b5\u00b7\7\65\2\2\u00b6\u00b5\3\2\2"+
		"\2\u00b6\u00b7\3\2\2\2\u00b7%\3\2\2\2\u00b8\u00bc\7\25\2\2\u00b9\u00bb"+
		"\7(\2\2\u00ba\u00b9\3\2\2\2\u00bb\u00be\3\2\2\2\u00bc\u00ba\3\2\2\2\u00bc"+
		"\u00bd\3\2\2\2\u00bd\u00bf\3\2\2\2\u00be\u00bc\3\2\2\2\u00bf\u00c0\7\'"+
		"\2\2\u00c0\'\3\2\2\2\u00c1\u00c3\7\26\2\2\u00c2\u00c4\7\67\2\2\u00c3\u00c2"+
		"\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4)\3\2\2\2\u00c5\u00c9\7\27\2\2\u00c6"+
		"\u00c8\79\2\2\u00c7\u00c6\3\2\2\2\u00c8\u00cb\3\2\2\2\u00c9\u00c7\3\2"+
		"\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00c9\3\2\2\2\u00cc"+
		"\u00cd\78\2\2\u00cd+\3\2\2\2\u00ce\u00d2\7\30\2\2\u00cf\u00d1\79\2\2\u00d0"+
		"\u00cf\3\2\2\2\u00d1\u00d4\3\2\2\2\u00d2\u00d0\3\2\2\2\u00d2\u00d3\3\2"+
		"\2\2\u00d3\u00d5\3\2\2\2\u00d4\u00d2\3\2\2\2\u00d5\u00d6\78\2\2\u00d6"+
		"-\3\2\2\2\u00d7\u00d9\7\31\2\2\u00d8\u00d7\3\2\2\2\u00d9\u00da\3\2\2\2"+
		"\u00da\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db/\3\2\2\2\30\63NRXajx\u0081"+
		"\u0088\u008c\u0090\u0094\u0098\u009e\u00a7\u00b0\u00b6\u00bc\u00c3\u00c9"+
		"\u00d2\u00da";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
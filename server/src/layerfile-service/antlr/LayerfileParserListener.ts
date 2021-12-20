// Generated from LayerfileParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { LayerfileContext } from "./LayerfileParser";
import { CmdContext } from "./LayerfileParser";
import { ButtonContext } from "./LayerfileParser";
import { CacheContext } from "./LayerfileParser";
import { CheckpointContext } from "./LayerfileParser";
import { CloneContext } from "./LayerfileParser";
import { CopyContext } from "./LayerfileParser";
import { EnvContext } from "./LayerfileParser";
import { Build_envContext } from "./LayerfileParser";
import { FromContext } from "./LayerfileParser";
import { MemoryContext } from "./LayerfileParser";
import { RunContext } from "./LayerfileParser";
import { Run_backgroundContext } from "./LayerfileParser";
import { Run_repeatableContext } from "./LayerfileParser";
import { Secret_envContext } from "./LayerfileParser";
import { Setup_fileContext } from "./LayerfileParser";
import { Skip_remain_ifContext } from "./LayerfileParser";
import { SplitContext } from "./LayerfileParser";
import { Expose_websiteContext } from "./LayerfileParser";
import { UserContext } from "./LayerfileParser";
import { WaitContext } from "./LayerfileParser";
import { WorkdirContext } from "./LayerfileParser";
import { OtherContext } from "./LayerfileParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `LayerfileParser`.
 */
export interface LayerfileParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `LayerfileParser.layerfile`.
	 * @param ctx the parse tree
	 */
	enterLayerfile?: (ctx: LayerfileContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.layerfile`.
	 * @param ctx the parse tree
	 */
	exitLayerfile?: (ctx: LayerfileContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.cmd`.
	 * @param ctx the parse tree
	 */
	enterCmd?: (ctx: CmdContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.cmd`.
	 * @param ctx the parse tree
	 */
	exitCmd?: (ctx: CmdContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.button`.
	 * @param ctx the parse tree
	 */
	enterButton?: (ctx: ButtonContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.button`.
	 * @param ctx the parse tree
	 */
	exitButton?: (ctx: ButtonContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.cache`.
	 * @param ctx the parse tree
	 */
	enterCache?: (ctx: CacheContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.cache`.
	 * @param ctx the parse tree
	 */
	exitCache?: (ctx: CacheContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.checkpoint`.
	 * @param ctx the parse tree
	 */
	enterCheckpoint?: (ctx: CheckpointContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.checkpoint`.
	 * @param ctx the parse tree
	 */
	exitCheckpoint?: (ctx: CheckpointContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.clone`.
	 * @param ctx the parse tree
	 */
	enterClone?: (ctx: CloneContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.clone`.
	 * @param ctx the parse tree
	 */
	exitClone?: (ctx: CloneContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.copy`.
	 * @param ctx the parse tree
	 */
	enterCopy?: (ctx: CopyContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.copy`.
	 * @param ctx the parse tree
	 */
	exitCopy?: (ctx: CopyContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.env`.
	 * @param ctx the parse tree
	 */
	enterEnv?: (ctx: EnvContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.env`.
	 * @param ctx the parse tree
	 */
	exitEnv?: (ctx: EnvContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.build_env`.
	 * @param ctx the parse tree
	 */
	enterBuild_env?: (ctx: Build_envContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.build_env`.
	 * @param ctx the parse tree
	 */
	exitBuild_env?: (ctx: Build_envContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.from`.
	 * @param ctx the parse tree
	 */
	enterFrom?: (ctx: FromContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.from`.
	 * @param ctx the parse tree
	 */
	exitFrom?: (ctx: FromContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.memory`.
	 * @param ctx the parse tree
	 */
	enterMemory?: (ctx: MemoryContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.memory`.
	 * @param ctx the parse tree
	 */
	exitMemory?: (ctx: MemoryContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.run`.
	 * @param ctx the parse tree
	 */
	enterRun?: (ctx: RunContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.run`.
	 * @param ctx the parse tree
	 */
	exitRun?: (ctx: RunContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.run_background`.
	 * @param ctx the parse tree
	 */
	enterRun_background?: (ctx: Run_backgroundContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.run_background`.
	 * @param ctx the parse tree
	 */
	exitRun_background?: (ctx: Run_backgroundContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.run_repeatable`.
	 * @param ctx the parse tree
	 */
	enterRun_repeatable?: (ctx: Run_repeatableContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.run_repeatable`.
	 * @param ctx the parse tree
	 */
	exitRun_repeatable?: (ctx: Run_repeatableContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.secret_env`.
	 * @param ctx the parse tree
	 */
	enterSecret_env?: (ctx: Secret_envContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.secret_env`.
	 * @param ctx the parse tree
	 */
	exitSecret_env?: (ctx: Secret_envContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.setup_file`.
	 * @param ctx the parse tree
	 */
	enterSetup_file?: (ctx: Setup_fileContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.setup_file`.
	 * @param ctx the parse tree
	 */
	exitSetup_file?: (ctx: Setup_fileContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.skip_remain_if`.
	 * @param ctx the parse tree
	 */
	enterSkip_remain_if?: (ctx: Skip_remain_ifContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.skip_remain_if`.
	 * @param ctx the parse tree
	 */
	exitSkip_remain_if?: (ctx: Skip_remain_ifContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.split`.
	 * @param ctx the parse tree
	 */
	enterSplit?: (ctx: SplitContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.split`.
	 * @param ctx the parse tree
	 */
	exitSplit?: (ctx: SplitContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.expose_website`.
	 * @param ctx the parse tree
	 */
	enterExpose_website?: (ctx: Expose_websiteContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.expose_website`.
	 * @param ctx the parse tree
	 */
	exitExpose_website?: (ctx: Expose_websiteContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.user`.
	 * @param ctx the parse tree
	 */
	enterUser?: (ctx: UserContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.user`.
	 * @param ctx the parse tree
	 */
	exitUser?: (ctx: UserContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.wait`.
	 * @param ctx the parse tree
	 */
	enterWait?: (ctx: WaitContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.wait`.
	 * @param ctx the parse tree
	 */
	exitWait?: (ctx: WaitContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.workdir`.
	 * @param ctx the parse tree
	 */
	enterWorkdir?: (ctx: WorkdirContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.workdir`.
	 * @param ctx the parse tree
	 */
	exitWorkdir?: (ctx: WorkdirContext) => void;

	/**
	 * Enter a parse tree produced by `LayerfileParser.other`.
	 * @param ctx the parse tree
	 */
	enterOther?: (ctx: OtherContext) => void;
	/**
	 * Exit a parse tree produced by `LayerfileParser.other`.
	 * @param ctx the parse tree
	 */
	exitOther?: (ctx: OtherContext) => void;
}


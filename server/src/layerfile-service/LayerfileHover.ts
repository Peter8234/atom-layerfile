import { CharStreams, Token } from "antlr4ts";
import { Position } from "vscode-languageserver";
import { TextDocument } from "vscode-languageserver-textdocument";
import { Hover, MarkupKind } from "vscode-languageserver-types";
import { LayerfileLexer } from "./antlr/LayerfileLexer";


const DirectiveHover : any = {
	[LayerfileLexer.BUTTON] :
	"usage: BUTTON [message...]\n\n" +
	"The BUTTON instruction allows you to block the progress of a run until the button is pressed." +
	"Ex. BUTTON would you like to deploy?" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/button)",
	[LayerfileLexer.CACHE] :
	"usage: CACHE [cached directories...]\n\n" +
	"The CACHE instruction makes specific files/directories be shared across runs, almost always as a performance improvement.\n\n" +
	"Ex. CACHE /var/cache/apt" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/cache)",
	[LayerfileLexer.CHECKPOINT] :
	"usage: CHECKPOINT (name) or CHECKPOINT disabled\n\n" +
	"The CHECKPOINT instruction allows you to control exactly when webapp.io will take snapshots of the pipeline.\n\n" +
	"Ex. CHECKPOINT deploy\n" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/checkpoint)",
	[LayerfileLexer.CLONE] :
	"usage: CLONE (DEFAULT=master) [url] (source...) [destination]\n\n",
	[LayerfileLexer.COPY] :
	"usage: COPY [files...] [destination]\n\n" +
	"The COPY instruction moves files from your repository to the runner.\n\n" +
	"Ex. COPY . .\n" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/copy)",
	[LayerfileLexer.BUILD_ENV] :
	"usage: BUILD ENV [variable]\n\n" +
	"The BUILD ENV instruction tells the layerfile to rebuild when a variable changes\n\n" +
	"Ex. BUILD ENV SUBDOMAIN" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/build-env)",
	[LayerfileLexer.ENV] :
	"usage: ENV [key=value...]\n\n" +
	"The ENV instruction persistently sets environment variables in this Layerfile\n\n" +
	"Ex. ENV PATH=$GOPATH/bin:$PATH\n" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/env)",
	[LayerfileLexer.MEMORY] :
	"usage: MEMORY [number](K|M|G)\n\n" +
	"The MEMORY instruction allows you to reserve memory before you need it. In particular, languages like nodejs might require memory to be available before they are used.\n\n" +
	"Ex. MEMORY 2G" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/memory)",
	[LayerfileLexer.RUN] :
	"usage: RUN (BACKGROUND|REPEATABLE) [command ...]\n\n" +
	"The RUN instruction runs the given script, and fails the entire Layerfile if the given command fails.\n\n" +
	"Ex. RUN echo hello" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/run)",
	[LayerfileLexer.RUN_BACKGROUND] :
	"usage: RUN BACKGROUND [command...]\n\n" +
	"The RUN BACKGROUND instruction runs the given script in the background\n\n" +
	"Ex. RUN BACKGROUND python3 -m http.server" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/run)",
	[LayerfileLexer.RUN_REPEATABLE] :
	"usage: RUN REPEATABLE [message...]\n\n" +
	"The RUN REPEATABLE instruction is a performance optimization see [tunning performance](https://webapp.io/docs/tuning-performance/the-layerfile-cache#run-repeatable)\n\n" +
	"Ex. RUN REPEATABLE docker build -t hello" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/run)",
	[LayerfileLexer.SECRET_ENV] :
	"usage: SECRET ENV [secret name...]\n\n" +
	"The SECRET ENV instruction adds values from secrets to the runner’s environment.\n\n" +
	"Ex. SECRET ENV ENV_FILE" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/secret-env)",
	[LayerfileLexer.SETUP_FILE] :
	"usage: SETUP FILE [file ...]\n\n" +
	"The SETUP FILE instruction causes the contents of the given file to be sourced before every RUN command. This is equivalent to copy/pasting the contents of the file into the terminal before every RUN command.\n\n" +
	"Ex. SETUP FILE .env" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/setup-file)",
	[LayerfileLexer.SKIP_REMAINING_IF] :
	"usage: SKIP REMAINING IF [KEY=VALUE]\n\n" +
	"The SKIP REMAINING IF instruction will cause remaining instructions in the Layerfile to be skipped if the condition is evaluated to true.\n\n" +
	"SKIP REMAINING IF GIT_BRANCH!=master\n" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/skip-remaining-if)",
	[LayerfileLexer.SPLIT] :
	"usage: SPLIT [n]\n\n" +
	"The SPLIT instruction causes the runner to duplicate its entire state a number of times at a specific point. Each copy of the runner will have SPLIT and SPLIT_NUM environment variables automatically set. The former will be the index of the runner, and the latter will be the number of copies.\n\n" +
	"Ex. SPLIT 3" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/split)",
	[LayerfileLexer.EXPOSE_WEBSITE] :
	"usage: EXPOSE WEBSITE [location on runner] (path) (rewrite path)\n\n" +
	"The EXPOSE WEBSITE instruction creates a persistent link to view a webserver running at a specific port in the Layerfile.\n\n" +
	"Ex. EXPOSE WEBSITE localhost:80" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/expose-website)",
	[LayerfileLexer.USER] :
	"usage: USER [username]\n\n" +
	"The USER instruction allows you to run as a non-root user.\n\n" +
	"Ex. USER www" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/user)",
	[LayerfileLexer.WAIT] :
	"usage: WAIT [layerfile paths...]\n\n" +
	"The WAIT instruction allows you to make one step require other steps to succeed before running.\n\n" +
	"Ex. WAIT /unit-tests /acceptance-tests" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/wait)",
	[LayerfileLexer.WORKDIR] :
	"usage: WORKDIR [directory]\n\n" +
	"The WORKDIR instruction changes the location from which files are resolved in the runner.\n\n" +
	"Ex. WORKDIR /tmp" +
	"\n\n[Online documentation](https://webapp.io/docs/layerfile-reference/workdir)",
}


const PresetVariableHover : any = {
	"SUBDOMAIN":
	"The SUBDOMAIN variable is often used to set the HOST variable for webservers.\n\n" +
	"It is a cleaned up version of the $GIT_BRANCH variable, acceptable for use in a URL.\n\n" +
	"Ex. SUBDOMAIN=my-branch",
	"DEPLOYMENT_HOST":
	"The DEPLOYMENT_HOST variable is set if a deployment exists for your run.\n\n" +
	"It’s often used to tell a webserver where it is being hosted.\n\n" +
	"Ex. DEPLOYMENT_HOST=job-5.demo.example.com",
	"CI":
	"The CI variable is always true while running a Layerfile.\n\n" +
	"Ex. CI=true",
	"DEBIAN_FRONTEND":
	"The DEBIAN_FRONTEND variable is always set to noninteractive in webapp.io.\n\n" +
	"To change this behavior, use, e.g., ENV DEBIAN_FRONTEND=readline\n\n" +
	"Ex. DEBIAN_FRONTEND=noninteractive",
	"GIT_TAG":
	"GIT_TAG is the result of running git describe --always in the repository.\n\n" +
	"Ex. GIT_TAG=v1.0.0",
	"GIT_COMMIT":
	"GIT_COMMIT is the result of running git rev-parse HEAD in the repository.\n\n" +
	"Ex. GIT_COMMIT=111122223333444455556666777788889999aaaa",
	"GIT_SHORT_COMMIT":
	"GIT_SHORT_COMMIT is the first 12 characters of running git rev-parse HEAD in the repository.\n\n" +
	"Ex. GIT_SHORT_COMMIT=111122223333",
	"GIT_COMMIT_TITLE":
	"Last git commit message\n\n" +
	"Ex. GIT_COMMIT_TITLE=\"[improvement] do something\"",
	"GIT_CLONE_USER":
	"GIT_CLONE_URL is a token which can be used to clone this repository.\n\n" +
	"git clone https://$GIT_CLONE_USER@github.com/org/repo.git\n\n" +
	"Ex. GIT_CLONE_USER=x-access-token:<token>",
	"EXPOSE_WEBSITE_HOST":
	"EXPOSE_WEBSITE_HOST is the hostname exposed by EXPOSE WEBSITE\n\n" +
	"It’s often used to link a frontend with a backend when running both with EXPOSE WEBSITE and RUN BACKGROUND\n\n" +
	"Ex. EXPOSE_WEBSITE_HOST=(uuid).cidemo.co",
	"WEBAPPIO":
	"WEBAPPIO is always true when running a Layerfile\n\n" +
	"Ex. WEBAPPIO=true",
	"GIT_BRANCH":
	"GIT_BRANCH is the branch which is checked out in this repository.\n\n" +
	"Ex. GIT_BRANCH=staging",
	"JOB_ID":
	"JOB_ID always exists.\n\n" +
	"It’s set to the ID of the current running job.\n\n" +
	"Ex. JOB_ID=5",
	"PULL_REQUEST_URL":
	"PULL_REQUEST_URL may or may not exist.\n\n" +
	"It’s a link to the pull request that triggered this pipeline.\n\n" +
	"Ex. PULL_REQUEST_URL=https://github.com/some/repo/pull_requests/5",
	"REPOSITORY_NAME":
	"REPOSITORY_NAME is the name of the repository.\n\n" +
	"If the repository is at github.com/a/b, this would be “b”\n\n" +
	"Ex. REPOSITORY_NAME=somerepo",
	"REPOSITORY_OWNER":
	"REPOSITORY_OWNER is the name of the owner of this repository.\n\n" +
	" If the repository is at github.com/a/b, this would be “a”\n\n" +
	"Ex. REPOSITORY_OWNER=repoowner",
	"ORGANIZATION_NAME":
	"ORGANIZATION_NAME is the name of the current organization.\n\n" +
	"If the dashboard is at webapp.io/myorg, this would be “myorg”\n\n" +
	"Ex. ORGANIZATION_NAME=myorg",
	"RUNNER_ID":
	"RUNNER_ID is the id of the current layerfile runner.\n\n" +
	"Ex. RUNNER_ID=main-layerfile",
	"RETRY_INDEX":
	"RETRY_INDEX is the current retry for the given runner (initially 1, then when retried once, 2, etc)\n\n" +
	"Ex. RETRY_INDEX=1",
	"API_EXTRA":
	"API_EXTRA is optional data passed in when a run is started by the API.\n\n" +
	"Ex. API_EXTRA=some data passed from API",
}



const findToken = (tokens: Token[], position : Position) : Token | null => {
	for(var token of tokens ) {
		if (token.text !== undefined &&
			token.charPositionInLine <= position.character &&
			position.character <= token.charPositionInLine + token.text.length &&
			token.line - 1 === position.line) {
			return token
		}
	}
	return null
}



export function computeHover(document : TextDocument, position : Position) : Hover | null {
	var text = document.getText();
	var chars = CharStreams.fromString(text);
	var lexer = new LayerfileLexer(chars);
	var tokens = lexer.getAllTokens();
	const positionToken = findToken(tokens, position);
	if (positionToken) {
		if (DirectiveHover.hasOwnProperty(positionToken.type)) {
			return {
				contents : {
					kind : MarkupKind.Markdown,
					value : DirectiveHover[positionToken.type]
				}
			}
		} else if (positionToken.type === LayerfileLexer.SKIP_REMAINING_IF_VALUE ||
			       positionToken.type === LayerfileLexer.BUILD_ENV_VALUE) {
			const key = Object.keys(PresetVariableHover).find((variable) => positionToken.text?.startsWith(variable))
			if (key) {
				return {
					contents : {
						kind : MarkupKind.Markdown,
						value : PresetVariableHover[key]
					}
				}
			}
		}
	}
	return null
}
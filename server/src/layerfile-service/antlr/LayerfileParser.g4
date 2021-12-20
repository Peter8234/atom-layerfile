parser grammar LayerfileParser;

options { tokenVocab=LayerfileLexer; }

layerfile: cmd* EOF;
cmd: button | cache | checkpoint | from | clone | copy | env |  build_env |
     from | memory | run | run_background | run_repeatable |
     secret_env | setup_file | skip_remain_if | split | expose_website |
     user | wait | workdir | COMMENT;

button: BUTTON BUTTON_DATA?;
cache: CACHE FILE* END_OF_FILES;
checkpoint: CHECKPOINT CHECKPOINT_VALUE* CHECKPOINT_EOL;
clone: CLONE CLONE_VALUE* CLONE_EOL;
copy: COPY FILE FILE END_OF_FILES;
env: ENV ENV_VALUE* ENV_EOL;
build_env: BUILD_ENV BUILD_ENV_VALUE* BUILD_ENV_EOL;
from: FROM FROM_DATA?;
memory: MEMORY MEMORY_AMOUNT?;
run: RUN RUN_DATA?;
run_background: RUN_BACKGROUND RUN_DATA?;
run_repeatable: RUN_REPEATABLE RUN_DATA?;
secret_env: SECRET_ENV SECRET_ENV_VALUE* SECRET_ENV_EOL;
setup_file: SETUP_FILE FILE* END_OF_FILES;
skip_remain_if: SKIP_REMAINING_IF SKIP_REMAINING_IF_VALUE (SKIP_REMAINING_IF_AND SKIP_REMAINING_IF_VALUE)? SKIP_REMAINING_IF_EOL;
split: SPLIT SPLIT_NUMBER?;
expose_website: EXPOSE_WEBSITE WEBSITE_ITEM* WEBSITE_EOL;
user: USER USER_NAME?;
wait: WAIT FILE* END_OF_FILES;
workdir: WORKDIR FILE* END_OF_FILES;
other: OTHER+;

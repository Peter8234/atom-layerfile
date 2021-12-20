lexer grammar LayerfileLexer;

WS : [ \t\r\n]+ -> skip;
COMMENT: '#' ~[\r\n]*;

BUTTON: 'BUTTON' -> pushMode(BUTTON_INSTR);
CACHE: 'CACHE' -> pushMode(READ_FILES);
CHECKPOINT: 'CHECKPOINT' -> pushMode(CHECKPOINT_INSTR);
CLONE: 'CLONE ' -> pushMode(CLONE_INSTR);
COPY: 'COPY' -> pushMode(READ_FILES);
ENV: 'ENV' -> pushMode(ENV_INSTR);
BUILD_ENV: 'BUILD ENV ' -> pushMode(BUILD_ENV_INSTR);
FROM: 'FROM ' -> pushMode(FROM_INSTR);
MEMORY: 'MEMORY ' -> pushMode(MEMORY_INSTR);
RUN: 'RUN ' -> pushMode(RUN_INSTR);
RUN_BACKGROUND: 'RUN BACKGROUND ' -> pushMode(RUN_INSTR);
RUN_REPEATABLE: 'RUN REPEATABLE ' -> pushMode(RUN_INSTR);
SECRET_ENV: 'SECRET ENV ' -> pushMode(SECRET_ENV_INSTR);
SETUP_FILE: 'SETUP FILE ' -> pushMode(READ_FILES);
SKIP_REMAINING_IF: 'SKIP REMAINING IF ' -> pushMode(SKIP_REMAINING_IF_INSTR);
SPLIT: 'SPLIT ' -> pushMode(SPLIT_INSTR);
EXPOSE_WEBSITE: 'EXPOSE WEBSITE ' -> pushMode(EXPOSE_WEBSITE_INSTR);
USER: 'USER ' -> pushMode(USER_INSTR);
WAIT: 'WAIT ' -> pushMode(READ_FILES);
WORKDIR: 'WORKDIR ' -> pushMode(READ_FILES);
OTHER: .;


mode BUILD_ENV_INSTR;
BUILD_ENV_VALUE: ~[ \r\n]+;
BUILD_ENV_WS: [ \t]+ -> skip;
BUILD_ENV_EOL: (('\r'? '\n') | '\r' | EOF) -> popMode;


mode BUTTON_INSTR;
BUTTON_DATA: (('\r'? '\n') | '\r' | EOF) -> popMode;
BUTTON_MORE: . -> more;


mode CHECKPOINT_INSTR;
CHECKPOINT_VALUE: ~[ \t\r\n]+;
CHECKPOINT_WS : [ \t] -> skip;
CHECKPOINT_EOL: (('\r'? '\n') | '\r' | EOF) -> popMode;

mode CLONE_INSTR;

CLONE_VALUE:
        '"' .*? '"'
        | '\'' .*? '\''
        | 'DEFAULT="' .*? '"'
        | 'DEFAULT=\'' .*? '\''
        | ~[ \t\r\n]+
        ;

CLONE_WS: [ \t]+ -> skip;
CLONE_EOL: (('\r'? '\n') | '\r' | EOF) -> popMode;


mode ENV_INSTR;
fragment ENV_VALUE_FRAG: '"' .*? '"'
         | '\'' .*? '\''
         | '`' .*? '`'
         | '$(' .*? ')'
         | ~[ \r\n]+
         ;
fragment ENV_KEY: ('0'..'9' | 'a'..'z' | 'A'..'Z' | '_' | '-')+;
ENV_VALUE:
    ENV_KEY [ \t]* '=' [ \t]* ENV_VALUE_FRAG
    | ENV_VALUE_FRAG
    ;
ENV_WS: [ \t]+ -> skip;
ENV_EOL: (('\r'? '\n') | '\r' | EOF) -> popMode;


mode EXPOSE_WEBSITE_INSTR;
WEBSITE_EOL: (('\r'? '\n') | '\r' | EOF) -> popMode;
WEBSITE_ITEM: ~[ \r\n\t]+ ;
WEBSITE_WS: [ \t]+ -> skip;


mode FROM_INSTR;
FROM_DATA: (('\r'? '\n') | '\r' | EOF) -> popMode;
FROM_MORE: . -> more;


mode MEMORY_INSTR;
MEMORY_AMOUNT: (('\r'? '\n') | '\r' | EOF) -> popMode;
MEMORY_MORE:  . -> more;

mode RUN_INSTR;
RUN_DATA: (('\r'? '\n') | '\r' | EOF) -> popMode;
RUN_NEXT: ('\\\r' | '\\\r\n' | '\\\n') -> skip;
RUN_COMMAND: . -> more;


mode SECRET_ENV_INSTR;
SECRET_ENV_VALUE: ~[ \r\n=]+;
SECRET_ENV_WS: [ \t]+ -> skip;
SECRET_ENV_EOL: (('\r'? '\n') | '\r' | EOF) -> popMode;

mode SKIP_REMAINING_IF_INSTR;
SKIP_REMAINING_IF_VALUE:
    ('0'..'9'|'A'..'Z'|'a'..'z'|'_'|'-')+ [ \t]* ('!=~' | '!=' | '=~' | '=') [ \t]*
    ('"' .*? '"'
     | '\'' .*? '\''
     | ~[ \r\n]+
    );
SKIP_REMAINING_IF_AND: 'AND';
SKIP_REMAINING_IF_WS: [ \t]+ -> skip;
SKIP_REMAINING_IF_EOL: (('\r'? '\n') | '\r' | EOF) -> popMode;

mode SPLIT_INSTR;
SPLIT_NUMBER:  (('\r'? '\n') | '\r' | EOF) -> popMode;
SPLIT_MORE: . -> more;
SPLIT_WS: [ \t]+ -> skip;


mode USER_INSTR;
USER_NAME: (('\r'? '\n') | '\r' | EOF) -> popMode;
USER_MORE: . -> more;


mode READ_FILES;
END_OF_FILES: (('\r'? '\n') | '\r' | EOF) -> popMode;
FILE: ~[ \r\n\t]+
    | '"' .*? '"';
FILE_WS: [ \t]+ -> skip;
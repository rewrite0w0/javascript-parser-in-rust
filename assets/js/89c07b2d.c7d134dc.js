"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[648],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7598:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(2081),r=(n(9496),n(9613));const i={title:"Grammar"},o=void 0,s={permalink:"/javascript-parser-in-rust/blog/grammar",editUrl:"https://github.com/Boshen/javascript-parser-in-rust/tree/main/blog/blog/grammar.md",source:"@site/blog/grammar.md",title:"Grammar",description:"JavaScript has one of the most challenging grammar to parse,",date:"2022-08-17T02:41:05.000Z",formattedDate:"August 17, 2022",tags:[],readingTime:13.755,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Grammar"},prevItem:{title:"The ECMAScript Specification",permalink:"/javascript-parser-in-rust/blog/ecma-spec"}},l={authorsImageUrls:[]},p=[{value:"LL(1) Grammar",id:"ll1-grammar",level:2},{value:"Identifiers",id:"identifiers",level:2},{value:"Class and Strict Mode",id:"class-and-strict-mode",level:2},{value:"Legacy Octal and Use Strict",id:"legacy-octal-and-use-strict",level:2},{value:"Non-simple Parameter and Strict Mode",id:"non-simple-parameter-and-strict-mode",level:2},{value:"Parenthesized Expression",id:"parenthesized-expression",level:2},{value:"Function Declaration in If Statement",id:"function-declaration-in-if-statement",level:2},{value:"Label statement is legit",id:"label-statement-is-legit",level:2},{value:"<code>let</code> is not a keyword",id:"let-is-not-a-keyword",level:2},{value:"For-in / For-of and the In context",id:"for-in--for-of-and-the-in-context",level:2},{value:"Block-Level Function Declarations",id:"block-level-function-declarations",level:2},{value:"Grammar Context",id:"grammar-context",level:2},{value:"Ambiguous Grammar",id:"ambiguous-grammar",level:2},{value:"Cover Grammar",id:"cover-grammar",level:2},{value:"CoverParenthesizedExpressionAndArrowParameterList",id:"coverparenthesizedexpressionandarrowparameterlist",level:4},{value:"CoverCallExpressionAndAsyncArrowHead",id:"covercallexpressionandasyncarrowhead",level:4},{value:"CoverInitializedName",id:"coverinitializedname",level:4}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"JavaScript has one of the most challenging grammar to parse,\nthis tutorial details all the sweat and tears I had while learning it."),(0,r.kt)("h2",{id:"ll1-grammar"},"LL(1) Grammar"),(0,r.kt)("p",null,"According to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/LL_grammar"},"Wikipedia"),","),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"an LL grammar is a context-free grammar that can be parsed by an LL parser, which parses the input from Left to right")),(0,r.kt)("p",null,"The first ",(0,r.kt)("strong",{parentName:"p"},"L")," means the scanning the source from ",(0,r.kt)("strong",{parentName:"p"},"L"),"eft to right,\nand the second ",(0,r.kt)("strong",{parentName:"p"},"L")," means the construction of a ",(0,r.kt)("strong",{parentName:"p"},"L"),"eftmost derivation tree."),(0,r.kt)("p",null,"Context-free and the (1) in LL(1) means a tree can be constructed by just peeking at the next token and nothing else."),(0,r.kt)("p",null,"LL Grammars are of particular interest in academia because we are lazy human beings and we want to write programs that generate parsers automatically so we don't need to write parsers by hand."),(0,r.kt)("p",null,"Unfortunately, most industrial programming languages do not have a nice LL(1) grammar,\nand this applies to JavaScript too."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Mozilla started the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus"},"jsparagus")," project a few years ago\nand wrote a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus/tree/master/jsparagus"},"LALR parser generator in Python"),".\nThey haven't updated it much in the past two years and they sent a strong message at the end of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mozilla-spidermonkey/jsparagus/blob/master/js-quirks.md"},"js-quirks.md")),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"What have we learned today?"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"Do not write a JS parser."),(0,r.kt)("li",{parentName:"ul"},"JavaScript has some syntactic horrors in it. But hey, you don't make the world's most widely used programming language by avoiding all mistakes. You do it by shipping a serviceable tool, in the right circumstances, for the right users.")))),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The only practical way to parse JavaScript is to write a recursive descent parser by hand because of the nature of its grammar,\nso let's learn all the quirks in the grammar before we shoot ourselves in the foot."),(0,r.kt)("p",null,"The list below starts simple and will become difficult to grasp,\nso please take grab a coffee and take your time."),(0,r.kt)("h2",{id:"identifiers"},"Identifiers"),(0,r.kt)("p",null,"There are three types of identifiers defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"#sec-identifiers"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"IdentifierReference[Yield, Await] :\nBindingIdentifier[Yield, Await] :\nLabelIdentifier[Yield, Await] :\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"estree")," and some ASTs do not distinguish the above identifiers,\nand the specification does not explain them in plain text."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BindingIdentifier"),"s are declarations and ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifierReference"),"s are references to binding identifiers.\nFor example in ",(0,r.kt)("inlineCode",{parentName:"p"},"var foo = bar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"BindingIdentifier")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifierReference")," in the grammar:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"VariableDeclaration[In, Yield, Await] :\n    BindingIdentifier[?Yield, ?Await] Initializer[?In, ?Yield, ?Await] opt\n\nInitializer[In, Yield, Await] :\n    = AssignmentExpression[?In, ?Yield, ?Await]\n")),(0,r.kt)("p",null,"follow ",(0,r.kt)("inlineCode",{parentName:"p"},"AssignmentExpression")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryExpression")," we get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"PrimaryExpression[Yield, Await] :\n    IdentifierReference[?Yield, ?Await]\n")),(0,r.kt)("p",null,"Declaring these identifiers differently in the AST will greatly simply downstream tools, especially for semantic analysis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct BindingIdentifier {\n    pub node: Node,\n    pub name: Atom,\n}\n\npub struct IdentifierReference {\n    pub node: Node,\n    pub name: Atom,\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"class-and-strict-mode"},"Class and Strict Mode"),(0,r.kt)("p",null,"ECMAScript Class is born after strict mode, so they decided that everything inside a class must be strict mode for simplicity.\nIt is stated as such in ",(0,r.kt)("inlineCode",{parentName:"p"},"#sec-class-definitions")," with just a ",(0,r.kt)("inlineCode",{parentName:"p"},"Node: A class definition is always strict mode code.")),(0,r.kt)("p",null,"It is easy to declare strict mode by associating it with function scopes, but a ",(0,r.kt)("inlineCode",{parentName:"p"},"class")," declaration does not have a scope,\nwe need to keep an extra state just for parsing classes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/swc-project/swc/blob/f9c4eff94a133fa497778328fa0734aa22d5697c/crates/swc_ecma_parser/src/parser/class_and_fn.rs#L85\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"legacy-octal-and-use-strict"},"Legacy Octal and Use Strict"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"#sec-string-literals-early-errors")," disallows escaped legacy octal inside strings ",(0,r.kt)("inlineCode",{parentName:"p"},'"\\01"'),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"EscapeSequence ::\n    LegacyOctalEscapeSequence\n    NonOctalDecimalEscapeSequence\n\nIt is a Syntax Error if the source text matched by this production is strict mode code.\n")),(0,r.kt)("p",null,"The best place to detect this is inside the lexer, it can ask the parser for strict mode state and throw errors accordingly."),(0,r.kt)("p",null,"But, this becomes impossible when mixed with directives:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"reference",reference:!0},"https://github.com/tc39/test262/blob/747bed2e8aaafe8fdf2c65e8a10dd7ae64f66c47/test/language/literals/string/legacy-octal-escape-sequence-prologue-strict.js#L16-L19\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"use strict")," is declared after the escaped legacy octal, yet the syntax error needs to be thrown.\nFortunately, no real code uses directives with legacy octals ... unless you want to pass the test262 case from above."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"non-simple-parameter-and-strict-mode"},"Non-simple Parameter and Strict Mode"),(0,r.kt)("p",null,"Identical function parameters is allowed in non-strict mode ",(0,r.kt)("inlineCode",{parentName:"p"},"function foo(a, a) { }"),",\nand we can forbid this by adding ",(0,r.kt)("inlineCode",{parentName:"p"},"use strict"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'function foo(a, a) { "use strict" }'),".\nLater on in es6, other grammars were added to function parameters, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"function foo({ a }, b = c) {}"),"."),(0,r.kt)("p",null,'Now, what happens if we write the following where "01" is a strict mode error?'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javaScript"},'function foo(value=(function() { return "\\01" }())) {\n    "use strict";\n    return value;\n}\n')),(0,r.kt)("p",null,"More specifically, what should we do if there is a strict mode syntax error inside the parameters thinking from the parser perspective?\nSo in ",(0,r.kt)("inlineCode",{parentName:"p"},"#sec-function-definitions-static-semantics-early-errors"),", it just bans this by stating"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"FunctionDeclaration :\nFunctionExpression :\n\nIt is a Syntax Error if FunctionBodyContainsUseStrict of FunctionBody is true and IsSimpleParameterList of FormalParameters is false.\n")),(0,r.kt)("p",null,"Chrome throws this error with a mysterious message \"Uncaught SyntaxError: Illegal 'use strict' directive in function with non-simple parameter list\"."),(0,r.kt)("p",null,"A more in-depth explanation is described in ",(0,r.kt)("a",{parentName:"p",href:"https://humanwhocodes.com/blog/2016/10/the-ecmascript-2016-change-you-probably-dont-know/"},"this blog post")," by the author of ESLint."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Fun fact, the above rule does not apply if we are targeting ",(0,r.kt)("inlineCode",{parentName:"p"},"es5")," in TypeScript, it transpiles to"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javaScript"},'function foo(a, b) {\n    "use strict";\n    if (b === void 0) { b = "\\01"; }\n}\n'))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"parenthesized-expression"},"Parenthesized Expression"),(0,r.kt)("p",null,"Parenthesized expressions are supposed to not have any semantic meanings?\nFor instance the AST for ",(0,r.kt)("inlineCode",{parentName:"p"},"((x))")," can just be a single ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifierReference"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"ParenthesizedExpression")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"ParenthesizedExpression")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifierReference"),".\nAnd this is the case for JavaScript grammar."),(0,r.kt)("p",null,"But ... who would have thought it can have run-time meanings.\nFound in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estree/estree/issues/194"},"this estree issue"),", it shows that"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"> fn = function () {};\n> fn.name\n< \"fn\"\n\n> (fn) = function () {};\n> fn.name\n< ''\n")),(0,r.kt)("p",null,"So eventually acorn and babel added the ",(0,r.kt)("inlineCode",{parentName:"p"},"preserveParens")," option for compatibility."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"function-declaration-in-if-statement"},"Function Declaration in If Statement"),(0,r.kt)("p",null,"If we follow the grammar precisely in ",(0,r.kt)("inlineCode",{parentName:"p"},"#sec-ecmascript-language-statements-and-declarations"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"Statement[Yield, Await, Return] :\n    ... lots of statements\n\nDeclaration[Yield, Await] :\n    ... declarations\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement")," node we define for our AST would obviously not contain ",(0,r.kt)("inlineCode",{parentName:"p"},"Declaration"),","),(0,r.kt)("p",null,"but in Annex B ",(0,r.kt)("inlineCode",{parentName:"p"},"#sec-functiondeclarations-in-ifstatement-statement-clauses"),",\nit allows declaration inside the statement position of ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statements in non-strict mode:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"if (x) function foo() {}\nelse function bar() {}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"label-statement-is-legit"},"Label statement is legit"),(0,r.kt)("p",null,"We probably have never ever written a single line of labelled statement, but it is actually legit in modern JavaScript and not banned by strict mode."),(0,r.kt)("p",null,"The following syntax is correct, it returns a labelled statement (not object literal)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const foo = (bar) => ({ baz: quaz });\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"let-is-not-a-keyword"},(0,r.kt)("inlineCode",{parentName:"h2"},"let")," is not a keyword"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"let")," is not a keyword so it is allowed to appear anywhere unless the grammar explicitly states ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," is not allowed in such positions.\nParsers need to peek at the token after the ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," token and decide what it needs to be parsed into, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let a;\nlet = foo;\nlet instanceof x;\nlet + 1;\nwhile (true) let;\na = let[0];\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"for-in--for-of-and-the-in-context"},"For-in / For-of and the ","[In]"," context"),(0,r.kt)("p",null,"If we look at the grammar for ",(0,r.kt)("inlineCode",{parentName:"p"},"for-in")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"for-of")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"#prod-ForInOfStatement"),",\nit is immediately confusing to understand how to parse these."),(0,r.kt)("p",null,"There are two major obstacles for us to understand: the ",(0,r.kt)("inlineCode",{parentName:"p"},"[lookahead \u2260 let]")," part and the ",(0,r.kt)("inlineCode",{parentName:"p"},"[+In]")," part."),(0,r.kt)("p",null,"If we have parsed to ",(0,r.kt)("inlineCode",{parentName:"p"},"for (let"),", we need to check the peeking token is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"not ",(0,r.kt)("inlineCode",{parentName:"li"},"in")," to disallow ",(0,r.kt)("inlineCode",{parentName:"li"},"for (let in)")),(0,r.kt)("li",{parentName:"ul"},"is ",(0,r.kt)("inlineCode",{parentName:"li"},"{"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"[")," or an identifier to allow ",(0,r.kt)("inlineCode",{parentName:"li"},"for (let {} = foo)"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"for (let [] = foo)")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"for (let bar = foo)"))),(0,r.kt)("p",null,"Once reached the ",(0,r.kt)("inlineCode",{parentName:"p"},"of")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," keyword, the right-hand side expression needs to be passed with the correct ","[+In]"," context to disallow\nthe two ",(0,r.kt)("inlineCode",{parentName:"p"},"in")," expression in ",(0,r.kt)("inlineCode",{parentName:"p"},"#prod-RelationalExpression"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"RelationalExpression[In, Yield, Await] :\n    [+In] RelationalExpression[+In, ?Yield, ?Await] in ShiftExpression[?Yield, ?Await]\n    [+In] PrivateIdentifier in ShiftExpression[?Yield, ?Await]\n\nNote 2: The [In] grammar parameter is needed to avoid confusing the in operator in a relational expression with the in operator in a for statement.\n")),(0,r.kt)("p",null,"And this is the only application for the ",(0,r.kt)("inlineCode",{parentName:"p"},"[In]")," context in the entire specification."),(0,r.kt)("p",null,"Also to note, the grammar ",(0,r.kt)("inlineCode",{parentName:"p"},"[lookahead \u2209 { let, async of }]")," forbids ",(0,r.kt)("inlineCode",{parentName:"p"},"for (async of ...)"),",\nand it needs to be explicitly guarded against."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"block-level-function-declarations"},"Block-Level Function Declarations"),(0,r.kt)("p",null,"In Annex B.3.2 ",(0,r.kt)("inlineCode",{parentName:"p"},"#sec-block-level-function-declarations-web-legacy-compatibility-semantics"),",\nan entire page is dedicated to explain how ",(0,r.kt)("inlineCode",{parentName:"p"},"FunctionDeclaration")," is supposed to behave in ",(0,r.kt)("inlineCode",{parentName:"p"},"Block")," statements.\nIt boils down to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"reference",reference:!0},"https://github.com/acornjs/acorn/blob/11735729c4ebe590e406f952059813f250a4cbd1/acorn/src/scope.js#L30-L35\n")),(0,r.kt)("p",null,"The name of a ",(0,r.kt)("inlineCode",{parentName:"p"},"FunctionDeclaration")," needs to be treated the same as a ",(0,r.kt)("inlineCode",{parentName:"p"},"var")," declaration if its inside a function declaration.\nThis code snippet errors with a re-declaration error since ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," is inside a block scope:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function foo() {\n  if (true) {\n    var bar;\n    function bar() {} // redeclaration error\n  }\n}\n")),(0,r.kt)("p",null,"meanwhile, the following does not error because it is inside a function scope, function ",(0,r.kt)("inlineCode",{parentName:"p"},"bar")," is treated as a var declaration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"function foo() {\n  var bar;\n  function bar() {}\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"grammar-context"},"Grammar Context"),(0,r.kt)("p",null,"The syntactic grammar has 5 context parameters for allowing and disallowing certain constructs,\nnamely ",(0,r.kt)("inlineCode",{parentName:"p"},"[In]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[Return]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[Yield]"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"[Await]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"[Default]"),"."),(0,r.kt)("p",null,"It is best to keep a context during parsing, for example in Rome:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:"reference",reference:!0},"https://github.com/rome/tools/blob/5a059c0413baf1d54436ac0c149a829f0dfd1f4d/crates/rome_js_parser/src/state.rs#L404-L425\n")),(0,r.kt)("p",null,"And toggle and check these flags accordingly by following the grammar."),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The following cases are really difficult to grasp. Here be dragons.")),(0,r.kt)("h2",{id:"ambiguous-grammar"},"Ambiguous Grammar"),(0,r.kt)("p",null,"Let's first think like a parser and solve the problem - given the ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," token, is it a division operator or the start of a regex expression?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"a / b;\na / / regex /;\na /= / regex /;\n/ regex / / b;\n/=/ / /=/;\n")),(0,r.kt)("p",null,"It is almost impossible, isn't it? Let's break these down and follow the grammar."),(0,r.kt)("p",null,"The first thing we need to understand is that the syntactic grammar drives the lexical grammar as stated in ",(0,r.kt)("inlineCode",{parentName:"p"},"#sec-ecmascript-language-lexical-grammar")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"There are several situations where the identification of lexical input elements is sensitive to the syntactic grammar context that is consuming the input elements.")),(0,r.kt)("p",null,"This means that the parser is responsible for telling the lexer which token to return next.\nThe above example indicates that the lexer needs to return either a ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," token or a ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," token.\nFor getting the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," token, the specification says:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The InputElementRegExp goal symbol is used in all syntactic grammar contexts where a RegularExpressionLiteral is permitted ...\nIn all other contexts, InputElementDiv is used as the lexical goal symbol.")),(0,r.kt)("p",null,"And the syntax for ",(0,r.kt)("inlineCode",{parentName:"p"},"InputElementDiv")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"InputElementRegExp")," are"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"InputElementDiv ::\n    WhiteSpace\n    LineTerminator\n    Comment\n    CommonToken\n    DivPunctuator <---------- the `/` and `/=` token\n    RightBracePunctuator\n\nInputElementRegExp ::\n    WhiteSpace\n    LineTerminator\n    Comment\n    CommonToken\n    RightBracePunctuator\n    RegularExpressionLiteral <-------- the `RegExp` token\n")),(0,r.kt)("p",null,"This means whenever the grammar reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"RegularExpressionLiteral"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," need to be tokenized as a ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp")," token (and throw an error if it does not have a matching ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),").\nAll other cases we'll tokenize ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," as a slash token."),(0,r.kt)("p",null,"Let's walk through an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"a / / regex /\n^ ------------ PrimaryExpression:: IdentifierReference\n  ^ ---------- MultiplicativeExpression: MultiplicativeExpression MultiplicativeOperator ExponentiationExpression\n    ^^^^^^^^ - PrimaryExpression: RegularExpressionLiteral\n")),(0,r.kt)("p",null,"This statement does not match any other start of ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement"),",\nso it'll go down the ",(0,r.kt)("inlineCode",{parentName:"p"},"ExpressionStatement")," route:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ExpressionStatement")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"AssignmentExpression")," --\x3e ... --\x3e\n",(0,r.kt)("inlineCode",{parentName:"p"},"MultiplicativeExpression")," --\x3e ... --\x3e\n",(0,r.kt)("inlineCode",{parentName:"p"},"MemberExpression")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryExpression")," --\x3e ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifierReference"),"."),(0,r.kt)("p",null,"We stopped at ",(0,r.kt)("inlineCode",{parentName:"p"},"IdentifierReference")," and not ",(0,r.kt)("inlineCode",{parentName:"p"},"RegularExpressionLiteral"),',\nthe statement "In all other contexts, InputElementDiv is used as the lexical goal symbol" applies.\nThe first slash is a ',(0,r.kt)("inlineCode",{parentName:"p"},"DivPunctuator")," token."),(0,r.kt)("p",null,"Since this is a ",(0,r.kt)("inlineCode",{parentName:"p"},"DivPunctuator")," token,\nthe grammar ",(0,r.kt)("inlineCode",{parentName:"p"},"MultiplicativeExpression: MultiplicativeExpression MultiplicativeOperator ExponentiationExpression")," is matched,\nthe right-hand side is expected to be an ",(0,r.kt)("inlineCode",{parentName:"p"},"ExponentiationExpression"),"."),(0,r.kt)("p",null,"Now we are at the second slash in ",(0,r.kt)("inlineCode",{parentName:"p"},"a / /"),".\nBy following ",(0,r.kt)("inlineCode",{parentName:"p"},"ExponentiationExpression"),",\nwe reach ",(0,r.kt)("inlineCode",{parentName:"p"},"PrimaryExpression: RegularExpressionLiteral")," because ",(0,r.kt)("inlineCode",{parentName:"p"},"RegularExpressionLiteral")," is the only matching grammar with a ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"RegularExpressionLiteral ::\n    / RegularExpressionBody / RegularExpressionFlags\n")),(0,r.kt)("p",null,"This second ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," will be tokenized as ",(0,r.kt)("inlineCode",{parentName:"p"},"RegExp"),' because\nthe specification states "The InputElementRegExp goal symbol is used in all syntactic grammar contexts where a RegularExpressionLiteral is permitted".'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As an exercise, try and follow the grammar for ",(0,r.kt)("inlineCode",{parentName:"p"},"/=/ / /=/"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"cover-grammar"},"Cover Grammar"),(0,r.kt)("p",null,"Read the ",(0,r.kt)("a",{parentName:"p",href:"https://v8.dev/blog/understanding-ecmascript-part-4"},"V8 blog post")," on this topic first."),(0,r.kt)("p",null,"To summarize, the specification states the following three cover grammars:"),(0,r.kt)("h4",{id:"coverparenthesizedexpressionandarrowparameterlist"},"CoverParenthesizedExpressionAndArrowParameterList"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"PrimaryExpression[Yield, Await] :\n    CoverParenthesizedExpressionAndArrowParameterList[?Yield, ?Await]\n\nWhen processing an instance of the production\nPrimaryExpression[Yield, Await] : CoverParenthesizedExpressionAndArrowParameterList[?Yield, ?Await]\n    the interpretation of CoverParenthesizedExpressionAndArrowParameterList is refined using the following grammar:\n\nParenthesizedExpression[Yield, Await] :\n    ( Expression[+In, ?Yield, ?Await] )\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"ArrowFunction[In, Yield, Await] :\n    ArrowParameters[?Yield, ?Await] [no LineTerminator here] => ConciseBody[?In]\n\nArrowParameters[Yield, Await] :\n    BindingIdentifier[?Yield, ?Await]\n    CoverParenthesizedExpressionAndArrowParameterList[?Yield, ?Await]\n")),(0,r.kt)("p",null,"These definitions defines:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let foo = (a, b, c); // SequenceExpression\nlet bar = (a, b, c) => {}; // ArrowExpression\n          ^^^^^^^^^ CoverParenthesizedExpressionAndArrowParameterList\n")),(0,r.kt)("p",null,"The easiest but more cumbersome approach to solving this problem is to define an intermediate struct that holds this AST node,\nthen write two converter functions to convert it to either a ",(0,r.kt)("inlineCode",{parentName:"p"},"SequenceExpression")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrowParameters")," node."),(0,r.kt)("p",null,"A more complicated approach is to try and parse this as a ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrowParameters")," first, but rewind and re-parse if it does not reach ",(0,r.kt)("inlineCode",{parentName:"p"},"=>"),".\nThis is the only applicable approach if TypeScript is being parsed here."),(0,r.kt)("p",null,"There is another caveat here. When building the scope tree in the parser,\ni.e. create the scope for arrow expression during parsing, but do not create one for sequence expression,\nit is not obvious how to do this. Luckily, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evanw/esbuild"},"esbuild")," solved this problem by creating a temporary scope first,\nand then dropping it if it is not an ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrowExpression"),"."),(0,r.kt)("p",null,"This is stated in its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/evanw/esbuild/blob/master/docs/architecture.md#symbols-and-scopes"},"architecture document"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is mostly pretty straightforward except for a few places where the parser has pushed a scope and is in the middle of parsing a declaration only to discover that it's not a declaration after all. This happens in TypeScript when a function is forward-declared without a body, and in JavaScript when it's ambiguous whether a parenthesized expression is an arrow function or not until we reach the => token afterwards. This would be solved by doing three passes instead of two so we finish parsing before starting to set up scopes and declare symbols, but we're trying to do this in just two passes. So instead we call popAndDiscardScope() or popAndFlattenScope() instead of popScope() to modify the scope tree later if our assumptions turn out to be incorrect.")),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"covercallexpressionandasyncarrowhead"},"CoverCallExpressionAndAsyncArrowHead"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"CallExpression :\n    CoverCallExpressionAndAsyncArrowHead\n\nWhen processing an instance of the production\nCallExpression : CoverCallExpressionAndAsyncArrowHead\nthe interpretation of CoverCallExpressionAndAsyncArrowHead is refined using the following grammar:\n\nCallMemberExpression[Yield, Await] :\n    MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"AsyncArrowFunction[In, Yield, Await] :\n    CoverCallExpressionAndAsyncArrowHead[?Yield, ?Await] [no LineTerminator here] => AsyncConciseBody[?In]\n\nCoverCallExpressionAndAsyncArrowHead[Yield, Await] :\n    MemberExpression[?Yield, ?Await] Arguments[?Yield, ?Await]\n\nWhen processing an instance of the production\nAsyncArrowFunction : CoverCallExpressionAndAsyncArrowHead => AsyncConciseBody\nthe interpretation of CoverCallExpressionAndAsyncArrowHead is refined using the following grammar:\n\nAsyncArrowHead :\n    async [no LineTerminator here] ArrowFormalParameters[~Yield, +Await]\n")),(0,r.kt)("p",null,"These definitions define:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async (a, b, c); // CallExpression\nasync (a, b, c) => {} // AsyncArrowFunction\n^^^^^^^^^^^^^^^ CoverCallExpressionAndAsyncArrowHead\n")),(0,r.kt)("p",null,"This looks strange because ",(0,r.kt)("inlineCode",{parentName:"p"},"async")," is not a keyword. These two ",(0,r.kt)("inlineCode",{parentName:"p"},"async"),"s are function names."),(0,r.kt)("hr",null),(0,r.kt)("h4",{id:"coverinitializedname"},"CoverInitializedName"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},"13.2.5 Object Initializer\n\nObjectLiteral[Yield, Await] :\n    ...\n\nPropertyDefinition[Yield, Await] :\n    CoverInitializedName[?Yield, ?Await]\n\nNote 3: In certain contexts, ObjectLiteral is used as a cover grammar for a more restricted secondary grammar.\nThe CoverInitializedName production is necessary to fully cover these secondary grammars. However, use of this production results in an early Syntax Error in normal contexts where an actual ObjectLiteral is expected.\n\n13.2.5.1 Static Semantics: Early Errors\n\nIn addition to describing an actual object initializer the ObjectLiteral productions are also used as a cover grammar for ObjectAssignmentPattern and may be recognized as part of a CoverParenthesizedExpressionAndArrowParameterList. When ObjectLiteral appears in a context where ObjectAssignmentPattern is required the following Early Error rules are not applied. In addition, they are not applied when initially parsing a CoverParenthesizedExpressionAndArrowParameterList or CoverCallExpressionAndAsyncArrowHead.\n\nPropertyDefinition : CoverInitializedName\n    I* t is a Syntax Error if any source text is matched by this production.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-makrup"},"13.15.1 Static Semantics: Early Errors\n\nAssignmentExpression : LeftHandSideExpression = AssignmentExpression\nIf LeftHandSideExpression is an ObjectLiteral or an ArrayLiteral, the following Early Error rules are applied:\n    * LeftHandSideExpression must cover an AssignmentPattern.\n")),(0,r.kt)("p",null,"These definitions define:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"({ prop = value } = {}); // ObjectAssignmentPattern\n({ prop = value }); // ObjectLiteral with SyntaxError\n")),(0,r.kt)("p",null,"Parsers need to parse ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectLiteral")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"CoverInitializedName"),",\nand throw the syntax error if it does not reach ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"ObjectAssignmentPattern"),"."),(0,r.kt)("p",null,"As an exercise, which one of the following ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," should throw a syntax error?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"let { x = 1 } = { x = 1 } = { x = 1 }\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[392],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(2081),r=(n(9496),n(9613));const o={id:"ast",title:"Abstract Syntax Tree"},i=void 0,s={unversionedId:"ast",id:"ast",title:"Abstract Syntax Tree",description:"The parser in the upcoming chapter is responsible for turning Tokens into an abstract syntax tree (AST).",source:"@site/docs/ast.md",sourceDirName:".",slug:"/ast",permalink:"/javascript-parser-in-rust/docs/ast",draft:!1,editUrl:"https://github.com/Boshen/javascript-parser-in-rust/tree/main/docs/docs/ast.md",tags:[],version:"current",frontMatter:{id:"ast",title:"Abstract Syntax Tree"},sidebar:"tutorialSidebar",previous:{title:"Lexer",permalink:"/javascript-parser-in-rust/docs/lexer"},next:{title:"Parser",permalink:"/javascript-parser-in-rust/docs/parser"}},l={},p=[{value:"Getting familiar with the AST",id:"getting-familiar-with-the-ast",level:2},{value:"estree",id:"estree",level:2},{value:"Rust Optimizations",id:"rust-optimizations",level:2},{value:"Memory Allocations",id:"memory-allocations",level:3},{value:"Enum Size",id:"enum-size",level:3},{value:"Memory Arena",id:"memory-arena",level:4},{value:"Serde Serialization",id:"serde-serialization",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The parser in the upcoming chapter is responsible for turning Tokens into an abstract syntax tree (AST).\nIt is much nicer to work on the AST compared to the source text."),(0,r.kt)("p",null,"All JavaScript toolings work on the AST level, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A linter (e.g. eslint) checks the AST for errors"),(0,r.kt)("li",{parentName:"ul"},"A formatter (e.g.prettier) prints the AST back to JavaScript text"),(0,r.kt)("li",{parentName:"ul"},"A minifier (e.g. terser) transforms the AST"),(0,r.kt)("li",{parentName:"ul"},"A bundler connects all import and export statements between ASTs from different files")),(0,r.kt)("p",null,"In this chapter, let's construct a JavaScript AST by using Rust structs and enums."),(0,r.kt)("h2",{id:"getting-familiar-with-the-ast"},"Getting familiar with the AST"),(0,r.kt)("p",null,"To get ourselves comfortable with an AST, let's visit ",(0,r.kt)("a",{parentName:"p",href:"https://astexplorer.net/"},"ASTExplorer")," and see what it looks like.\nOn the top panel, select JavaScript, and then ",(0,r.kt)("inlineCode",{parentName:"p"},"acorn"),", type in ",(0,r.kt)("inlineCode",{parentName:"p"},"var a")," and we will see a tree view and a JSON view."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Program",\n  "start": 0,\n  "end": 5,\n  "body": [\n    {\n      "type": "VariableDeclaration",\n      "start": 0,\n      "end": 5,\n      "declarations": [\n        {\n          "type": "VariableDeclarator",\n          "start": 4,\n          "end": 5,\n          "id": {\n            "type": "Identifier",\n            "start": 4,\n            "end": 5,\n            "name": "a"\n          },\n          "init": null\n        }\n      ],\n      "kind": "var"\n    }\n  ],\n  "sourceType": "script"\n}\n')),(0,r.kt)("p",null,"Since this is a tree, every object is a node with a type name (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Program"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VariableDeclaration"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"VariableDeclarator"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Identifier"),").\n",(0,r.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," are the offsets from the source."),(0,r.kt)("h2",{id:"estree"},"estree"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/estree/estree"},"estree")," is a community standard grammar specification for JavaScript,\nit defines ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/estree/estree/blob/master/es5.md"},"all the AST nodes")," so different tools\ncan be compatible with each other."),(0,r.kt)("p",null,"The basic building block for any AST node is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Debug, Default, Clone, Copy, Serialize, PartialEq, Eq)]\npub struct Node {\n    /// Start offset in source\n    pub start: usize,\n\n    /// End offset in source\n    pub end: usize,\n}\n\nimpl Node {\n    pub fn new(start: usize, end: usize) -> Self {\n        Self { start, end }\n    }\n}\n")),(0,r.kt)("p",null,"Rust does not have inheritance, so composition is used instead.\nAST for ",(0,r.kt)("inlineCode",{parentName:"p"},"var a")," is defined as"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Program {\n    pub node: Node,\n    pub body: Vec<Statement>,\n}\n\npub enum Statement {\n    VariableDeclarationStatement(VariableDeclaration),\n}\n\npub struct VariableDeclaration {\n    pub node: Node,\n    pub declarations: Vec<VariableDeclarator>,\n}\n\npub struct VariableDeclarator {\n    pub node: Node,\n    pub id: BindingIdentifier,\n    pub init: Option<Expression>,\n}\n\npub struct BindingIdentifier {\n    pub node: Node,\n    pub name: String,\n}\n\npub enum Expression {\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Statement"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression"),"s are enums because they will be expanded with a lot of other node types, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Expression {\n    AwaitExpression(AwaitExpression),\n    YieldExpression(YieldExpression),\n}\n\npub struct AwaitExpression {\n    pub node: Node,\n    pub expression: Box<Expression>,\n}\n\npub struct YieldExpression {\n    pub node: Node,\n    pub expression: Box<Expression>,\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," is needed because self-referential structs are not allowed in Rust."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"JavaScript grammar has a lot of nuisances, read the ",(0,r.kt)("a",{parentName:"p",href:"/blog/grammar"},"grammar tutorial")," for amusement.")),(0,r.kt)("h2",{id:"rust-optimizations"},"Rust Optimizations"),(0,r.kt)("h3",{id:"memory-allocations"},"Memory Allocations"),(0,r.kt)("p",null,"Back in the ",(0,r.kt)("a",{parentName:"p",href:"./overview"},"Overview")," chapter,\nI briefly mentioned that we need to look out for heap-allocated structs such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," because heap allocations are not cheap."),(0,r.kt)("p",null,"Take a look at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/swc-project/swc/blob/main/crates/swc_ecma_ast/src/expr.rs"},"real word implementation from swc"),",\nwe can see that an AST can have lots of ",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec"),"s, and also note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression")," enums contain\na dozen of enum variants."),(0,r.kt)("h3",{id:"enum-size"},"Enum Size"),(0,r.kt)("p",null,"The first optimization we are going to make is to reduce the size of the enums."),(0,r.kt)("p",null,"It is known that the byte size of a Rust enum is the union of all its variants.\nFor example, the following enum will take up 56 bytes (1 byte for the tag, 48 bytes for the payload, and 8 bytes for alignment padding)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"enum Name {\n    Anonymous, // 0 byte payload\n    Nickname(String), // 24 byte payload\n    FullName{ first: String, last: String }, // 48 byte payload\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The above example is taken from ",(0,r.kt)("a",{parentName:"p",href:"https://adeschamps.github.io/enum-size"},"this blog post"))),(0,r.kt)("p",null,"As for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Expression")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Statement")," enums, they can take up to more than 200 bytes with our current setup."),(0,r.kt)("p",null,"These 200 bytes need to be passed around, or accessed every time we do a ",(0,r.kt)("inlineCode",{parentName:"p"},"matches!(expr, Expression::AwaitExpression(_))")," check,\nwhich is not very cache friendly for performance."),(0,r.kt)("p",null,"A better approach would be to box the enum variants and only carry 16 bytes around."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum Expression {\n    AwaitExpression(Box<AwaitExpression>),\n    YieldExpression(Box<YieldExpression>),\n}\n\npub struct AwaitExpression {\n    pub node: Node,\n    pub expression: Expression,\n}\n\npub struct YieldExpression {\n    pub node: Node,\n    pub expression: Expression,\n}\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To make sure the enums are indeed 16 bytes, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"std::mem::size_of"),'.\n"no bloat enum sizes" test cases can often be seen in the Rust Compiler source code for ensuring small enum sizes.'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[test]\nfn no_bloat_enum_sizes() {\n    use std::mem::size_of;\n    assert_eq!(size_of::<Statement>(), 16);\n    assert_eq!(size_of::<Expression>(), 16);\n}\n"))),(0,r.kt)("h4",{id:"memory-arena"},"Memory Arena"),(0,r.kt)("p",null,"Using the global memory allocator for the AST is actually not really efficient.\nEvery ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," are allocated on demand and then dropped separately.\nWhat we would like to do is pre-allocate memory and drop it in wholesale."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More on this topic can be ready at ",(0,r.kt)("a",{parentName:"p",href:"https://manishearth.github.io/blog/2021/03/15/arenas-in-rust/"},"this blog post"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/bumpalo/latest/bumpalo/"},(0,r.kt)("inlineCode",{parentName:"a"},"bumpalo"))," is a very good candidate for our use case, according to its documentation:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Bump allocation is a fast, but limited approach to allocation.\nWe have a chunk of memory, and we maintain a pointer within that memory. Whenever we allocate an object,\nwe do a quick check that we have enough capacity left in our chunk to allocate the object and then update the pointer by the object\u2019s size. That\u2019s it!"),(0,r.kt)("p",{parentName:"blockquote"},"The disadvantage of bump allocation is that there is no general way to deallocate individual objects or reclaim the memory region for a no-longer-in-use object."),(0,r.kt)("p",{parentName:"blockquote"},"These trade offs make bump allocation well-suited for phase-oriented allocations. That is, a group of objects that will all be allocated during the same program phase, used, and then can all be deallocated together as a group.")),(0,r.kt)("p",null,"By using ",(0,r.kt)("inlineCode",{parentName:"p"},"bumpalo::collections::Vec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"bumpalo::boxed::Box"),", our AST will have lifetimes added to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use bumpalo::collections::Vec;\nuse bumpalo::boxed::Box;\n\npub enum Expression<'a> {\n    AwaitExpression(Box<'a, AwaitExpression>),\n    YieldExpression(Box<'a, YieldExpression>),\n}\n\npub struct AwaitExpression<'a> {\n    pub node: Node,\n    pub expression: Expression<'a>,\n}\n\npub struct YieldExpression<'a> {\n    pub node: Node,\n    pub expression: Expression<'a>,\n}\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please be cautious if we are not comfortable dealing with lifetimes at this stage.\nOur program will work fine without a memory arena.")),(0,r.kt)("h2",{id:"serde-serialization"},"Serde Serialization"),(0,r.kt)("p",null,"TODO"))}c.isMDXComponent=!0}}]);
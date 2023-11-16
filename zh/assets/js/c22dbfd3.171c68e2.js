"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[552],{2966:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(1527),i=s(7660);const t={id:"ast",title:"\u62bd\u8c61\u8bed\u6cd5\u6811 (Abstract Syntax Tree)"},a=void 0,c={id:"ast",title:"\u62bd\u8c61\u8bed\u6cd5\u6811 (Abstract Syntax Tree)",description:"\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\uff0c\u89e3\u6790\u5668\u8d1f\u8d23\u5c06\u6807\u8bb0\u8f6c\u6362\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\uff08Abstract Syntax Tree, AST\uff09\u3002\u4e0e\u6e90\u6587\u672c\u76f8\u6bd4\uff0c\u4f7f\u7528AST\u66f4\u52a0\u65b9\u4fbf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/ast.md",sourceDirName:".",slug:"/ast",permalink:"/javascript-parser-in-rust/zh/docs/ast",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/ast.md",tags:[],version:"current",frontMatter:{id:"ast",title:"\u62bd\u8c61\u8bed\u6cd5\u6811 (Abstract Syntax Tree)"},sidebar:"tutorialSidebar",previous:{title:"\u8bcd\u6cd5\u5206\u6790\u5668 (Lexer)",permalink:"/javascript-parser-in-rust/zh/docs/lexer"},next:{title:"\u89e3\u6790\u5668 (Parser)",permalink:"/javascript-parser-in-rust/zh/docs/parser"}},d={},l=[{value:"\u719f\u6089AST",id:"\u719f\u6089ast",level:2},{value:"estree",id:"estree",level:2},{value:"Rust \u4f18\u5316",id:"rust-\u4f18\u5316",level:2},{value:"\u5185\u5b58\u5206\u914d",id:"\u5185\u5b58\u5206\u914d",level:3},{value:"\u679a\u4e3e\u5927\u5c0f",id:"\u679a\u4e3e\u5927\u5c0f",level:3},{value:"\u5185\u5b58\u533a\u57df (Memory Arena)",id:"\u5185\u5b58\u533a\u57df-memory-arena",level:4},{value:"JSON \u5e8f\u5217\u5316",id:"json-\u5e8f\u5217\u5316",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\uff0c\u89e3\u6790\u5668\u8d1f\u8d23\u5c06\u6807\u8bb0\u8f6c\u6362\u4e3a\u62bd\u8c61\u8bed\u6cd5\u6811\uff08Abstract Syntax Tree, AST\uff09\u3002\u4e0e\u6e90\u6587\u672c\u76f8\u6bd4\uff0c\u4f7f\u7528AST\u66f4\u52a0\u65b9\u4fbf\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6240\u6709\u7684JavaScript\u5de5\u5177\u90fd\u5728AST\u7684\u5c42\u6b21\u4e0a\u5de5\u4f5c\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4ee3\u7801\u68c0\u67e5\u5de5\u5177\uff08\u5982eslint\uff09\u68c0\u67e5AST\u4e2d\u7684\u9519\u8bef"}),"\n",(0,r.jsx)(n.li,{children:"\u4ee3\u7801\u683c\u5f0f\u5316\u5de5\u5177\uff08\u5982prettier\uff09\u5c06AST\u6253\u5370\u56deJavaScript\u6587\u672c"}),"\n",(0,r.jsx)(n.li,{children:"\u4ee3\u7801\u538b\u7f29\u5de5\u5177\uff08\u5982terser\uff09\u8f6c\u6362AST"}),"\n",(0,r.jsx)(n.li,{children:"\u6253\u5305\u5de5\u5177\u8fde\u63a5\u4e0d\u540c\u6587\u4ef6\u7684AST\u4e2d\u7684\u5bfc\u5165\u548c\u5bfc\u51fa\u8bed\u53e5"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u672c\u7ae0\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Rust\u7684\u7ed3\u6784\u4f53\u548c\u679a\u4e3e\u6765\u6784\u5efa\u4e00\u4e2aJavaScript\u7684AST\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u719f\u6089ast",children:"\u719f\u6089AST"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u8ba9\u6211\u4eec\u5bf9AST\u66f4\u52a0\u719f\u6089\uff0c\u8ba9\u6211\u4eec\u8bbf\u95ee",(0,r.jsx)(n.a,{href:"https://astexplorer.net/",children:"ASTExplorer"}),"\u5e76\u770b\u770b\u5b83\u662f\u4ec0\u4e48\u6837\u5b50\u7684\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u9876\u90e8\u9762\u677f\u4e0a\u9009\u62e9JavaScript\uff0c\u7136\u540e\u9009\u62e9",(0,r.jsx)(n.code,{children:"acorn"}),"\uff0c\u8f93\u5165",(0,r.jsx)(n.code,{children:"var a"}),"\uff0c\u6211\u4eec\u5c06\u770b\u5230\u4e00\u4e2a\u6811\u5f62\u89c6\u56fe\u548c\u4e00\u4e2aJSON\u89c6\u56fe\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "type": "Program",\n  "start": 0,\n  "end": 5,\n  "body": [\n    {\n      "type": "VariableDeclaration",\n      "start": 0,\n      "end": 5,\n      "declarations": [\n        {\n          "type": "VariableDeclarator",\n          "start": 4,\n          "end": 5,\n          "id": {\n            "type": "Identifier",\n            "start": 4,\n            "end": 5,\n            "name": "a"\n          },\n          "init": null\n        }\n      ],\n      "kind": "var"\n    }\n  ],\n  "sourceType": "script"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u7531\u4e8e\u8fd9\u662f\u4e00\u68f5\u6811\uff0c\u6bcf\u4e2a\u5bf9\u8c61\u90fd\u662f\u4e00\u4e2a\u8282\u70b9\uff0c\u5177\u6709\u7c7b\u578b\u540d\u79f0\uff08\u4f8b\u5982",(0,r.jsx)(n.code,{children:"Program"}),"\uff0c",(0,r.jsx)(n.code,{children:"VariableDeclaration"}),"\uff0c",(0,r.jsx)(n.code,{children:"VariableDeclarator"}),"\uff0c",(0,r.jsx)(n.code,{children:"Identifier"}),"\uff09\u3002\n",(0,r.jsx)(n.code,{children:"start"}),"\u548c",(0,r.jsx)(n.code,{children:"end"}),"\u662f\u76f8\u5bf9\u4e8e\u6e90\u6587\u672c\u7684\u504f\u79fb\u91cf\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"estree",children:"estree"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/estree/estree",children:"estree"}),"\u662fJavaScript\u7684\u4e00\u4e2a\u793e\u533a\u6807\u51c6\u8bed\u6cd5\u89c4\u8303\uff0c\n\u5b83\u5b9a\u4e49\u4e86",(0,r.jsx)(n.a,{href:"https://github.com/estree/estree/blob/master/es5.md",children:"\u6240\u6709\u7684AST\u8282\u70b9"}),"\uff0c\u4ee5\u4fbf\u4e0d\u540c\u7684\u5de5\u5177\u53ef\u4ee5\u5f7c\u6b64\u517c\u5bb9\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Node"}),"\u7c7b\u578b\u662f\u6240\u6709AST\u8282\u70b9\u7684\u57fa\u7840\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[derive(Debug, Default, Clone, Copy, Serialize, PartialEq, Eq)]\npub struct Node {\n    /// \u5728\u6e90\u4ee3\u7801\u4e2d\u7684\u8d77\u59cb\u504f\u79fb\u91cf\n    pub start: usize,\n\n    /// \u5728\u6e90\u4ee3\u7801\u4e2d\u7684\u7ed3\u675f\u504f\u79fb\u91cf\n    pub end: usize,\n}\n\nimpl Node {\n    pub fn new(start: usize, end: usize) -> Self {\n        Self { start, end }\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"var a"}),"\u7684AST\u53ef\u5b9a\u4e49\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub struct Program {\n    pub node: Node,\n    pub body: Vec<Statement>,\n}\n\npub enum Statement {\n    VariableDeclarationStatement(VariableDeclaration),\n}\n\npub struct VariableDeclaration {\n    pub node: Node,\n    pub declarations: Vec<VariableDeclarator>,\n}\n\npub struct VariableDeclarator {\n    pub node: Node,\n    pub id: BindingIdentifier,\n    pub init: Option<Expression>,\n}\n\npub struct BindingIdentifier {\n    pub node: Node,\n    pub name: String,\n}\n\npub enum Expression {\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Rust\u6ca1\u6709\u7ee7\u627f\uff0c\u56e0\u6b64\u6bcf\u4e2a\u7ed3\u6784\u4f53\u9700\u8981\u6dfb\u52a0",(0,r.jsx)(n.code,{children:"Node"}),'\uff08\u8fd9\u79f0\u4e3a"\u7ec4\u5408\u4f18\u4e8e\u7ee7\u627f"\uff09\u3002']}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Statement"}),"\u548c",(0,r.jsx)(n.code,{children:"Expression"}),"\u662f\u679a\u4e3e\u7c7b\u578b\uff0c\u56e0\u4e3a\u5b83\u4eec\u5c06\u4f1a\u6269\u5c55\u4e3a\u8bb8\u591a\u5176\u4ed6\u8282\u70b9\u7c7b\u578b\uff0c\u4f8b\u5982\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub enum Expression {\n    AwaitExpression(AwaitExpression),\n    YieldExpression(YieldExpression),\n}\n\npub struct AwaitExpression {\n    pub node: Node,\n    pub expression: Box<Expression>,\n}\n\npub struct YieldExpression {\n    pub node: Node,\n    pub expression: Box<Expression>,\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u4e3a\u5728Rust\u4e2d\u4e0d\u5141\u8bb8\u81ea\u5f15\u7528\u7ed3\u6784\u4f53\uff0c\u6240\u4ee5\u9700\u8981\u4f7f\u7528",(0,r.jsx)(n.code,{children:"Box"}),"\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["JavaScript\u8bed\u6cd5\u6709\u5f88\u591a\u7ec6\u5fae\u800c\u7384\u5999\u4e4b\u5904\uff0c\u8bf7\u9605\u8bfb",(0,r.jsx)(n.a,{href:"/blog/grammar",children:"\u8bed\u6cd5\u6559\u7a0b"}),"\u4ee5\u83b7\u5f97\u4e50\u8da3\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"rust-\u4f18\u5316",children:"Rust \u4f18\u5316"}),"\n",(0,r.jsx)(n.h3,{id:"\u5185\u5b58\u5206\u914d",children:"\u5185\u5b58\u5206\u914d"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"/javascript-parser-in-rust/zh/docs/overview",children:"\u6982\u8ff0"}),"\u7ae0\u8282\u4e2d\u63d0\u5230\uff0c\u6211\u4eec\u9700\u8981\u989d\u5916\u6ce8\u610f\u5206\u914d\u5728\u5806\u4e0a\u7684\u7ed3\u6784\u4f53\uff0c\u5982",(0,r.jsx)(n.code,{children:"Vec"}),"\u548c",(0,r.jsx)(n.code,{children:"Box"}),"\u3002\u8fd9\u662f\u56e0\u4e3a\u5806\u5206\u914d\u5e76\u4e0d\u5ec9\u4ef7\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u770b\u4e00\u4e0b",(0,r.jsx)(n.a,{href:"https://github.com/swc-project/swc/blob/main/crates/swc_ecma_ast/src/expr.rs",children:"\u6765\u81ea swc \u9879\u76ee\u7684\u771f\u5b9e\u5b9e\u73b0"}),"\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230AST\u53ef\u80fd\u6709\u5f88\u591a",(0,r.jsx)(n.code,{children:"Box"}),"\u548c",(0,r.jsx)(n.code,{children:"Vec"}),"\uff0c\u8fd8\u8981\u6ce8\u610f",(0,r.jsx)(n.code,{children:"Statement"}),"\u548c",(0,r.jsx)(n.code,{children:"Expression"}),"\u679a\u4e3e\u5305\u542b\u5f88\u591a\u679a\u4e3e\u53d8\u4f53\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u679a\u4e3e\u5927\u5c0f",children:"\u679a\u4e3e\u5927\u5c0f"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u5c06\u8981\u505a\u7684\u7b2c\u4e00\u4e2a\u4f18\u5316\u662f\u51cf\u5c0f\u679a\u4e3e\u7684\u5927\u5c0f\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f17\u6240\u5468\u77e5\uff0cRust\u679a\u4e3e\u7684\u5b57\u8282\u5927\u5c0f\u662f\u5176\u6240\u6709\u53d8\u4f53\u7684\u8054\u5408 (union)\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u679a\u4e3e\u5c06\u5360\u752856\u5b57\u8282\uff081\u5b57\u8282\u7528\u4e8e\u6807\u7b7e\uff0c48\u5b57\u8282\u7528\u4e8e\u5b9e\u9645\u6570\u636e (payload)\uff0c8\u5b57\u8282\u7528\u4e8e\u5bf9\u9f50\uff09\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"enum Name {\n    Anonymous, // 0\u5b57\u8282\u5b9e\u9645\u6570\u636e\n    Nickname(String), // 24\u5b57\u8282\u5b9e\u9645\u6570\u636e\n    FullName{ first: String, last: String }, // 48\u5b57\u8282\u5b9e\u9645\u6570\u636e\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u6b64\u793a\u4f8b\u6458\u81ea",(0,r.jsx)(n.a,{href:"https://adeschamps.github.io/enum-size",children:"\u6b64\u535a\u6587"})]})}),"\n",(0,r.jsxs)(n.p,{children:["\u81f3\u4e8e",(0,r.jsx)(n.code,{children:"Expression"}),"\u548c",(0,r.jsx)(n.code,{children:"Statement"}),"\u679a\u4e3e\uff0c\u76ee\u524d\u770b\u6765\u5b83\u4eec\u53ef\u80fd\u5360\u7528\u8d85\u8fc7200\u5b57\u8282\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9200\u5b57\u8282\u9700\u8981\u4f20\u6765\u4f20\u53bb\u6216\u5728\u6bcf\u6b21\u8fdb\u884c",(0,r.jsx)(n.code,{children:"matches!(expr, Expression::AwaitExpression(_))"}),"\u5224\u65ad\u65f6\u8bbf\u95ee\uff0c\u8fd9\u5bf9\u6027\u80fd\u6765\u8bf4\u5e76\u4e0d\u53cb\u597d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u628a\u679a\u4e3e\u53d8\u4f53\u7528",(0,r.jsx)(n.code,{children:"Box"}),"\u5305\u8d77\u6765\u662f\u4e2a\u66f4\u597d\u7684\u65b9\u6cd5\uff0c\u8fd9\u6837\u53ea\u9700\u643a\u5e2616\u5b57\u8282\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub enum Expression {\n    AwaitExpression(Box<AwaitExpression>),\n    YieldExpression(Box<YieldExpression>),\n}\n\npub struct AwaitExpression {\n    pub node: Node,\n    pub expression: Expression,\n}\n\npub struct YieldExpression {\n    pub node: Node,\n    pub expression: Expression,\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u4e86\u786e\u4fdd\u572864\u4f4d\u7cfb\u7edf\u4e0a\u679a\u4e3e\u786e\u5b9e\u662f16\u5b57\u8282\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"std::mem::size_of"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"#[test]\nfn no_bloat_enum_sizes() {\n    use std::mem::size_of;\n    assert_eq!(size_of::<Statement>(), 16);\n    assert_eq!(size_of::<Expression>(), 16);\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:'"\u65e0\u81a8\u80c0\u7684\u679a\u4e3e\u5927\u5c0f (no bloat enum sizes)" \u6d4b\u8bd5\u7528\u4f8b\u7ecf\u5e38\u51fa\u73b0\u5728Rust\u7f16\u8bd1\u5668\u6e90\u4ee3\u7801\u4e2d\uff0c\u7528\u4e8e\u786e\u4fdd\u679a\u4e3e\u8db3\u591f\u5c0f\u3002'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rust-lang/rust/blob/9c20b2a8cc7588decb6de25ac6a7912dcef24d65/compiler/rustc_ast/src/ast.rs#L3033-L3042\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u8981\u627e\u5230\u5176\u4ed6\u6bd4\u8f83\u5927\u7684\u7c7b\u578b\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd0\u884c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"RUSTFLAGS=-Zprint-type-sizes cargo +nightly build -p name_of_the_crate --release\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u7136\u540e\u67e5\u770b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-markup",children:"print-type-size type: `ast::js::Statement`: 16 bytes, alignment: 8 bytes\nprint-type-size     discriminant: 8 bytes\nprint-type-size     variant `BlockStatement`: 8 bytes\nprint-type-size         field `.0`: 8 bytes\nprint-type-size     variant `BreakStatement`: 8 bytes\nprint-type-size         field `.0`: 8 bytes\nprint-type-size     variant `ContinueStatement`: 8 bytes\nprint-type-size         field `.0`: 8 bytes\nprint-type-size     variant `DebuggerStatement`: 8 bytes\nprint-type-size         field `.0`: 8 bytes\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u5185\u5b58\u533a\u57df-memory-arena",children:"\u5185\u5b58\u533a\u57df (Memory Arena)"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u4e8e AST \u4f7f\u7528\u5168\u5c40\u5185\u5b58\u5206\u914d\u5668\u5b9e\u9645\u4e0a\u5e76\u4e0d\u662f\u975e\u5e38\u9ad8\u6548\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u6bcf\u4e2a ",(0,r.jsx)(n.code,{children:"Box"})," \u548c ",(0,r.jsx)(n.code,{children:"Vec"})," \u90fd\u662f\u6309\u9700\u5206\u914d\u7136\u540e\u5355\u72ec drop \u7684\u3002\n\u6211\u4eec\u5e0c\u671b\u505a\u7684\u662f\u9884\u5148\u5206\u914d\u5185\u5b58\u7136\u540e\u4e00\u6b21\u6027 drop\u3002"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://manishearth.github.io/blog/2021/03/15/arenas-in-rust/",children:"\u8fd9\u7bc7\u535a\u5ba2\u6587\u7ae0"})," \u66f4\u8be6\u7ec6\u5730\u89e3\u91ca\u4e86\u5185\u5b58\u533a\u57df\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e\u5176\u6587\u6863\uff0c",(0,r.jsx)(n.a,{href:"https://docs.rs/bumpalo/latest/bumpalo/",children:(0,r.jsx)(n.code,{children:"bumpalo"})})," \u662f\u6211\u4eec\u4f7f\u7528\u7684\u4e00\u4e2a\u975e\u5e38\u597d\u7684\u9009\u62e9\uff1a"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Bump \u5206\u914d\u867d\u5feb\uff0c\u4f46\u6709\u5176\u5c40\u9650\u3002\n\u6211\u4eec\u6709\u4e00\u5757\u5185\u5b58\uff0c\u7136\u540e\u4e3a\u8fd9\u5757\u5185\u5b58\u7ef4\u62a4\u4e00\u4e2a\u6307\u9488\u3002\u6bcf\u5f53\u6211\u4eec\u5206\u914d\u4e00\u4e2a\u5bf9\u8c61\u65f6\uff0c\n\u6211\u4eec\u5feb\u901f\u68c0\u67e5\u4e00\u4e0b\u6211\u4eec\u7684\u5757\u4e2d\u662f\u5426\u8fd8\u6709\u8db3\u591f\u7684\u5bb9\u91cf\u6765\u5206\u914d\u8be5\u5bf9\u8c61\uff0c\u82e5\u662f\uff0c\u5219\u6839\u636e\u5bf9\u8c61\u7684\u5927\u5c0f\u66f4\u65b0\u6307\u9488\u3002\u5c31\u8fd9\u4e48\u7b80\u5355\uff01"}),"\n",(0,r.jsx)(n.p,{children:"Bump \u5206\u914d\u7684\u7f3a\u70b9\u662f\u4e00\u822c\u6ca1\u6709\u65b9\u6cd5\u6765\u91ca\u653e\u5355\u4e2a\u5bf9\u8c61\u6216\u4e3a\u4e0d\u518d\u4f7f\u7528\u7684\u5bf9\u8c61\u56de\u6536\u5185\u5b58\u533a\u57df\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd9\u4e9b\u6743\u8861\u4f7f\u5f97 Bump \u5206\u914d\u975e\u5e38\u9002\u5408\u9636\u6bb5\u6027\u5206\u914d\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u5728\u540c\u4e00\u7a0b\u5e8f\u9636\u6bb5\u5c06\u5206\u914d\u4e00\u7ec4\u5bf9\u8c61\uff0c\u4f7f\u7528\u540e\uff0c\u4ee5\u7ec4\u4e3a\u5355\u4f4d\u4e00\u8d77\u91ca\u653e\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"bumpalo::collections::Vec"})," \u548c ",(0,r.jsx)(n.code,{children:"bumpalo::boxed::Box"}),"\uff0c\u6211\u4eec\u7684 AST \u9700\u8981\u6dfb\u52a0\u751f\u547d\u5468\u671f\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"use bumpalo::collections::Vec;\nuse bumpalo::boxed::Box;\n\npub enum Expression<'a> {\n    AwaitExpression(Box<'a, AwaitExpression>),\n    YieldExpression(Box<'a, YieldExpression>),\n}\n\npub struct AwaitExpression<'a> {\n    pub node: Node,\n    pub expression: Expression<'a>,\n}\n\npub struct YieldExpression<'a> {\n    pub node: Node,\n    pub expression: Expression<'a>,\n}\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"caution",children:[(0,r.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u5728\u8fd9\u4e2a\u9636\u6bb5\u4e0d\u719f\u6089\u5904\u7406\u751f\u547d\u5468\u671f\uff0c\u8bf7\u8c28\u614e\u3002\n\u6211\u4eec\u7684\u7a0b\u5e8f\u5728\u6ca1\u6709\u5185\u5b58\u533a\u57df\u7684\u60c5\u51b5\u4e0b\u4e5f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c\u3002"}),(0,r.jsx)(n.p,{children:"\u5728\u63a5\u4e0b\u6765\u7684\u7ae0\u8282\u4e2d\u7684\u4ee3\u7801\u793a\u4f8b\u4e2d\uff0c\u4e3a\u4e86\u7b80\u5355\u8d77\u89c1\uff0c\u5e76\u672a\u6f14\u793a\u5185\u5b58\u533a\u57df\u7684\u4f7f\u7528\u3002"})]}),"\n",(0,r.jsx)(n.h2,{id:"json-\u5e8f\u5217\u5316",children:"JSON \u5e8f\u5217\u5316"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://serde.rs/",children:"serde"})," \u53ef\u4ee5\u7528\u4e8e\u5c06 AST \u5e8f\u5217\u5316\u4e3a JSON\u3002\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u989d\u5916\u6280\u5de7\u4f7f\u5176\u4e0e ",(0,r.jsx)(n.code,{children:"estree"})," \u517c\u5bb9\u3002\n\u4ee5\u4e0b\u662f\u4e00\u4e9b\u793a\u4f8b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use serde::Serialize;\n\n#[derive(Debug, Clone, Serialize, PartialEq)]\n#[serde(tag = "type")]\n#[cfg_attr(feature = "estree", serde(rename = "Identifier"))]\npub struct IdentifierReference {\n    #[serde(flatten)]\n    pub node: Node,\n    pub name: Atom,\n}\n\n#[derive(Debug, Clone, Serialize, PartialEq, Hash)]\n#[serde(tag = "type")]\n#[cfg_attr(feature = "estree", serde(rename = "Identifier"))]\npub struct BindingIdentifier {\n    #[serde(flatten)]\n    pub node: Node,\n    pub name: Atom,\n}\n\n#[derive(Debug, Serialize, PartialEq)]\n#[serde(untagged)]\npub enum Expression<\'a> {\n    ...\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:'serde(tag = "type")'}),' \u7528\u4e8e\u5c06\u7ed3\u6784\u4f53\u540d\u79f0\u4f5c\u4e3a "type" \u5b57\u6bb5\uff0c\u5373 ',(0,r.jsx)(n.code,{children:'{ "type": "..." }'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cfg_attr"})," + ",(0,r.jsx)(n.code,{children:"serde(rename)"})," \u7528\u4e8e\u5c06\u4e0d\u540c\u7684\u7ed3\u6784\u4f53\u540d\u79f0\u91cd\u547d\u540d\u4e3a\u76f8\u540c\u7684\u540d\u79f0\uff0c\u56e0\u4e3a ",(0,r.jsx)(n.code,{children:"estree"})," \u4e0d\u533a\u5206\u4e0d\u540c\u7684\u6807\u8bc6\u7b26"]}),"\n",(0,r.jsxs)(n.li,{children:["\u679a\u4e3e\u7c7b\u578b\u4e0a\u7684 ",(0,r.jsx)(n.code,{children:"serde(untagged)"})," \u7528\u4e8e\u4e0d\u4e3a\u679a\u4e3e\u7c7b\u578b\u521b\u5efa\u989d\u5916\u7684 JSON \u5bf9\u8c61"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},7660:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var r=s(959);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);
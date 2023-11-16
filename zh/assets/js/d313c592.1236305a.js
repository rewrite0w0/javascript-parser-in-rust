"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[178],{7921:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=r(1527),t=r(7660);const a={id:"parser",title:"\u89e3\u6790\u5668 (Parser)"},c=void 0,i={id:"parser",title:"\u89e3\u6790\u5668 (Parser)",description:"\u6211\u4eec\u5c06\u8981\u6784\u5efa\u7684\u89e3\u6790\u5668\u79f0\u4e3a\u9012\u5f52\u4e0b\u964d\u89e3\u6790\u5668\uff0c\u5b83\u662f\u4e00\u4e2a\u624b\u52a8\u8fc7\u7a0b\uff0c\u987a\u7740\u8bed\u6cd5\u9010\u6b65\u6784\u5efaAST\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/parser.md",sourceDirName:".",slug:"/parser",permalink:"/javascript-parser-in-rust/zh/docs/parser",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/parser.md",tags:[],version:"current",frontMatter:{id:"parser",title:"\u89e3\u6790\u5668 (Parser)"},sidebar:"tutorialSidebar",previous:{title:"\u62bd\u8c61\u8bed\u6cd5\u6811 (Abstract Syntax Tree)",permalink:"/javascript-parser-in-rust/zh/docs/ast"},next:{title:"\u5904\u7406\u9519\u8bef",permalink:"/javascript-parser-in-rust/zh/docs/errors"}},o={},d=[{value:"\u8f85\u52a9\u51fd\u6570",id:"\u8f85\u52a9\u51fd\u6570",level:2},{value:"\u89e3\u6790\u51fd\u6570",id:"\u89e3\u6790\u51fd\u6570",level:2},{value:"\u89e3\u6790\u8868\u8fbe\u5f0f",id:"\u89e3\u6790\u8868\u8fbe\u5f0f",level:2},{value:"\u5217\u8868",id:"\u5217\u8868",level:2},{value:"\u8986\u76d6\u8bed\u6cd5",id:"\u8986\u76d6\u8bed\u6cd5",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5c06\u8981\u6784\u5efa\u7684\u89e3\u6790\u5668\u79f0\u4e3a",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Recursive_descent_parser",children:"\u9012\u5f52\u4e0b\u964d\u89e3\u6790\u5668"}),"\uff0c\u5b83\u662f\u4e00\u4e2a\u624b\u52a8\u8fc7\u7a0b\uff0c\u987a\u7740\u8bed\u6cd5\u9010\u6b65\u6784\u5efaAST\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u6790\u5668\u8d77\u521d\u5f88\u7b80\u5355\uff0c\u5b83\u6301\u6709\u6e90\u4ee3\u7801\u3001\u8bcd\u6cd5\u5206\u6790\u5668\u548c\u4ece\u8bcd\u6cd5\u5206\u6790\u5668\u4e2d\u83b7\u53d6\u7684\u5f53\u524d token\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub struct Parser<'a> {\n    /// \u6e90\u4ee3\u7801\n    source: &'a str,\n\n    lexer: Lexer<'a>,\n\n    /// \u4ece\u8bcd\u6cd5\u5206\u6790\u5668\u4e2d\u83b7\u53d6\u7684\u5f53\u524d token\n    cur_token: Token,\n\n    /// \u524d\u4e00\u4e2a token \u7684\u7ed3\u675f\u4f4d\u7f6e\n    prev_token_end: usize,\n}\n\nimpl<'a> Parser<'a> {\n    pub fn new(source: &'a str) -> Self {\n        Self {\n            source,\n            lexer: Lexer::new(source),\n            cur_token: Token::default(),\n        }\n    }\n\n    pub fn parse(&mut self) -> Program<'a> {\n        Ok(Program {\n            node: Node {\n                start: 0,\n                end: self.source.len(),\n            },\n            body: vec![],\n        })\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8f85\u52a9\u51fd\u6570",children:"\u8f85\u52a9\u51fd\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"cur_token: Token"}),"\u4fdd\u5b58\u4e86\u4ece\u8bcd\u6cd5\u5206\u6790\u5668\u8fd4\u56de\u7684\u5f53\u524d token \u3002\n\u4e3a\u4e86\u4f7f\u89e3\u6790\u5668\u4ee3\u7801\u66f4\u6e05\u6670\uff0c\u6211\u4eec\u4f1a\u6dfb\u52a0\u4e00\u4e9b\u8f85\u52a9\u51fd\u6570\u6765\u5728 token \u95f4\u79fb\u52a8\u548c\u68c0\u67e5 token\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Parser<'a> {\n    fn start_node(&self) -> Node {\n        let token = self.cur_token();\n        Node::new(token.start, 0)\n    }\n\n    fn finish_node(&self, node: Node) -> Node {\n        Node::new(node.start, self.prev_token_end)\n    }\n\n    fn cur_token(&self) -> &Token {\n        &self.cur_token\n    }\n\n    fn cur_kind(&self) -> Kind {\n        self.cur_token.kind\n    }\n\n    /// \u68c0\u67e5\u5f53\u524d token \u662f\u5426\u5177\u6709\u7ed9\u5b9a`Kind`\n    fn at(&self, kind: Kind) -> bool {\n        self.cur_kind() == kind\n    }\n\n    /// \u5982\u679c\u6211\u4eec\u5728`Kind`\u5904\uff0c\u5219\u524d\u8fdb\n    fn bump(&mut self, kind: Kind) {\n        if self.at(kind) {\n            self.advance();\n        }\n    }\n\n    /// \u4e0d\u8bba\u5f53\u524d token \u4e3a\u4f55\uff0c\u65e0\u6761\u4ef6\u524d\u8fdb\n    fn bump_any(&mut self) {\n        self.advance();\n    }\n\n    /// \u524d\u8fdb\u5e76\u8fd4\u56detrue\uff08\u5982\u679c\u6211\u4eec\u5728`Kind`\u5904\uff09\uff0c\u5426\u5219\u8fd4\u56defalse\n    fn eat(&mut self, kind: Kind) -> bool {\n        if self.at(kind) {\n            self.advance();\n            return true;\n        }\n        false\n    }\n\n    /// \u79fb\u52a8\u5230\u4e0b\u4e00\u4e2a token\n    fn advance(&mut self) {\n        let token = self.lexer.next_token();\n        self.prev_token_end = self.cur_token.end;\n        self.cur_token = token;\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u6790\u51fd\u6570",children:"\u89e3\u6790\u51fd\u6570"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"DebuggerStatement"}),"\u8fd9\u4e2a\u8bed\u53e5\uff0c\u89e3\u6790\u8d77\u6765\u6700\u7b80\u5355\u3002\u8ba9\u6211\u4eec\u5c1d\u8bd5\u89e3\u6790\u5b83\u5e76\u8fd4\u56de\u4e00\u4e2a\u6709\u6548\u7684 ",(0,s.jsx)(n.code,{children:"Program"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> Parser<'a> {\n    pub fn parse(&mut self) -> Program {\n        let stmt = self.parse_debugger_statement();\n        let body = vec![stmt];\n        Program {\n            node: Node {\n                start: 0,\n                end: self.source.len(),\n            },\n            body,\n        }\n    }\n\n    fn parse_debugger_statement(&mut self) -> Statement {\n        let node = self.start_node();\n        // \u6ce8\u610f\uff1a\u4ece\u8bcd\u6cd5\u5206\u6790\u5668\u8fd4\u56de\u7684 token \u662f`Kind::Debugger`\uff0c\u6211\u4eec\u7a0d\u540e\u5c06\u4fee\u590d\u8fd9\u4e2a\u95ee\u9898\u3002\n        self.bump_any();\n        Statement::DebuggerStatement {\n            node: self.finish_node(node),\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6240\u6709\u5176\u4ed6\u89e3\u6790\u51fd\u6570\u90fd\u5efa\u7acb\u5728\u8fd9\u4e9b\u57fa\u672c\u8f85\u52a9\u51fd\u6570\u4e4b\u4e0a\uff0c\u4f8b\u5982\u5728swc\u4e2d\u89e3\u6790",(0,s.jsx)(n.code,{children:"while"}),"\u8bed\u53e5\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/swc-project/swc/blob/554b459e26b24202f66c3c58a110b3f26bbd13cd/crates/swc_ecma_parser/src/parser/stmt.rs#L952-L970\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u6790\u8868\u8fbe\u5f0f",children:"\u89e3\u6790\u8868\u8fbe\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u8868\u8fbe\u5f0f\u7684\u8bed\u6cd5\u5d4c\u5957\u6df1\u4e14\u9012\u5f52\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u957f\u8868\u8fbe\u5f0f\u65f6\u51fa\u73b0\u5806\u6808\u6ea2\u51fa\uff08\u4f8b\u5982",(0,s.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript/blob/main/tests/cases/compiler/binderBinaryExpressionStressJs.ts",children:"\u8fd9\u4e2a TypeScript \u6d4b\u8bd5"}),"\uff09\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:['\u4e3a\u4e86\u907f\u514d\u9012\u5f52\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528"Pratt Parsing"\u3002\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\u66f4\u6df1\u5165\u7684\u6559\u7a0b',(0,s.jsx)(n.a,{href:"https://matklad.github.io/2020/04/13/simple-but-powerful-pratt-parsing.html",children:"Pratt Parsing"}),"\uff0c\u6b64\u6587\u4f5c\u8005\u540c\u65f6\u4e5f\u662fRust-Analyzer\u7684\u4f5c\u8005\u3002\nRome\u4e2d\u7684Rust\u7248\u672c\u5728",(0,s.jsx)(n.a,{href:"https://github.com/rome/tools/blob/5a059c0413baf1d54436ac0c149a829f0dfd1f4d/crates/rome_js_parser/src/syntax/expr.rs#L442",children:"Rome"}),"\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5217\u8868",children:"\u5217\u8868"}),"\n",(0,s.jsxs)(n.p,{children:["\u6709\u8bb8\u591a\u5730\u65b9\u9700\u8981\u89e3\u6790\u4ee5\u6807\u70b9\u5206\u9694\u7684\u5217\u8868\uff0c\u4f8b\u5982",(0,s.jsx)(n.code,{children:"[a, b, c]"}),"\u548c",(0,s.jsx)(n.code,{children:"{a, b, c}"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u89e3\u6790\u5217\u8868\u7684\u4ee3\u7801\u5927\u540c\u5c0f\u5f02\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Template_method_pattern",children:"\u6a21\u677f\u65b9\u6cd5\u6a21\u5f0f"}),"\u901a\u8fc7\u4f7f\u7528 trait \u6765\u907f\u514d\u91cd\u590d\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/parser/parse_lists.rs#L131-L157\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5\u6a21\u5f0f\u8fd8\u53ef\u4ee5\u9632\u6b62\u6211\u4eec\u8fdb\u5165\u65e0\u9650\u5faa\u73af\uff0c\u7279\u522b\u662f",(0,s.jsx)(n.code,{children:"progress.assert_progressing(p);"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u7740\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u4e0d\u540c\u79cd\u7c7b\u7684\u5217\u8868\u5404\u81ea\u63d0\u4f9b\u5b9e\u73b0\uff0c\u4f8b\u5982\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/rome/tools/blob/85ddb4b2c622cac9638d5230dcefb6cf571677f8/crates/rome_js_parser/src/syntax/expr.rs#L1543-L1580\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8986\u76d6\u8bed\u6cd5",children:"\u8986\u76d6\u8bed\u6cd5"}),"\n",(0,s.jsxs)(n.p,{children:["\u6211\u4eec\u5728",(0,s.jsx)(n.a,{href:"/blog/grammar#cover-grammar",children:"\u8986\u76d6\u8bed\u6cd5"}),"\u4e2d\u8be6\u7ec6\u4ecb\u7ecd\u8fc7\uff0c\u6709\u65f6\u6211\u4eec\u9700\u8981\u5c06",(0,s.jsx)(n.code,{children:"Expression"}),"\u8f6c\u6362\u4e3a",(0,s.jsx)(n.code,{children:"BindingIdentifier"}),"\u3002\u82e5\u4f7f\u7528JavaScript\u8fd9\u6837\u7684\u52a8\u6001\u8bed\u8a00\uff0c\u5219\u53ef\u4ee5\u7b80\u5355\u5730\u91cd\u5199\u8282\u70b9\u7c7b\u578b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:"reference",children:"https://github.com/acornjs/acorn/blob/11735729c4ebe590e406f952059813f250a4cbd1/acorn/src/lval.js#L11-L26\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f46\u5728Rust\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u8fdb\u884c struct \u5230 struct \u7684\u8f6c\u6362\u3002\u4e00\u4e2a\u5de7\u5999\u800c\u7b80\u6d01\u7684\u65b9\u6cd5\u662f\u4f7f\u7528 trait\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"pub trait CoverGrammar<'a, T>: Sized {\n    fn cover(value: T, p: &mut Parser<'a>) -> Result<Self>;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8be5 trait \u63a5\u53d7",(0,s.jsx)(n.code,{children:"T"}),"\u4f5c\u4e3a\u8f93\u5165\u7c7b\u578b\uff0c",(0,s.jsx)(n.code,{children:"Self"}),"\u4f5c\u4e3a\u8f93\u51fa\u7c7b\u578b\uff0c\u56e0\u6b64\u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u4ee5\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"impl<'a> CoverGrammar<'a, Expression<'a>> for BindingPattern<'a> {\n    fn cover(expr: Expression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        match expr {\n            Expression::Identifier(ident) => Self::cover(ident.unbox(), p),\n            Expression::ObjectExpression(expr) => Self::cover(expr.unbox(), p),\n            Expression::ArrayExpression(expr) => Self::cover(expr.unbox(), p),\n            _ => Err(()),\n        }\n    }\n}\n\nimpl<'a> CoverGrammar<'a, ObjectExpression<'a>> for BindingPattern<'a> {\n    fn cover(obj_expr: ObjectExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        ...\n        BindingIdentifier::ObjectPattern(ObjectPattern { .. })\n    }\n}\n\nimpl<'a> CoverGrammar<'a, ArrayExpression<'a>> for BindingPattern<'a> {\n    fn cover(expr: ArrayExpression<'a>, p: &mut Parser<'a>) -> Result<Self> {\n        ...\n        BindingIdentifier::ArrayPattern(ArrayPattern { .. })\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5728\u4efb\u4f55\u9700\u8981\u5c06",(0,s.jsx)(n.code,{children:"Expression"}),"\u8f6c\u6362\u4e3a",(0,s.jsx)(n.code,{children:"BindingPattern"}),"\u7684\u5730\u65b9\uff0c\u8c03\u7528",(0,s.jsx)(n.code,{children:"BindingPattern::cover(expression)"}),"\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},7660:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var s=r(959);const t={},a=s.createContext(t);function c(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
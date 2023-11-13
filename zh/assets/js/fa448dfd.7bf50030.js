"use strict";(self.webpackChunkjavascript_parser_in_rust=self.webpackChunkjavascript_parser_in_rust||[]).push([[240],{2184:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(1527),s=r(7660);const i={id:"overview",title:"\u603b\u89c8"},c=void 0,o={id:"overview",title:"\u603b\u89c8",description:"\u5bf9\u4e8e\u672c\u6307\u5357\uff0c\u5c06\u5e94\u7528\u6807\u51c6\u7f16\u8bd1\u5668\u524d\u7aef\u9636\u6bb5\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/overview.md",sourceDirName:".",slug:"/overview",permalink:"/javascript-parser-in-rust/zh/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/oxc-project/javascript-parser-in-rust/tree/main/docs/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"\u603b\u89c8"},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/javascript-parser-in-rust/zh/docs/intro"},next:{title:"Lexer",permalink:"/javascript-parser-in-rust/zh/docs/lexer"}},a={},d=[{value:"\u6027\u80fd",id:"\u6027\u80fd",level:2},{value:"Rust \u6e90\u4ee3\u7801",id:"rust-\u6e90\u4ee3\u7801",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u5bf9\u4e8e\u672c\u6307\u5357\uff0c\u5c06\u5e94\u7528\u6807\u51c6\u7f16\u8bd1\u5668\u524d\u7aef\u9636\u6bb5\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-markup",children:"Source Text --\x3e Lexer --\x3e Token --\x3e Parser --\x3e AST\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u7f16\u5199 JavaScript \u89e3\u6790\u5668\u76f8\u5f53\u5bb9\u6613 \u3002\n10% \u7684\u5de5\u4f5c\u662f\u67b6\u6784\u51b3\u7b56\uff0c90% \u7684\u5de5\u4f5c\u662f\u7ec6\u7c92\u5ea6\u7684\u7ec6\u8282\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u67b6\u6784\u51b3\u7b56\u4e3b\u8981\u4f1a\u5f71\u54cd\u4e24\u65b9\u9762\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u89e3\u6790\u5668\u7684\u6027\u80fd"}),"\n",(0,t.jsx)(n.li,{children:"\u4f7f\u7528\u6211\u4eec\u7684 AST \u65f6\u7684\u8212\u9002\u5ea6"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u7528 Rust \u6784\u5efa\u89e3\u6790\u5668\u4e4b\u524d\uff0c\u4e86\u89e3\u6240\u6709\u9009\u9879\u548c\u6743\u8861\u5c06\u4f7f\u6211\u4eec\u7684\u6574\u4e2a\u65c5\u7a0b\u66f4\u52a0\u987a\u5229\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u6027\u80fd",children:"\u6027\u80fd"}),"\n",(0,t.jsxs)(n.p,{children:["Rust \u7a0b\u5e8f\u6027\u80fd\u7684\u5173\u952e\u5728\u4e8e",(0,t.jsx)(n.strong,{children:"\u5206\u914d\u66f4\u5c11\u7684\u5185\u5b58"}),"\u548c",(0,t.jsx)(n.strong,{children:"\u4f7f\u7528\u66f4\u5c11\u7684 CPU \u5468\u671f"}),"\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u53ea\u9700\u67e5\u627e\u5806\u5206\u914d\u7684\u5bf9\u8c61\uff08\u5982 ",(0,t.jsx)(n.code,{children:"Vec"}),"\u3001",(0,t.jsx)(n.code,{children:"Box"})," \u6216 ",(0,t.jsx)(n.code,{children:"String"}),"\uff09\uff0c\u5185\u5b58\u5206\u914d\u5927\u591a\u662f\u900f\u660e\u7684\u3002\n\u901a\u8fc7\u63a8\u7406\u8fd9\u4e9b\u5bf9\u8c61\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u6211\u4eec\u5c31\u80fd\u4e86\u89e3\u7a0b\u5e8f\u7684\u8fd0\u884c\u901f\u5ea6--\u5206\u914d\u7684\u8d8a\u591a\uff0c\u901f\u5ea6\u5c31\u8d8a\u6162\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"Rust \u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u96f6\u6210\u672c\u62bd\u8c61\u7684\u80fd\u529b\uff0c\u6211\u4eec\u4e0d\u5fc5\u8fc7\u4e8e\u62c5\u5fc3\u62bd\u8c61\u4f1a\u5bfc\u81f4\u6027\u80fd\u4e0b\u964d\u3002\n\u53ea\u8981\u6ce8\u610f\u7b97\u6cd5\u7684\u590d\u6742\u6027\uff0c\u6211\u4eec\u5c31\u80fd\u4e00\u5207\u987a\u5229\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u4f60\u4e5f\u5e94\u8be5\u8bfb ",(0,t.jsx)(n.a,{href:"https://nnethercote.github.io/perf-book/introduction.html",children:"The Rust Performance Book"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"rust-\u6e90\u4ee3\u7801",children:"Rust \u6e90\u4ee3\u7801"}),"\n",(0,t.jsx)(n.p,{children:'\u6bcf\u5f53\u65e0\u6cd5\u63a8\u65ad\u51fd\u6570\u8c03\u7528\u7684\u6027\u80fd\u65f6\u3001\n\u4e0d\u8981\u5bb3\u6015\uff0c\u70b9\u51fb Rust \u6587\u6863\u4e2d\u7684 "\u6e90\u4ee3\u7801 "\u6309\u94ae\uff0c\u9605\u8bfb\u6e90\u4ee3\u7801\u3001\n\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u5b83\u4eec\u90fd\u5f88\u5bb9\u6613\u7406\u89e3\u3002'}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["\u5f53\u6d4f\u89c8 Rust \u6e90\u4ee3\u7801\u65f6\uff0c\u641c\u7d22\u5b9a\u4e49\u53ea\u9700\u67e5\u627e\n",(0,t.jsx)(n.code,{children:"fn function_name"}),"\u3001",(0,t.jsx)(n.code,{children:"struct struct_name"}),"\u3001",(0,t.jsx)(n.code,{children:"enum enum_name"}),"\u7b49\u3002\n\u8fd9\u662f Rust \u4e2d\u4f7f\u7528\u5e38\u91cf\u8bed\u6cd5\u7684\u4e00\u4e2a\u4f18\u52bf\uff08\u4e0e JavaScript \ud83d\ude09 \u76f8\u6bd4\uff09\u3002"]})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},7660:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>c});var t=r(959);const s={},i=t.createContext(s);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
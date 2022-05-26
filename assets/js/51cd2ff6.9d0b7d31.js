"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[9646],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8176:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return i},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],l={},p="\u5efa\u7acb express \u5c08\u6848\u8d77\u624b\u5f0f",c={unversionedId:"Node/express",id:"Node/express",title:"\u5efa\u7acb express \u5c08\u6848\u8d77\u624b\u5f0f",description:"\u5b89\u88dd Express-Generator",source:"@site/docs/Node/express.md",sourceDirName:"Node",slug:"/Node/express",permalink:"/tech-note/docs/Node/express",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/Node/express.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8d77\u624b\u5f0f",permalink:"/tech-note/docs/Nginx/\u8d77\u624b\u5f0f"},next:{title:"NPM \u4f60\u5fc5\u9700\u77e5\u9053\u7684\u4e8b\u60c5",permalink:"/tech-note/docs/Node/npm"}},i=[{value:"<strong>\u5b89\u88dd Express-Generator</strong>",id:"\u5b89\u88dd-express-generator",children:[],level:2},{value:"<strong>\u521d\u59cb\u5316\u5c08\u6848</strong>",id:"\u521d\u59cb\u5316\u5c08\u6848",children:[],level:2},{value:"\u555f\u52d5\u5c08\u6848",id:"\u555f\u52d5\u5c08\u6848",children:[],level:2}],u={toc:i};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5efa\u7acb-express-\u5c08\u6848\u8d77\u624b\u5f0f"},"\u5efa\u7acb express \u5c08\u6848\u8d77\u624b\u5f0f"),(0,a.kt)("h2",{id:"\u5b89\u88dd-express-generator"},(0,a.kt)("strong",{parentName:"h2"},"\u5b89\u88dd Express-Generator")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u9019\u500b\u6307\u4ee4\u662f Express \u7684\u547d\u4ee4\u5de5\u5177\uff0c\u4ed6\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u4e00\u9375\u521d\u59cb\u5316\u6574\u500b\u5c08\u6848\uff0c\u9996\u5148 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install -g express-generator")," \u5b89\u88dd\u5168\u57df\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g express-generator # \u5728\u5168\u57df\u4e2d\u5efa\u7acb express \u547d\u4ee4\u5de5\u5177\n$ express --version # \u78ba\u8a8d\u7248\u672c\uff0c\u662f\u5426\u6709\u5b89\u88dd\u5b8c\u6210\n")),(0,a.kt)("h2",{id:"\u521d\u59cb\u5316\u5c08\u6848"},(0,a.kt)("strong",{parentName:"h2"},"\u521d\u59cb\u5316\u5c08\u6848")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u5b89\u88dd\u5b8c\u6210\u5f8c\u5c31\u5728\u684c\u9762\u4f86\u521d\u59cb\u5316\u5efa\u7acb\u5c08\u6848\u56c9\uff0c\u524d\u7aef\u7684\u90e8\u5206\u6709\u8a31\u591a\u6a21\u677f\u5f15\u64ce\uff0c\u6a21\u677f\u5f15\u64ce\uff08Template Engine\uff09\u662f\u4e00\u500b\u5c07\u9801\u9762\u6a21\u677f\u548c\u6578\u64da\u7d50\u5408\u8d77\u4f86\u751f\u6210 HTML \u7684\u5de5\u5177\uff0c\u6709\u4e0b\u5217\u5e7e\u500b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"-ejs"),(0,a.kt)("li",{parentName:"ul"},"-pug"),(0,a.kt)("li",{parentName:"ul"},"-hbs"),(0,a.kt)("li",{parentName:"ul"},"-hogan")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ express -f [\u5c08\u6848\u540d\u7a31] // force on non-empty directory\n$ express --view=ejs [\u5c08\u6848\u540d\u7a31] // \u4f7f\u7528\u4e00 ejs \u4f5c\u70ba template\n# \u5169\u9078\u4e00\u5c31\u53ef\u4ee5 \n")),(0,a.kt)("h2",{id:"\u555f\u52d5\u5c08\u6848"},"\u555f\u52d5\u5c08\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n$ npm run start # \u9810\u8a2d\u70ba 3000 port \n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9019\u88e1\u53ef\u4ee5\u628a  node ./bin/www \u6539\u70ba nodemon ./bin/www \u9019\u6a23\u5b50\u53ef\u4ee5\u76f4\u57f7\u884c\u5c08\u6848\uff0c\u4f46\u524d\u63d0\u662f\u4f60\u9700\u8981\u5b89\u88dd nodemon \u9019\u500b\u5957\u4ef6")),(0,a.kt)("p",null,"\u53c3\u8003\u6587\u7ae0"))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[3971],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},u=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=m(a),d=n,c=k["".concat(i,".").concat(d)]||k[d]||s[d]||l;return a?r.createElement(c,p(p({ref:e},u),{},{components:a})):r.createElement(c,p({ref:e},u))}));function d(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=k;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:n,p[1]=o;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8192:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return u},default:function(){return k}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),p=["components"],o={},i="Regular \u6b63\u898f\u8868\u9054\u5f0f",m={unversionedId:"JavaScript/regular_expressions",id:"JavaScript/regular_expressions",title:"Regular \u6b63\u898f\u8868\u9054\u5f0f",description:"\u521d\u6b21\u898b\u9762",source:"@site/docs/JavaScript/regular_expressions.md",sourceDirName:"JavaScript",slug:"/JavaScript/regular_expressions",permalink:"/tech-note/docs/JavaScript/regular_expressions",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/regular_expressions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"encode decode",permalink:"/tech-note/docs/JavaScript/encode decode"},next:{title:"this",permalink:"/tech-note/docs/JavaScript/this"}},u=[{value:"\u521d\u6b21\u898b\u9762",id:"\u521d\u6b21\u898b\u9762",children:[],level:2},{value:"\u5feb\u675f\u4e86\u89e3\u6b63\u898f\u8868\u793a\u5f0f",id:"\u5feb\u675f\u4e86\u89e3\u6b63\u898f\u8868\u793a\u5f0f",children:[],level:2},{value:"\u4f7f\u7528\u65b9\u5f0f\u8aaa\u660e",id:"\u4f7f\u7528\u65b9\u5f0f\u8aaa\u660e",children:[{value:".\u3010\u9ede\u3011",id:"\u9ede",children:[],level:3},{value:"?\u3010\u554f\u865f\u3011",id:"\u554f\u865f",children:[],level:3},{value:"\uff0a\u3010\u661f\u865f\u3011",id:"\u661f\u865f",children:[],level:3},{value:"+ \u3010\u52a0\u865f\u3011",id:"-\u52a0\u865f",children:[],level:3},{value:"\uff5c\u3010\u76f4\u7dda\u3011",id:"\u76f4\u7dda",children:[],level:3},{value:"\uff3e \u3010\u63d2\u5165\u7b26\u865f\u3011 $\u3010\u9322\u5b57\u7b26\u865f\u3011",id:"-\u63d2\u5165\u7b26\u865f-\u9322\u5b57\u7b26\u865f",children:[],level:3},{value:" \u3010\u53cd\u659c\u7dda\u3011",id:"-\u53cd\u659c\u7dda",children:[],level:3},{value:"( ) \u3010\u62ec\u865f\u3011",id:"--\u62ec\u865f",children:[],level:3},{value:"] \u3010\u4e2d\u62ec\u865f\u3011",id:"-\u4e2d\u62ec\u865f",children:[],level:3},{value:"\u2013 \u3010\u7834\u6298\u865f\u3011",id:"-\u7834\u6298\u865f",children:[],level:3}],level:2},{value:"\u5e38\u7528\u7bc4\u4f8b",id:"\u5e38\u7528\u7bc4\u4f8b",children:[],level:2},{value:"Mail",id:"mail",children:[],level:2},{value:"\u5de5\u5177\u7db2\u7ad9",id:"\u5de5\u5177\u7db2\u7ad9",children:[],level:2}],s={toc:u};function k(t){var e=t.components,a=(0,n.Z)(t,p);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"regular-\u6b63\u898f\u8868\u9054\u5f0f"},"Regular \u6b63\u898f\u8868\u9054\u5f0f"),(0,l.kt)("blockquote",null),(0,l.kt)("h2",{id:"\u521d\u6b21\u898b\u9762"},"\u521d\u6b21\u898b\u9762"),(0,l.kt)("p",null,"JavaScript \u7684\u6b63\u898f\u5f0f\u662f\u4e00\u500b\u5167\u5efa\u7684\u7269\u4ef6\uff0c\u5176\u5efa\u69cb\u51fd\u6578\uff08Construction functoin\uff09\u70ba RegExp\uff0c\u5178\u578b\u7528\u6cd5\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'re = new RegExp("pattern", "flag") \n')),(0,l.kt)("p",null," \u4e0a\u8ff0\u7528\u6cd5\u4e5f\u53ef\u4ee5\u5beb\u6210\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"}," re = /pattern/flag \n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0cpattern \u4ee3\u8868\u4ee5\u6b63\u898f\u8868\u793a\u6cd5\u4f86\u986f\u793a\u7684\u5b57\u4e32\uff0cflag \u5247\u662f\u6bd4\u5c0d\u7684\u65b9\u5f0f\u3002flag \u7684\u503c\u53ef\u80fd\u6709\u4e09\u7a2e\uff0c\u5206\u5225\u89e3\u91cb\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"g\uff1a\u5168\u57df\u6bd4\u5c0d\uff08Global match\uff09"),(0,l.kt)("li",{parentName:"ul"},"i\uff1a\u5ffd\u7565\u5927\u5c0f\u5beb\uff08Ignore case\uff09"),(0,l.kt)("li",{parentName:"ul"},"gi\uff1a\u5168\u57df\u6bd4\u5c0d\u4e26\u5ffd\u7565\u5927\u5c0f\u5beb")),(0,l.kt)("h2",{id:"\u5feb\u675f\u4e86\u89e3\u6b63\u898f\u8868\u793a\u5f0f"},"\u5feb\u675f\u4e86\u89e3\u6b63\u898f\u8868\u793a\u5f0f"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u6b63\u898f\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e\u53ca\u7bc4\u4f8b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6bd4\u5c0d\u4e0d\u6210\u7acb\u4e4b\u5b57\u4e32"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/a/"),(0,l.kt)("td",{parentName:"tr",align:null},'\u542b\u5b57\u6bcd "a" \u7684\u5b57\u4e32\uff0c\u4f8b\u5982 "ab", "bac", "cba"'),(0,l.kt)("td",{parentName:"tr",align:null},'"xyz"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/a./"),(0,l.kt)("td",{parentName:"tr",align:null},'\u542b\u5b57\u6bcd "a" \u4ee5\u53ca\u5176\u5f8c\u4efb\u4e00\u500b\u5b57\u5143\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 "ab", "bac"\uff08\u82e5\u8981\u6bd4\u5c0d.\uff0c\u8acb\u4f7f\u7528 ',".","\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},'"a", "ba"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/^xy/"),(0,l.kt)("td",{parentName:"tr",align:null},'\u4ee5 "xy" \u958b\u59cb\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 "xyz", "xyab"\uff08\u82e5\u8981\u6bd4\u5c0d ^\uff0c\u8acb\u4f7f\u7528 \\^\uff09'),(0,l.kt)("td",{parentName:"tr",align:null},'"axy", "bxy"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"/xy$/"),(0,l.kt)("td",{parentName:"tr",align:null},'\u4ee5 "xy" \u7d50\u5c3e\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 "axy", "abxy"\u4ee5 "xy" \u7d50\u5c3e\u7684\u5b57\u4e32\uff0c\u4f8b\u5982 "axy", "abxy" \uff08\u82e5\u8981\u6bd4\u5c0d $\uff0c\u8acb\u4f7f\u7528 \\$\uff09'),(0,l.kt)("td",{parentName:"tr",align:null},'"xya", "xyb"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[13579]"),(0,l.kt)("td",{parentName:"tr",align:null},'\u5305\u542b "1" \u6216 "3" \u6216 "5" \u6216 "7" \u6216 "9" \u7684\u5b57\u4e32\uff0c\u4f8b\u5982\uff1a"a3b", "1xy"'),(0,l.kt)("td",{parentName:"tr",align:null},'"y2k"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[0-9]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542b\u6578\u5b57\u4e4b\u5b57\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u542b\u6578\u5b57\u4e4b\u5b57\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[a-z0-9]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542b\u6578\u5b57\u6216\u5c0f\u5beb\u5b57\u6bcd\u4e4b\u5b57\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u542b\u6578\u5b57\u53ca\u5c0f\u5beb\u5b57\u6bcd\u4e4b\u5b57\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"[a-zA-Z0-9]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542b\u6578\u5b57\u6216\u5b57\u6bcd\u4e4b\u5b57\u4e32"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u542b\u6578\u5b57\u53ca\u5b57\u6bcd\u4e4b\u5b57\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"b","[aeiou]","t"),(0,l.kt)("td",{parentName:"tr",align:null},'"bat", "bet", "bit", "bot", "but"'),(0,l.kt)("td",{parentName:"tr",align:null},'"bxt", "bzt"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("sup",{parentName:"td",id:"fnref-0-9"},(0,l.kt)("a",{parentName:"sup",href:"#fn-0-9",className:"footnote-ref"},"0-9"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u542b\u6578\u5b57\u4e4b\u5b57\u4e32\uff08\u82e5\u8981\u6bd4\u5c0d ^\uff0c\u8acb\u4f7f\u7528 \\^\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542b\u6578\u5b57\u4e4b\u5b57\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("sup",{parentName:"td",id:"fnref-aeiouaeiou"},(0,l.kt)("a",{parentName:"sup",href:"#fn-aeiouaeiou",className:"footnote-ref"},"aeiouAEIOU"))),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0d\u542b\u6bcd\u97f3\u4e4b\u5b57\u4e32\uff08\u82e5\u8981\u6bd4\u5c0d ^\uff0c\u8acb\u4f7f\u7528 \\^\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u542b\u6bcd\u97f3\u4e4b\u5b57\u4e32")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("sup",{parentName:"td",id:"fnref-\\^"},(0,l.kt)("a",{parentName:"sup",href:"#fn-\\^",className:"footnote-ref"},"\\^"))),(0,l.kt)("td",{parentName:"tr",align:null},'\u4e0d\u542b "^" \u4e4b\u5b57\u4e32\uff0c\u4f8b\u5982 "xyz", "abc"'),(0,l.kt)("td",{parentName:"tr",align:null},'"xy^", "a^bc"')))),(0,l.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f\u8aaa\u660e"},"\u4f7f\u7528\u65b9\u5f0f\u8aaa\u660e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5206\u985e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7a2e\u985e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u5143"),(0,l.kt)("td",{parentName:"tr",align:null},". \uff1f ",(0,l.kt)("em",{parentName:"td"}," + ","|"," ."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\D"),(0,l.kt)("td",{parentName:"tr",align:null},"^ $ \\ ")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\\w"),(0,l.kt)("td",{parentName:"tr",align:null},"() [] -")))),(0,l.kt)("h3",{id:"\u9ede"},".\u3010\u9ede\u3011"),(0,l.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u9ede\u53ef\u4ee5\u4ee3\u66ff\u6240\u6709\u53ef\u80fd\u7684\u5b57\u5143\uff08\u5b57\u6bcd\u3001\u6578\u5b57\u6216\u7b26\u865f\uff09\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u4f7f\u7528\u300c",(0,l.kt)("strong",{parentName:"p"},".GC"),"\u300d\uff0c\u53ef\u4ee5\u5339\u914d\u7684\u641c\u5c0b\u7d50\u679c\u5305\u62ecU",(0,l.kt)("strong",{parentName:"p"},"GC"),"\uff08User Generated Content\uff09\u3001O",(0,l.kt)("strong",{parentName:"p"},"GC"),"\uff08Occupationally Generated Content\uff09\u3001P",(0,l.kt)("strong",{parentName:"p"},"GC"),"\uff08Professionally Generated Content\uff09\u6216\u662f2",(0,l.kt)("strong",{parentName:"p"},"GC"),"\u3001n",(0,l.kt)("strong",{parentName:"p"},"GC"),"\u7b49\u3002"),(0,l.kt)("h3",{id:"\u554f\u865f"},"?\u3010\u554f\u865f\u3011"),(0,l.kt)("p",null,"\u554f\u865f\u4ee3\u8868\u7684\u610f\u601d\u662f\uff0c\u6bd4\u5c0d\u524d\u4e00\u500b\u5b57\u4e32\u6216\u662f\u4e0d\u6bd4\u5c0d\u3002\u6bd4\u5982\u4f60\u5728\u8f38\u5165facebook\u7684\u6642\u5019\u53ef\u80fd\u4e0d\u5c0f\u5fc3book\u5c11\u4e86\u4e00\u500bo\uff0c\u90a3\u4f60\u4f7f\u7528\u898f\u5247\u904b\u7b97\u5f0f",(0,l.kt)("strong",{parentName:"p"},"facebo?k"),"\uff0c\u53ef\u80fd\u5339\u914d\u7684\u7d50\u679c\u5305\u62ecfaceb",(0,l.kt)("strong",{parentName:"p"},"oo"),"k\uff08\u5305\u62eco\uff09\u3001face",(0,l.kt)("strong",{parentName:"p"},"bo"),"k\uff08\u4e0d\u5305\u62eco\uff09\u3002"),(0,l.kt)("h3",{id:"\u661f\u865f"},"\uff0a\u3010\u661f\u865f\u3011"),(0,l.kt)("p",null,"\u661f\u865f\u8868\u793a\u6bd4\u5c0d\u524d\u4e00\u500b\u5b57\u4e32\u96f6\u6b21\u6216\u662f\u591a\u6b21\u3002\u6bd4\u65b9\u4f60\u8f38\u5165\u7684\u300csk",(0,l.kt)("strong",{parentName:"p"},"y","*"),"blue\u300d\u6642\uff0c\u661f\u597d\u524d\u9762\u7684\u5b57\u5143\u70ba","[y]","\uff0c\u56e0\u6b64\u641c\u5c0b\u7d50\u679c\u6703\u51fa\u73fe",(0,l.kt)("strong",{parentName:"p"},"skblue"),"\uff08y\u51fa\u73fe\u96f6\u6b21\uff09\u3001sk",(0,l.kt)("strong",{parentName:"p"},"y"),"blue\uff08y\u51fa\u73fe\u4e00\u6b21\uff09\u3001sk",(0,l.kt)("strong",{parentName:"p"},"yyyy"),"blue\uff08y\u51fa\u73fe\u5f88\u591a\u6b21\uff09\u3002"),(0,l.kt)("h3",{id:"-\u52a0\u865f"},"+ \u3010\u52a0\u865f\u3011"),(0,l.kt)("p",null,"\u52a0\u865f\u8ddf\u661f\u865f\u985e\u4f3c\uff0c\u5dee\u5225\u5728\u65bc\u5b83\u81f3\u5c11\u8981\u8207\u524d\u4e00\u500b\u5b57\u6bd4\u5c0d\u4e00\u6b21\u6216\u4ee5\u4e0a\u3002\u4ee5\u4e0a\u4e00\u500b\u4f8b\u5b50\u300csky*blue\u300d\u4f86\u8aaa\uff0c\u641c\u5c0b\u7d50\u679c\u53ef\u80fd\u6703\u51fa\u73fe\u300cskblue\u300d\uff0c\u4f46\u56e0\u70ba\u52a0\u865f\u5f37\u5236\u5728\u524d\u9762\u7684\u7b26\u865f\u81f3\u5c11\u8981\u6bd4\u5c0d\u4e00\u6b21\uff0c\u56e0\u6b64\u5982\u679c\u8f38\u5165\u300c",(0,l.kt)("strong",{parentName:"p"},"sky+blue"),"\u300d\uff0c\u5c31\u4e00\u5b9a\u6703\u51fa\u73fe\u81f3\u5c11\u4e00\u6b21y\uff1a\u300csk",(0,l.kt)("strong",{parentName:"p"},"y"),"blue\u300d\uff0c\u5176\u4ed6\u53ef\u80fd\u7684\u7d50\u679c\u8ddf\u8f38\u5165\u661f\u865f\u4e00\u6a23\u3002"),(0,l.kt)("h3",{id:"\u76f4\u7dda"},"\uff5c\u3010\u76f4\u7dda\u3011"),(0,l.kt)("p",null,"\u8ddf\u4f7f\u7528google\u641c\u5c0b\u5f15\u64ce\u985e\u4f3c\uff0c\u898f\u5247\u904b\u7b97\u5f0f\u4e5f\u6709\u4ee3\u8868\u300c\u6216\u8005\u300d\u7684\u7b26\u865f\uff0c\u5c31\u662f\u76f4\u7dda\u3002\u6bd4\u5982\u4f60\u60f3\u8981\u641c\u5c0b\u6574\u500b\u7db2\u7ad9\u8ddfFacebook\u3001Instagram\u3001Wordpress\u3001Google\u6709\u95dc\u7684\u6587\u7ae0\u4e4b\u6d41\u91cf\uff0c\u4f60\u5c31\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("strong",{parentName:"p"},"Facebook\uff5cInstagram\uff5cWordpress\uff5cGoogle")," \u9019\u6a23\u7684\u9032\u968e\u641c\u5c0b\uff0c\u70ba\u4f60\u60f3\u8981\u7684\u7d50\u679c\u4e00\u6b21\u4e00\u7db2\u6253\u76e1\u3002"),(0,l.kt)("p",null,"\u53c8\u6216\u8005\u4f60\u6709\u4e0d\u540c\u7684\u7522\u54c1\uff0c\u5728\u7db2\u5740\u7684\u7d50\u5c3e\u5206\u5225\u4f7f\u7528thank",(0,l.kt)("strong",{parentName:"p"},"s"),"\u6216\u662fthank",(0,l.kt)("strong",{parentName:"p"},"you"),"\uff0c\u90a3\u9ebc\u4f60\u4e5f\u53ef\u4ee5\u7528/productname-thank ",(0,l.kt)("strong",{parentName:"p"},"\uff08s\uff5ckyou\uff09"),"\uff0c\u4e00\u6b21\u67e5\u770b\u5b8c\u6210\u7522\u54c1\u8cfc\u8cb7\u7684\u4f7f\u7528\u8005\u7684\u8cc7\u8a0a\u3002"),(0,l.kt)("h3",{id:"-\u63d2\u5165\u7b26\u865f-\u9322\u5b57\u7b26\u865f"},"\uff3e \u3010\u63d2\u5165\u7b26\u865f\u3011 $\u3010\u9322\u5b57\u7b26\u865f\u3011"),(0,l.kt)("p",null,"^\u63d2\u5165\u7b26\u865f\u662f\u6bd4\u5c0d\u524d\u958b\u982d\uff0c$\u9322\u5b57\u7b26\u865f\u5247\u662f\u6bd4\u5c0d\u7d50\u5c3e\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u4f60\u8f38\u5165\u7684\u641c\u5c0b\u689d\u4ef6\u662f ",(0,l.kt)("strong",{parentName:"p"},"^eat"),"\uff0c\u90a3\u9ebc\u4f60\u6703\u641c\u5c0b\u5230\u7684\u7d50\u679c\u6703\u6709",(0,l.kt)("strong",{parentName:"p"},"eat"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"eat"),"en\uff1b\u5982\u679c\u662f",(0,l.kt)("strong",{parentName:"p"},"eat$"),"\uff0c\u90a3\u9ebd\u641c\u5c0b\u5230\u7684\u7d50\u679c\u53ef\u80fd\u662fcr",(0,l.kt)("strong",{parentName:"p"},"eat"),"\u3001p",(0,l.kt)("strong",{parentName:"p"},"eat"),"\u3001l",(0,l.kt)("strong",{parentName:"p"},"eat"),"\u3002\u5982\u679c\u4f60\u53ea\u60f3\u8981\u641c\u5c0beat\u9019\u500b\u5b57\uff0c\u90a3\u9ebc\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("strong",{parentName:"p"},"^eat\uff04"),"\uff0c\u9019\u5c07\u53ea\u9396\u5b9a\u7b26\u5408\u300ceat\u300d\u7684\u9019\u500b\u641c\u5c0b\u7d50\u679c"),(0,l.kt)("h3",{id:"-\u53cd\u659c\u7dda"},"\\ \u3010\u53cd\u659c\u7dda\u3011"),(0,l.kt)("p",null,"\u5c07\u4efb\u4f55\u7279\u6b8a\u5b57\u5143\uff0c\u6062\u5fa9\u6210\u4e00\u822c\u5b57\u5143\u3002"),(0,l.kt)("p",null,"\u53ef\u80fd\u5728\u641c\u5c0b\u7279\u5b9a\u7db2\u5740\u7684\u6642\u5019\u88e1\u9762\u6709\u4e00\u500b\u9ede\u6216\u8005\u662f\u67e5\u627eIP\u7684\u6642\u5019\u4e5f\u6709\u4e00\u500b\u9ede\uff0c\u53ef\u662f\u9019\u500b\u9ede\u540c\u6642\u53c8\u5728\u898f\u5247\u904b\u7b97\u5f0f\u88e1\u9762\u6709\u5b83\u81ea\u5df1\u7684\u529f\u80fd\uff0c\u70ba\u4e86\u8981\u8b93\u9019\u500b\u9ede\u4e0d\u53d7\u5230\u898f\u5247\u904b\u7b97\u7684\u5f71\u97ff\uff08\u4e0d\u8981\u4f7f\u7528\u898f\u5247\u904b\u7b97\u88e1\u300c\u9ede\u300d\u7684\u529f\u80fd\uff09\uff0c\u6b64\u6642\u5c31\u9700\u8981\u53cd\u659c\u7dda\u7684\u5e6b\u52a9\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\u6211\u60f3\u627e",(0,l.kt)("strong",{parentName:"p"},"transbiz.com"),"\u4f46\u5982\u679c\u53ea\u8f38\u5165transbiz.com\u7684\u6642\u5019\u53ef\u80fd\u6703\u51fa\u73fe\u7684\u641c\u5c0b\u7d50\u679c\u5305\u62ectransbiz",(0,l.kt)("strong",{parentName:"p"},"k"),"com\u3001transbiz",(0,l.kt)("strong",{parentName:"p"},"z"),"com\u3001transbiz",(0,l.kt)("strong",{parentName:"p"},"c"),"com\u22ef\u22ef\u6240\u4ee5\u70ba\u4e86\u66f4\u7cbe\u6e96\u5730\u627e\u5230\u4f60\u60f3\u8981\u7684\u7d50\u679c\uff0c\u5728\u898f\u5247\u904b\u7b97\u5f0f\u88e1\u8f38\u5165\u300c",(0,l.kt)("strong",{parentName:"p"},"transbiz",".","com"),"\u300d\uff0c\u5c31\u6703\u51fa\u73fetransbiz.com\u4e86\u3002"),(0,l.kt)("h3",{id:"--\u62ec\u865f"},"( ) \u3010\u62ec\u865f\u3011"),(0,l.kt)("p",null,"\u62ec\u865f\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u628a\u4f60\u60f3\u8981\u627e\u7684\u76f8\u95dc\u5b57\u8a5e\u653e\u5728\u62ec\u865f\u88e1\u9762\uff0c\u5b83\u5c31\u6703\u4f9d\u7167\u62ec\u865f\u88e1\u9762\u7684\u5b57\u5143\u6392\u5e8f\u70ba\u4f60\u627e\u5230\u53ef\u80fd\u7684\u7d50\u679c\u3002\u6bd4\u5982 (sym)\uff0c\u4f60\u53ef\u80fd\u641c\u5c0b\u5230\u7684\u7d50\u679c\u53ef\u80fd\u6709",(0,l.kt)("strong",{parentName:"p"},"sym"),"pathy\u3001",(0,l.kt)("strong",{parentName:"p"},"sym"),"bol\u3001as",(0,l.kt)("strong",{parentName:"p"},"sym"),"\u7b49\u3002"),(0,l.kt)("p",null,"\u800c\u5728\u4f7f\u7528\u4e0a\u5b83\u5e38\u5e38\u6703\u548c\uff5c\uff08\u76f4\u7dda\uff09\u4e00\u8d77\u642d\u914d\u4f7f\u7528\uff0c\u6bd4\u5982 ",(0,l.kt)("strong",{parentName:"p"},"sy(m\uff5cn)"),"\uff0c\u4f60\u53ef\u80fd\u5c31\u6703\u627e\u5230",(0,l.kt)("strong",{parentName:"p"},"syn"),"drome\u3002"),(0,l.kt)("h3",{id:"-\u4e2d\u62ec\u865f"},"] \u3010\u4e2d\u62ec\u865f\u3011"),(0,l.kt)("p",null,"\u4efb\u610f\u6bd4\u5c0d\u5b57\u4e32\u4e2d\u88e1\u9762\u7684\u6bcf\u500b\u9805\u76ee\u3002\u6bd4\u5982\u4f60\u8a2d\u5b9a",(0,l.kt)("strong",{parentName:"p"},"[DEFG]"),"\uff0c\u90a3\u9ebc\u5c31\u6703\u70ba\u4f60\u627e\u51fa\u542b\u6709DEFG\u7684\u76f8\u95dc\u5167\u5bb9\uff0c\u6bd4\u5982\u7522\u54c1\u985e\u5225\u6709A\u5230Z\uff0c\u4f46\u4f60\u60f3\u770bDEFG\u9019\u5e7e\u500b\u5546\u54c1\u985e\u5225\u7684\u8868\u73fe\uff0c\u90a3\u9ebc\u5c31\u53ef\u4ee5\u7528product","[DEFG]","\u627e\u5230\u4f60\u8981\u7684\u5546\u54c1\uff1aprdocut",(0,l.kt)("strong",{parentName:"p"},"D"),"\u3001prdocut",(0,l.kt)("strong",{parentName:"p"},"E"),"\u3001prdocut",(0,l.kt)("strong",{parentName:"p"},"F"),"\u3001prdocut",(0,l.kt)("strong",{parentName:"p"},"G"),"\u3002"),(0,l.kt)("h3",{id:"-\u7834\u6298\u865f"},"\u2013 \u3010\u7834\u6298\u865f\u3011"),(0,l.kt)("p",null,"\u5e38\u5e38\u6703\u548c\u4e2d\u62ec\u865f[]\u4e00\u8d77\u4f7f\u7528\uff0c\u6bd4\u5982product ",(0,l.kt)("strong",{parentName:"p"},"[A-K]"),", product ",(0,l.kt)("strong",{parentName:"p"},"[3-9]")," \u5c31\u53ef\u4ee5\u5206\u5225\u53eb\u51fa\u7de8\u865fA\u5230K\u3001\u7de8\u865f3\u52309\u7684\u5546\u54c1\u3002"),(0,l.kt)("h2",{id:"\u5e38\u7528\u7bc4\u4f8b"},"\u5e38\u7528\u7bc4\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IPv4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MAC ",(0,l.kt)("em",{parentName:"li"}," IEEE 802 MAC-48 \u6a19\u6e96\u683c\u5f0f ")," 6 \u7d44\u7531 ",(0,l.kt)("inlineCode",{parentName:"li"},":")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"-")," \u505a\u5340\u9694\u7684\u96d9\u4f4d\u6578 16 \u9032\u5236\u6578\u5b57")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9a57\u8b49\u4f7f\u7528\u8005\u5e33\u865f\uff0c\u7b2c\u4e00\u500b\u5b57\u4e0d\u70ba\u6578\u5b57\uff0c\u53ea\u63a5\u53d7 \u5927\u5c0f\u5beb\u5b57\u6bcd\u3001\u6578\u5b57\u53ca\u5e95\u7dda")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/^[a-zA-Z]\\w*$/\n")),(0,l.kt)("h2",{id:"mail"},"Mail"),(0,l.kt)("p",null,'An email is a string (a subset of ASCII characters) separated into two parts by @ symbol. a "personal_info" and a domain, that is personal_info@domain. The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.'),(0,l.kt)("p",null,"The personal_info part contains the following ASCII characters."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Uppercase (A-Z) and lowercase (a-z) English letters."),(0,l.kt)("li",{parentName:"ul"},"Digits (0-9)."),(0,l.kt)("li",{parentName:"ul"},"Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~"),(0,l.kt)("li",{parentName:"ul"},"Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.")),(0,l.kt)("p",null,"The domain name ","[for example com, org, net, in, us, info]"," part contains letters, digits, hyphens, and dots."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example of valid email id")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:mysite@ourearth.com"},"mysite@ourearth.com")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:my.ownsite@ourearth.org"},"my.ownsite@ourearth.org")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:mysite@you.me.net"},"mysite@you.me.net"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example of invalid email id")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"mysite.ourearth.com ","[@ is not present]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:mysite@.com.my"},"mysite@.com.my")," ",'[ tld (Top Level domain) can not start with dot "." ]'),(0,l.kt)("li",{parentName:"ul"},"@you.me.net ","[ No character before @ ]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:mysite123@gmail.b"},"mysite123@gmail.b")," ",'[ ".b" is not a valid tld ]'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:mysite@.org.org"},"mysite@.org.org")," ",'[ tld can not start with dot "." ]'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:.mysite@mysite.org"},".mysite@mysite.org")," ",'[ an email should not be start with "." ]'),(0,l.kt)("li",{parentName:"ul"},"mysite()*@gmail.com ","[ here the regular expression only allows character, digit, underscore, and dash ]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"mailto:mysite..1234@yahoo.com"},"mysite..1234@yahoo.com")," ","[double dots are not allowed]")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JavaScript code to validate an email id")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'function ValidateEmail(mail) \n{\n if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(myForm.emailAddr.value))\n  {\n    return (true)\n  }\n    alert("You have entered an invalid email address!")\n    return (false)\n}\n')),(0,l.kt)("p",null,"To get a valid email id we use a regular expression ",(0,l.kt)("inlineCode",{parentName:"p"},"/^[a-zA-Z0-9.!#$%&'*+/=?^_"),"{|}~-]+@","[a-zA-Z0-9-]","+(?:",".","[a-zA-Z0-9-]","+)",(0,l.kt)("em",{parentName:"p"},"$/`. According to ",(0,l.kt)("a",{parentName:"em",href:"https://tools.ietf.org/html/rfc3696#page-5"},"http://tools.ietf.org/html/rfc3696#page-5")," ! # $ % & \u2018 ")," + \u2013 / = ? ^ ` . { | } ~ characters are legal in the local part of an e-mail address but in the above regular expression those characters are filtered out. You can modify or rewrite the said regular expression."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.w3resource.com/javascript/form/email-validation.php"},"w3resource \u63d0\u4f9b\u7684 validate")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"RFC 822 "),(0,l.kt)("p",{parentName:"blockquote"},"RFC 822\u662f\u96fb\u5b50\u90f5\u4ef6\u7684\u6a19\u6e96\u683c\u5f0f\uff0c\u96fb\u5b50\u90f5\u4ef6\u9664\u4e86\u662f\u7531\u4e00\u500bInternet\u7528\u6236\u50b3\u905e\u7d66\u53e6\u4e00\u500b\u7528\u6236\u7684\u4fe1\u606f\u4e4b\u5916\uff0c\u9084\u5fc5\u9808\u5305\u542b\u9644\u52a0\u7684\u670d\u52d9\u4fe1\u606f\uff0c\u9019\u5169\u500b\u90e8\u5206\u52a0\u5728\u4e00\u8d77\u53eb\u505a\u96fb\u5b50\u90f5\u4ef6\u7684\u6a19\u6e96\u683c\u5f0f\uff0c\u5916\u6587\u7c21\u7a31RFC 822."),(0,l.kt)("p",{parentName:"blockquote"},"regular \u53c3\u8003"),(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\n\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\n\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:\n(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])/\n"))),(0,l.kt)("h2",{id:"\u5de5\u5177\u7db2\u7ad9"},"\u5de5\u5177\u7db2\u7ad9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://ihateregex.io"},"iHateRegex")," \u67e5\u8a62\u5e38\u7528\u7684\u6b63\u898f\u8868\u793a\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://regexr.com"},"RegExr - Regular Expression Online")," \u7dda\u4e0a\u6e2c\u8a66\u6b63\u898f\u8868\u793a\u5f0f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://jex.im/regulex/"},"JavaScript Regular Expression Visualizer")," \u8996\u89ba\u5316\u5448\u73fe\u6b63\u898f\u8868\u793a\u5f0f\u7684\u898f\u5247\u8def\u5f91")))}k.isMDXComponent=!0}}]);
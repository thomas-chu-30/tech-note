"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[4863],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=i(n),d=l,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var i=2;i<a;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=["components"],c={},u=void 0,i={unversionedId:"Linux/command-line",id:"Linux/command-line",title:"command-line",description:"\u57fa\u790e",source:"@site/docs/Linux/command-line.md",sourceDirName:"Linux",slug:"/Linux/command-line",permalink:"/tech-note/docs/Linux/command-line",draft:!1,editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/Linux/command-line.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RESTful API-\u8a2d\u8a08\u898f\u7bc4",permalink:"/tech-note/docs/Https/RESTful API"},next:{title:"MySql",permalink:"/tech-note/docs/Linux/mysql"}},p={},m=[{value:"\u57fa\u790e",id:"\u57fa\u790e",level:2},{value:"\u9032\u968e",id:"\u9032\u968e",level:2},{value:"tail",id:"tail",level:3},{value:"curl",id:"curl",level:3},{value:"chown",id:"chown",level:3}],s={toc:m};function d(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u790e"},"\u57fa\u790e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5207\u63db\u6a94\u6848\u4f4d\u5b50\uff0c\u67e5\u770b\u6e05\u55ae")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ls # \u5217\u51fa\u76ee\u524d\u6240\u5728\u7684\u6e05\u55ae\n$ pwd # \u78ba\u8a8d\u76ee\u524d\u6240\u5728\u8def\u5f91\n$ cd [path | ..] # \u5207\u63db\u5230\u6240\u5728\u7684\u6a94\u6848\u4f4d\u5b50\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u53e6\u4e00\u500b\u6bd4\u8f03\u7279\u5225\u7684\u662f\u770b\u8aaa\u4f60\u7684\u6a94\u6848\u6b0a\u9650")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ll\n-rw-r--r--@  1 zhuzhengyang  staff    20K  7 16 16:44 2021 Trend of MLCC under 5G Era.jpg\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5efa\u7acb folder \u548c\u522a\u9664 folder")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir # \u5efa\u7acb\n$ rmdir # \u522a\u9664\n")),(0,a.kt)("h2",{id:"\u9032\u968e"},"\u9032\u968e"),(0,a.kt)("h3",{id:"tail"},"tail"),(0,a.kt)("p",null,"\u67e5\u770b log \u6642\u5019\u7528\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tail [-F | -f | -r] [-b number | -c number | -n number] [file ...]\n")),(0,a.kt)("p",null,"\u591a\u52a0\u4e00\u500b ","[-q]"," \u70ba\u4e86\u5728\u6aa2\u67e5\u591a\u500b\u6587\u4ef6\u6642\u7981\u6b62\u6253\u5370\u6a19\u984c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tail [-F | -f | -r] [-q] [-b number | -c number | -n number] [file ...]\n")),(0,a.kt)("h3",{id:"curl"},"curl"),(0,a.kt)("p",null,"\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"terminal")," \u76f4\u63a5\u6253 url\uff0c\u7576\u6210\u662f client \u7684\u4e00\u6a23\u7684\u53bb\u6253 request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl [option] [url]\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ss64.com/osx/curl.html"},"\u53c3\u8003\u7684 option")),(0,a.kt)("h3",{id:"chown"},"chown"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blog.gtwang.org/linux/linux-chown-command-tutorial/"},"https://blog.gtwang.org/linux/linux-chown-command-tutorial/")),(0,a.kt)("p",null,"\u4e0b\u5217\u70ba\u67e5\u5c0b command line \u7db2\u7ad9"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://ss64.com/osx/"},"https://ss64.com/osx/")))}d.isMDXComponent=!0}}]);
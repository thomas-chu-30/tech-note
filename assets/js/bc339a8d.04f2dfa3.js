"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[4844],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(y,c(c({ref:t},s),{},{components:n})):r.createElement(y,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},399:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={},l="MySql",u={unversionedId:"Linux/mysql",id:"Linux/mysql",title:"MySql",description:"\u6253\u958b\u4f60\u7684 mysql",source:"@site/docs/Linux/mysql.md",sourceDirName:"Linux",slug:"/Linux/mysql",permalink:"/tech-note/docs/Linux/mysql",draft:!1,editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/Linux/mysql.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"command-line",permalink:"/tech-note/docs/Linux/command-line"},next:{title:"\u8d77\u624b\u5f0f",permalink:"/tech-note/docs/Nginx/\u8d77\u624b\u5f0f"}},s={},p=[{value:"\u5728 MySql \u4e2d\u7684\u6307\u4ee4",id:"\u5728-mysql-\u4e2d\u7684\u6307\u4ee4",level:2}],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mysql"},"MySql"),(0,a.kt)("p",null,"\u6253\u958b\u4f60\u7684 mysql "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u root\n")),(0,a.kt)("h2",{id:"\u5728-mysql-\u4e2d\u7684\u6307\u4ee4"},"\u5728 MySql \u4e2d\u7684\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u770b\u4f60\u7684 databases \u6709\u4ec0\u9ebc\nshow databases;\n# \u96e2\u958b\nexit;\n")))}f.isMDXComponent=!0}}]);
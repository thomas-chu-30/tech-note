"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[4776],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,d=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2438:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={},p="\u65e5\u5149\u7bc0\u7d04\u6642\u9593",l={unversionedId:"JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593",id:"JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593",title:"\u65e5\u5149\u7bc0\u7d04\u6642\u9593",description:"Intl.DateTimeFormat",source:"@site/docs/JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593.md",sourceDirName:"JavaScript",slug:"/JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593",permalink:"/tech-note/docs/JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Preview Image",permalink:"/tech-note/docs/JavaScript/upload preview image"},next:{title:"**\u6d6e\u9ede\u6578\u7684\u52a0\u6e1b**",permalink:"/tech-note/docs/JavaScript/\u6d6e\u9ede\u6578\u904b\u7b97"}},u=[],s={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u65e5\u5149\u7bc0\u7d04\u6642\u9593"},"\u65e5\u5149\u7bc0\u7d04\u6642\u9593"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat"},"Intl.DateTimeFormat")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var options = {calendar: 'chinese', numberingSystem: 'arab'};\nvar dateFormat = new Intl.DateTimeFormat('default', options);\nvar usedOptions = dateFormat.resolvedOptions();\n\nconsole.log(usedOptions.calendar);\n// \u2192 \"chinese\"\n\nconsole.log(usedOptions.numberingSystem);\n// \u2192 \"arab\"\n\nconsole.log(usedOptions.timeZone);\n// \u2192 \"America/New_York\" (the users default timezone)\n")))}m.isMDXComponent=!0}}]);
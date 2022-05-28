"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[1062],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return t?r.createElement(d,c(c({ref:n},l),{},{components:t})):r.createElement(d,c({ref:n},l))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6089:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={},u="**IIFE**",p={unversionedId:"JavaScript/IIFE",id:"JavaScript/IIFE",title:"**IIFE**",description:"IIFE (Immediately Invoked Function Expression) \u662f\u4e00\u500b\u5b9a\u7fa9\u5b8c\u99ac\u4e0a\u5c31\u57f7\u884c\u7684 JavaScript function (en-US)\u3002\u4f7f\u7528Grouping Operator (en-US) () \u5305\u8d77\u4f86\u7684 anonymous function\u3002\u9019\u6a23\u7684\u5beb\u6cd5\u53ef\u4ee5\u907f\u514d\u88e1\u9762\u7684\u8b8a\u6578\u6c61\u67d3\u5230 global scope\u3002",source:"@site/docs/JavaScript/IIFE.md",sourceDirName:"JavaScript",slug:"/JavaScript/IIFE",permalink:"/tech-note/docs/JavaScript/IIFE",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/JavaScript/IIFE.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"**Get DOM Element**",permalink:"/tech-note/docs/JavaScript/Get DOM Element"},next:{title:"encode decode",permalink:"/tech-note/docs/JavaScript/encode decode"}},l=[],s={toc:l};function m(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iife"},(0,a.kt)("strong",{parentName:"h1"},"IIFE")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"IIFE (Immediately Invoked Function Expression) \u662f\u4e00\u500b\u5b9a\u7fa9\u5b8c\u99ac\u4e0a\u5c31\u57f7\u884c\u7684 JavaScript function (en-US)\u3002\u4f7f\u7528Grouping Operator (en-US) () \u5305\u8d77\u4f86\u7684 anonymous function\u3002\u9019\u6a23\u7684\u5beb\u6cd5\u53ef\u4ee5\u907f\u514d\u88e1\u9762\u7684\u8b8a\u6578\u6c61\u67d3\u5230 global scope\u3002")),(0,a.kt)("p",null,"Function \u8f49\u63db\u70ba expression \u5f62\u5f0f\uff0c\u4e26\u4e14\u99ac\u4e0a\u57f7\u884c\uff0cfunction scope \u5167\u7684\u8b8a\u6578\u5728\u5916\u9762\u662f\u7121\u6cd5\u5b58\u53d6\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const result = (function () {\n    var name = "Barry";\n    return name;\n})();\n// Immediately creates the output:\nconsole.log(result); // "Barry"\n')),(0,a.kt)("p",null,"\u53ef\u80fd\u7684\u4f7f\u7528\u60c5\u6cc1\uff0c\u672c\u8eab\u7684 object \u9700\u8981 function \u53bb\u8655\u7406\u8cc7\u6599\uff0c\u76f4\u63a5 return \u503c\u51fa\u4f86\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = {\n    b: (function(){ \n        return 'thomas'\n    })(),\n    c: (()=>{\n        return 'john'\n    })()\n}\n\nconsole.log(a.b, a.c) // thomas john\n")),(0,a.kt)("p",null,"async function \u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const a = {\n    b: ( async function(){ \n        return 'thomas'\n    })(),\n    c: ( async ()=>{\n        return 'john'\n    })()\n}\n")),(0,a.kt)("p",null,"\u76f4\u63a5\u50b3\u905e\u53c3\u6578"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"(function(name){ \n    return name\n})('thomas'),\n\n// thomas\n")))}m.isMDXComponent=!0}}]);
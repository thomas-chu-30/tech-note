"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[7542],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,v=s["".concat(p,".").concat(m)]||s[m]||f[m]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},6136:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],c={},p="Preview Image",l={unversionedId:"JavaScript/upload preview image",id:"JavaScript/upload preview image",title:"Preview Image",description:"\u958b\u767c\u904e\u4e2d\u7a0b\u5e38\u5e38\u6703\u6709\u4e0a\u50b3\u6a94\u6848\u7684\u529f\u80fd\uff0c\u4e0a\u50b3\u5b8c\u4e4b\u5f8c\u4e5f\u8981\u53ef\u4ee5\u99ac\u4e0a\u53bb preview image \u7684\u60c5\u6cc1\uff0c\u6b64\u6642\u6211\u5011\u53ef\u4ee5\u900f\u904e files\u4f86\u4f5c\u5230\u6211\u5011\u60f3\u8981\u7684\u6548\u679c \u2193",source:"@site/docs/JavaScript/upload preview image.md",sourceDirName:"JavaScript",slug:"/JavaScript/upload preview image",permalink:"/tech-note/docs/JavaScript/upload preview image",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/JavaScript/upload preview image.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"this",permalink:"/tech-note/docs/JavaScript/this"},next:{title:"\u65e5\u5149\u7bc0\u7d04\u6642\u9593",permalink:"/tech-note/docs/JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593"}},u=[],f={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preview-image"},"Preview Image"),(0,i.kt)("p",null,"\u958b\u767c\u904e\u4e2d\u7a0b\u5e38\u5e38\u6703\u6709\u4e0a\u50b3\u6a94\u6848\u7684\u529f\u80fd\uff0c\u4e0a\u50b3\u5b8c\u4e4b\u5f8c\u4e5f\u8981\u53ef\u4ee5\u99ac\u4e0a\u53bb preview image \u7684\u60c5\u6cc1\uff0c\u6b64\u6642\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"files"),"\u4f86\u4f5c\u5230\u6211\u5011\u60f3\u8981\u7684\u6548\u679c \u2193 "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<form>\n    <input @change="getFile($event)" type="file" id=\'upload_file\'/>\n    <img v-if=\'url\' :src="url" />\n</form>\n')),(0,i.kt)("p",null,"\u5728 input onchange \u7684\u6642\u5019\u89f8\u767c\u7684\u4e8b\u4ef6\uff0c\u5728\u6b64\u4e8b\u4ef6\u4e2d\u53d6\u5f97 ",(0,i.kt)("inlineCode",{parentName:"p"},"files")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  setup(){\n    let url = ref('')\n    const getFile = ($event)=> {\n      const file = $event.target.files[0]\n      url.value = URL.createObjectURL(file); //\u628a\u4e0a\u50b3\u6a94\u6848\u7684 image url \u50b3\u5165\n    }\n    return {getFile,url}\n  }\n}\n")))}s.isMDXComponent=!0}}]);
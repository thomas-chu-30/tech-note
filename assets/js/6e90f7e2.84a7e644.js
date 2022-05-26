"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[6541],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=i(r),f=o,m=y["".concat(u,".").concat(f)]||y[f]||s[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7072:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return y}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],l={},u="\u7522\u751f ssh key",i={unversionedId:"Other/public_key",id:"Other/public_key",title:"\u7522\u751f ssh key",description:"\u9996\u5148\u8f38\u5165\u6307\u4ee4\u4f86\u7522\u751f key",source:"@site/docs/Other/public_key.md",sourceDirName:"Other",slug:"/Other/public_key",permalink:"/tech-note/docs/Other/public_key",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/Other/public_key.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"HTTP Cache \u6a5f\u5236",permalink:"/tech-note/docs/Other/Http"},next:{title:"\u5efa\u7acb express \u5c08\u6848\u8d77\u624b\u5f0f",permalink:"/tech-note/docs/Node/express"}},p=[{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",children:[],level:2}],s={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7522\u751f-ssh-key"},"\u7522\u751f ssh key"),(0,a.kt)("p",null,"\u9996\u5148\u8f38\u5165\u6307\u4ee4\u4f86\u7522\u751f key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh-keygen\n")),(0,a.kt)("p",null,"\u63a5\u8457\u6703\u8a62\u554f\u7522\u751f\u7684ssh key\u8981\u5b58\u653e\u7684\u4f4d\u7f6e"),(0,a.kt)("p",null,"\u9019\u6642\u9078\u64c7\u8981\u653e\u7684\u4f4d\u7f6e \u9810\u8a2d\u70ba /home/username/.ssh/id_rsa"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u540c\u4f3a\u670d\u5668\u6703\u4f7f\u7528\u4e0d\u540c\u7684key \u5247\u6539\u8b8akey\u7684\u4f4d\u7f6e (\u4f8b\u5982\uff1a ",(0,a.kt)("strong",{parentName:"p"},"/home/username/.ssh/id_rsa_ubuntu"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"id_rsa      id_rsa.pub <= \u628a\u9019\u500b\u6771\u897f\u6253\u958b   known_hosts \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cat id_rsa.pub\n")),(0,a.kt)("p",null,"\u5728\u628a\u516c key copy \u4e0b\u4f86"),(0,a.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://xenby.com/b/220-%E6%95%99%E5%AD%B8-%E7%94%A2%E7%94%9Fssh-key%E4%B8%A6%E4%B8%94%E9%80%8F%E9%81%8Ekey%E9%80%B2%E8%A1%8C%E5%85%8D%E5%AF%86%E7%A2%BC%E7%99%BB%E5%85%A5"},"\u7522\u751fSSH Key\u4e26\u4e14\u900f\u904eKEY\u9032\u884c\u514d\u5bc6\u78bc\u767b\u5165")))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[714],{3905:function(e,r,t){t.d(r,{Zo:function(){return i},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},i=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(g,l(l({ref:r},i),{},{components:t})):n.createElement(g,l({ref:r},i))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=f;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},559:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return i},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],u={},c="Resolver",s={unversionedId:"angular/resolver",id:"angular/resolver",title:"Resolver",description:"router \u8f49\u5740\u5f8c\u6703\u5148\u7d93\u904e resolver \u5728\u53bb\u5230\u53e6\u4e00\u500b router \uff0c\u56e0\u6b64\u53ef\u5148\u5728\u6b64\u53d6\u5f97\u8cc7\u6599\uff0c\u5230\u65b0\u9801\u9762\u6642\u5c31\u53ef\u76f4\u63a5\u8ce6\u4e88\u503c",source:"@site/docs/angular/resolver.md",sourceDirName:"angular",slug:"/angular/resolver",permalink:"/docs/angular/resolver",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/angular/resolver.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pipe",permalink:"/docs/angular/pipe"},next:{title:"Router",permalink:"/docs/angular/router"}},i=[],p={toc:i};function f(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resolver"},"Resolver"),(0,a.kt)("p",null,"router \u8f49\u5740\u5f8c\u6703\u5148\u7d93\u904e resolver \u5728\u53bb\u5230\u53e6\u4e00\u500b router \uff0c\u56e0\u6b64\u53ef\u5148\u5728\u6b64\u53d6\u5f97\u8cc7\u6599\uff0c\u5230\u65b0\u9801\u9762\u6642\u5c31\u53ef\u76f4\u63a5\u8ce6\u4e88\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate resolver <folder/name> [options eg. --skip-tests]\n")),(0,a.kt)("p",null,"\u5728 page \u53d6\u5f97\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"this.route.data.subscribe((res) => {\n     this.category = res.category.data;\n});\n")),(0,a.kt)("p",null,"router setting "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n        path: 'categories',\n        component: ProductsPageComponent,\n        resolve: {\n            category: CategoryResolver,\n        }\n},\n")),(0,a.kt)("p",null,"Resolver \u7684\u6a94\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"export class CategoryResolver implements Resolve<boolean> {\n    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {\n        // route \u548c ActiveRoute \u5f88\u50cf\n                // state \u548c Router \u5f88\u50cf\n        return of(true)\n    }\n}\n")))}f.isMDXComponent=!0}}]);
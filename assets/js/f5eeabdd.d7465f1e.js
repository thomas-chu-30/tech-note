"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[3865],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),f=o,y=m["".concat(u,".").concat(f)]||m[f]||l[f]||a;return t?n.createElement(y,i(i({ref:r},p),{},{components:t})):n.createElement(y,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1742:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],s={},u="Customized Pipe for RxJs",c={unversionedId:"RxJs/customized_pipe",id:"RxJs/customized_pipe",title:"Customized Pipe for RxJs",description:"\u4e0b\u5217\u6240\u9047\u5230\u7684\u60c5\u5883\u662f url \u7684 queryString \u91cd\u8907\u7684\u60c5\u6cc1\uff0c\u6240\u9020\u6210\u7684 bug \uff0c\u6240\u4ee5\u5e0c\u671b\u5728 subscribed \u7684 pipe \u628a queryString \u5c55\u5e73\u3002",source:"@site/docs/RxJs/customized_pipe.md",sourceDirName:"RxJs",slug:"/RxJs/customized_pipe",permalink:"/tech-note/docs/RxJs/customized_pipe",draft:!1,editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/RxJs/customized_pipe.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RxJs \u5e38\u7528\u51fd\u5f0f\u6574\u7406",permalink:"/tech-note/docs/RxJs/general"},next:{title:"title",permalink:"/tech-note/docs/Docker/command/general"}},p={},l=[],m={toc:l};function f(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"customized-pipe-for-rxjs"},"Customized Pipe for RxJs"),(0,a.kt)("p",null,"\u4e0b\u5217\u6240\u9047\u5230\u7684\u60c5\u5883\u662f url \u7684 queryString \u91cd\u8907\u7684\u60c5\u6cc1\uff0c\u6240\u9020\u6210\u7684 bug \uff0c\u6240\u4ee5\u5e0c\u671b\u5728 subscribed \u7684 pipe \u628a queryString \u5c55\u5e73\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export function flattenQueryParams() {\n    return function <T>(source: Observable<T>): Observable<T> {\n        return new Observable((subscriber) => {\n            source.subscribe({\n                next(queryParams) {\n                    let newQueryParams = {} as T;\n                    for (let key of Object.keys(queryParams)) {\n                        if (Array.isArray(queryParams[key])) {\n                            newQueryParams[key] = queryParams[key].slice(-1)[0];\n                        } else {\n                            newQueryParams[key] = queryParams[key];\n                        }\n                    }\n                    subscriber.next(newQueryParams);\n                },\n                error(error) {\n                    subscriber.error(error);\n                },\n                complete() {\n                    subscriber.complete();\n                },\n            });\n        });\n    };\n}\n")),(0,a.kt)("p",null,"\u9019\u6a23\u5b50\u5c31\u53ef\u4ee5\u76f4\u63a5\u5957\u7528\u5230 pipe \u4e2d\uff0c\u4f7f\u7528\u81ea\u5df1\u5beb\u7684 function \u53bb\u4f5c filter \u7684\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"this.route.queryParams.pipe(flattenQueryParams()).subscribe((res) => {\n        this.currentPage = parseInt(res.page) || 1;\n        this.itemsPerPage = parseInt(res.row) || 25;\n});\n")))}f.isMDXComponent=!0}}]);
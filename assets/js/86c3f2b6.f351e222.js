"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[4491],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(o,".").concat(d)]||u[d]||m[d]||p;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(7462),a=n(3366),p=(n(7294),n(3905)),l=["components"],i={},o="Npm install",c={unversionedId:"Node/npm",id:"Node/npm",title:"Npm install",description:"\u4e00\u958b\u59cb\u5728\u4f7f\u7528 npm \u7ba1\u7406\u5b89\u88dd\u5957\u4ef6\u6642\uff0c\u4e00\u5b9a\u6703\u5c0d\u65bc\u9019\u5169\u8005\u5f88\u56f0\u60d1\uff1a",source:"@site/docs/Node/npm.md",sourceDirName:"Node",slug:"/Node/npm",permalink:"/tech-note/docs/Node/npm",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Node/npm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u8d77\u624b\u5f0f",permalink:"/tech-note/docs/Nginx/\u8d77\u624b\u5f0f"},next:{title:"HTTP Cache \u6a5f\u5236",permalink:"/tech-note/docs/Other/Http"}},s=[{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",children:[],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"npm-install"},"Npm install"),(0,p.kt)("p",null,"\u4e00\u958b\u59cb\u5728\u4f7f\u7528 npm \u7ba1\u7406\u5b89\u88dd\u5957\u4ef6\u6642\uff0c\u4e00\u5b9a\u6703\u5c0d\u65bc\u9019\u5169\u8005\u5f88\u56f0\u60d1\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm install packagename --save\n")),(0,p.kt)("p",null,"\u8207"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell"},"npm install packagename --save-dev\n")),(0,p.kt)("p",null,"\u7a76\u7adf\uff0c\u9019\u5169\u8005\u6709\u4ec0\u9ebc\u6a23\u7684\u5dee\u7570\uff1f"),(0,p.kt)("p",null,"\u5176\u5be6\uff0c\u6211\u5011\u53ef\u4ee5\u5f9e package.json \u770b\u5230\u5dee\u7570\uff1a"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://chriskang028.files.wordpress.com/2017/07/4132567561-573e6bffdc518_articlex-e1499253928925.png?w=461&h=527",alt:"https://chriskang028.files.wordpress.com/2017/07/4132567561-573e6bffdc518_articlex-e1499253928925.png?w=461&h=527"})),(0,p.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u5206\u5225\u6709 ",(0,p.kt)("em",{parentName:"p"},"dependencies")," \u8207 ",(0,p.kt)("em",{parentName:"p"},"devDependencies")," \u5169\u500b\u7bc0\u9ede\uff0c\u5206\u5225\u6709\u88dd\u5165\u4e0d\u540c\u7684\u5957\u4ef6\u3002\u6211\u5011\u518d\u56de\u5230\u524d\u9762\u7684 ",(0,p.kt)("em",{parentName:"p"},"\u2013save")," \u8207 ",(0,p.kt)("em",{parentName:"p"},"\u2013save-dev")," \u7684\u5169\u500b\u5b89\u88dd\u6307\u4ee4\uff0c\u524d\u8005\u5206\u5225\u662f\u6307\u5230 ",(0,p.kt)("em",{parentName:"p"},"dependencies")," \u8207 ",(0,p.kt)("em",{parentName:"p"},"devDependencies")," \u4e0b\uff0c\u5f8c\u8005\u5247\u662f\u53ea\u6709\u5beb\u5165 ",(0,p.kt)("em",{parentName:"p"},"devDependencies")," \u4e0b\u3002\u6240\u4ee5\u57f7\u884c npm install \u6642\uff0c\u53ef\u4ee5\u6839\u64da\u9700\u6c42\uff0c\u4f7f\u7528\u4e0d\u540c\u7684\u6307\u4ee4\u5b89\u88dd\u3002"),(0,p.kt)("p",null,"\u81f3\u65bc\u6839\u64da\u4ec0\u9ebc\u6a23\u7684\u9700\u6c42\u5462\uff1f\u5176\u5be6\uff0c\u9019\u5169\u500b\u7684\u5dee\u7570\uff0c\u95dc\u4fc2\u5230\u958b\u767c\u74b0\u5883\u8207\u767c\u4f48\u74b0\u5883\u3002\u4e0b\u9762\u5206\u5225\u5217\u8209\u4f7f\u7528\u76ee\u7684\u8207\u539f\u56e0\uff1a"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("em",{parentName:"li"},"dependencies :")," \u4f7f\u7528\u5728",(0,p.kt)("strong",{parentName:"li"},"\u5df2\u7d93\u767c\u5e03"),"\u7684\u74b0\u5883\u4e0b\uff0c\u63db\u53e5\u8a71\u8aaa\uff0c\u662f\u6307\u767c\u5e03\u5f8c\u4ecd\u7136\u9700\u8981\u4f9d\u8cf4\u4f7f\u7528\u7684 plug-in\u3002\u8209\u500b\u4f8b\u5b50\u4f86\u8aaa\uff0c\u5982\u679c\u6211\u9700\u8981\u4f7f\u7528 ",(0,p.kt)("em",{parentName:"li"},"jQuery")," \u8207 ",(0,p.kt)("em",{parentName:"li"},"AngularJs")," \u4f86\u958b\u767c\uff0c\u5c31\u7b97\u958b\u767c\u5b8c\u4e4b\u5f8c\u767c\u4f48\u5230\u4f3a\u670d\u5668\uff0c\u6211\u4ecd\u7136\u9700\u8981\u4f9d\u8cf4 ",(0,p.kt)("em",{parentName:"li"},"jQuery")," \u8207 ",(0,p.kt)("em",{parentName:"li"},"AngularJs")," \u7684\u5957\u4ef6\uff0c\u9019\u4e9b\u5957\u4ef6\u6703\u5728\u767c\u5e03\u5f8c\u7e7c\u7e8c\u4f7f\u7528\u3002",(0,p.kt)("strong",{parentName:"li"},"\u7528\u6cd5"),"\uff1a\u7576\u6211\u57f7\u884c ",(0,p.kt)("em",{parentName:"li"},"npm install \u2013production")," \u6216\u662f\u8a3b\u660e ",(0,p.kt)("em",{parentName:"li"},"NODE_ENV")," \u8b8a\u91cf\u503c\u4e3a\u70ba ",(0,p.kt)("em",{parentName:"li"},"production")," \u6642\uff0c\u53ea\u6703\u4e0b\u8f09 ",(0,p.kt)("em",{parentName:"li"},"dependencies")," \u4e2d\u7684\u5957\u4ef6\u3002"),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("em",{parentName:"li"},"devDependencies :")," \u4f7f\u7528\u5728",(0,p.kt)("strong",{parentName:"li"},"\u958b\u767c\u4e2d"),"\u7684\u74b0\u5883\u4e0b\uff0c\u610f\u601d\u662f\u6307\u2014\u2014\u53ea\u55ae\u7d14\u6703\u5728\u958b\u767c\u6642\u61c9\u7528\u5230\u7684 plug-in\u3002\u540c\u6a23\u8209\u500b\u4f8b\u5b50\uff0c\u5982\u679c\u6211\u5728\u958b\u767c\u6642\u9700\u8981\u4f7f\u7528 Js ES6 \u4e26\u4f7f\u7528 ",(0,p.kt)("em",{parentName:"li"},"babel")," \u8f49\u63db\u6210 ES5\uff0c\u6216\u662f\u6211\u5e0c\u671b\u53ef\u4ee5\u4f7f\u7528 gulp-stylus \u7684\u5957\u4ef6\u4f86\u4f7f\u7528\uff0c\u4f46\u5728\u767c\u4f48\u4e4b\u5f8c\uff0c\u6211\u5011\u4e26\u4e0d\u6703\u5728\u7528\u5230 gulp-stylus \u9019\u500b\u5957\u4ef6\u3002\u63db\u53e5\u8a71\u8aaa\uff0c\u4ed6\u53ea\u9700\u8981\u5b58\u5728\u65bc\u958b\u767c\u74b0\u5883\u4e2d\uff0c\u800c\u4e0d\u9700\u8981\u7e7c\u7e8c\u653e\u5230\u767c\u5e03\u74b0\u5883\u88cf\u3002",(0,p.kt)("strong",{parentName:"li"},"\u7528\u6cd5"),"\uff1a\u9375\u5165 ",(0,p.kt)("em",{parentName:"li"},"npm install")," \u6642\uff0c\u6703\u540c\u6642\u6293\u4e0b\u4f86 ",(0,p.kt)("em",{parentName:"li"},"dependencies & devDependencies")," \u5169\u500b\u7bc0\u9ede\u4e4b\u4e2d\u7684\u5957\u4ef6\u3002")),(0,p.kt)("p",null,"\u53e6\u5916\u88dc\u5145\u4e00\u9ede\uff0c\u5982\u679c\u767c\u5e03\u4e4b\u5f8c\u4ecd\u7136\u9700\u8981\u7684\u5957\u4ef6\uff0c\u76f4\u63a5\u653e\u5728 ",(0,p.kt)("em",{parentName:"p"},"dependencies")," \u88cf\u5c31\u884c\u4e86\uff0c\u4e0d\u9700\u8981\u540c\u6642\u9593\u653e\u5728\u5169\u500b\u5730\u65b9\uff0c\u5957\u7528\u6642\u6703\u81ea\u52d5\u53bb\u8abf\u7528 ",(0,p.kt)("em",{parentName:"p"},"dependencies")," \u5730\u65b9\u7684\u5957\u4ef6\uff0c\u529f\u80fd\u4e0d\u6703\u53d7\u5230\u5f71\u97ff\u3002"),(0,p.kt)("p",null,"\u5e0c\u671b\u9019\u7bc7\u6587\u7ae0\u53ef\u4ee5\u8b93\u4f60\u5f04\u61c2 npm install \u4e00\u4e9b\u5957\u4ef6\u76f8\u4f9d\u7684\u89c0\u5ff5\u3002"),(0,p.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://chriskang028.wordpress.com/2017/07/05/%E5%BC%84%E6%87%82-npm-install-%E7%9A%84-dependencies-v-s-devdependencies/"},"https://chriskang028.wordpress.com/2017/07/05/%E5%BC%84%E6%87%82-npm-install-%E7%9A%84-dependencies-v-s-devdependencies/")))}u.isMDXComponent=!0}}]);
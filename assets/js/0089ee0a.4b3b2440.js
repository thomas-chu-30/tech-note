"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[4247],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(n),k=o,d=s["".concat(i,".").concat(k)]||s[k]||u[k]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5925:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),l=["components"],c={},i="Docker \u5e38\u7528 command line",p={unversionedId:"Docker/command-line",id:"Docker/command-line",title:"Docker \u5e38\u7528 command line",description:"Docker ps \u547d\u4ee4",source:"@site/docs/Docker/command-line.md",sourceDirName:"Docker",slug:"/Docker/command-line",permalink:"/tech-note/docs/Docker/command-line",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/Docker/command-line.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RESTful API-\u8a2d\u8a08\u898f\u7bc4",permalink:"/tech-note/docs/Https/RESTful API"},next:{title:"**Get DOM Element**",permalink:"/tech-note/docs/JavaScript/Get DOM Element"}},m=[{value:"Docker ps \u547d\u4ee4",id:"docker-ps-\u547d\u4ee4",children:[{value:"\u5be6\u4f8b",id:"\u5be6\u4f8b",children:[],level:3}],level:2}],u={toc:m};function s(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-\u5e38\u7528-command-line"},"Docker \u5e38\u7528 command line"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker images # \u67e5\u770b\u672c\u6a5f\u6240\u6709 images\ndocker ps -a # \u5217\u51fa\u6240\u6709\u5bb9\u5668\n\n")),(0,a.kt)("h2",{id:"docker-ps-\u547d\u4ee4"},"Docker ps \u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker ps [option] # \u5217\u51fa\u6240\u6709\u5bb9\u5668\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# option \n-a \uff1a\u986f\u793a\u6240\u6709\u7684\u5bb9\u5668\uff0c\u5305\u62ec\u672a\u904b\u884c\u7684\u3002\n-f \uff1a\u6839\u64da\u689d\u4ef6\u904e\u6ffe\u986f\u793a\u7684\u5167\u5bb9\u3002\n--format : \u6307\u5b9a\u8fd4\u56de\u503c\u7684\u6a21\u677f\u6587\u4ef6\u3002\n-l : \u986f\u793a\u6700\u8fd1\u5275\u5efa\u7684\u5bb9\u5668\u3002\n-n \u76ee\u9304\uff1a\u6700\u8fd1\u5275\u5efa\u7684n\u500b\u76ee\u9304\u3002\n--no-trunc :\u4e0d\u622a\u65b7\u8f38\u51fa\u3002\n-q \uff1a\u975c\u9ed8\u6a21\u5f0f\uff0c\u53ea\u986f\u793a\u5bb9\u5668\u7de8\u865f\u3002\n-s :\u986f\u793a\u7e3d\u7684\u6587\u4ef6\u5927\u5c0f\u3002\n")),(0,a.kt)("h3",{id:"\u5be6\u4f8b"},"\u5be6\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'runoob@runoob:~$ docker ps\nCONTAINER ID   IMAGE          COMMAND                ...  PORTS                    NAMES\n09b93464c2f7   nginx:latest   "nginx -g \'daemon off" ...  80/tcp, 443/tcp          myrunoob\n96f7f14e99ab   mysql:5.6      "docker-entrypoint.sh" ...  0.0.0.0:3306->3306/tcp   mymysql\n')),(0,a.kt)("p",null,"\u8f38\u51fa\u8a73\u60c5\u4ecb\u7d39\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"CONTAINER ID"),"\uff1a\u5bb9\u5668ID\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"IMAGE"),": \u4f7f\u7528\u7684\u93e1\u50cf\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"COMMAND"),"\uff1a\u555f\u52d5\u5bb9\u5668\u6642\u904b\u884c\u7684\u547d\u4ee4\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"CREATED"),": \u5bb9\u5668\u7684\u5275\u5efa\u6642\u9593\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"STATUS"),"\uff1a\u5bb9\u5668\u72c0\u614b\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u72c0\u614b\u67097\u7a2e\uff1a",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5275\u5efa\uff08\u5df2\u5275\u5efa\uff09"),(0,a.kt)("li",{parentName:"ol"},"restarting\uff08\u91cd\u555f\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u904b\u884c\uff08\u904b\u884c\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u79fb\u9664\uff08\u9077\u79fb\u4e2d\uff09"),(0,a.kt)("li",{parentName:"ol"},"paused\uff08\u66ab\u505c\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u9000\u51fa\uff08\u505c\u6b62\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6b7b\u4ea1\uff08\u6b7b\u4ea1\uff09"))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"PORTS"),"\uff1a\u5bb9\u5668\u7684\u7aef\u53e3\u4fe1\u606f\u548c\u4f7f\u7528\u7684\u9023\u63a5\u985e\u578b\uff08tcp\\udp\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"NAMES"),"\uff1a\u81ea\u52d5\u5206\u914d\u7684\u5305\u542b\u540d\u7a31\u3002")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.runoob.com/docker/docker-ps-command.html"},"\u53c3\u8003\u6587\u7ae0")))}s.isMDXComponent=!0}}]);
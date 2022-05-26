"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[6246],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return b}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(t),b=o,f=m["".concat(i,".").concat(b)]||m[b]||p[b]||a;return t?n.createElement(f,l(l({ref:r},u),{},{components:t})):n.createElement(f,l({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7748:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],c={},i="Homebrew",s={unversionedId:"Tool/Homwbrew",id:"Tool/Homwbrew",title:"Homebrew",description:"\u5b89\u88dd",source:"@site/docs/Tool/Homwbrew.md",sourceDirName:"Tool",slug:"/Tool/Homwbrew",permalink:"/tech-note/docs/Tool/Homwbrew",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/Tool/Homwbrew.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/tech-note/docs/Tool/Git"},next:{title:"VsCode Tool",permalink:"/tech-note/docs/Tool/VsCode"}},u=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",children:[],level:2},{value:"\u900f\u904e services \u555f\u52d5\u8cc7\u6599\u5eab\u7b49\u670d\u52d9",id:"\u900f\u904e-services-\u555f\u52d5\u8cc7\u6599\u5eab\u7b49\u670d\u52d9",children:[],level:2}],p={toc:u};function m(e){var r=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"homebrew"},"Homebrew"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88dd\u5957\u4ef6\nbrew search <formula>        # \u5c0b\u627e\u6709\u7121\u67d0\u5957\u4ef6\nbrew install <formula>         # \u5b89\u88dd\u5957\u4ef6\nbrew uninstall <formula>       # \u79fb\u9664\u5957\u4ef6\n\n# update local packages\nbrew outdated                      # find out what is outdated\nbrew update                        # \u66f4\u65b0 brew \u672c\u8eab\u548c formula\nbrew upgrade                       # \u66f4\u65b0 brew \u5167\u7684\u6240\u6709\u5957\u4ef6\nbrew upgrade <formula>             # \u66f4\u65b0 brew \u5167\u7684\u7279\u5b9a\u5957\u4ef6\n\n# \u79fb\u9664\u820a\u7248\u672c\uff08Homebrew \u9810\u8a2d\u4e0d\u6703\u81ea\u52d5\u79fb\u9664\u820a\u7248\u672c\uff09\nbrew cleanup <formula>            # remove everything or specific formula of old versions\nbrew cleanup -n                   # see what would be cleaned up\n\n# brew tap\uff1a\u9069\u7528\u65bc\u5b89\u88dd\u4e0d\u5728 homebrew \u7684\u7b2c\u4e09\u65b9\u5957\u4ef6\uff08\u6703\u589e\u52a0 homebrew \u7684 formulae\uff09\nbrew tap                      # list tapped repositories\nbrew tap <tap-name>           # add tap\nbrew untap <tap-name>         # remove a tap\n\n# services\nbrew tap homebrew/services\nbrew services\nbrew services list                          # \u770b\u6709\u54ea\u4e9b\u670d\u52d9\nbrew services start [service_name]          # \u958b\u555f\u67d0\u500b\u670d\u52d9\n")),(0,a.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,a.kt)("h2",{id:"\u900f\u904e-services-\u555f\u52d5\u8cc7\u6599\u5eab\u7b49\u670d\u52d9"},"\u900f\u904e services \u555f\u52d5\u8cc7\u6599\u5eab\u7b49\u670d\u52d9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"brew install mysql\nbrew services start mysql\n")))}m.isMDXComponent=!0}}]);
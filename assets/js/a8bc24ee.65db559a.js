"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[6868],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return g}});var r=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},l=Object.keys(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(r=0;r<l.length;r++)t=l[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),c=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=c(n.components);return r.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,l=n.originalType,s=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),m=c(t),g=a,k=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return t?r.createElement(k,o(o({ref:e},p),{},{components:t})):r.createElement(k,o({ref:e},p))}));function g(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i.mdxType="string"==typeof n?n:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7580:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),o=["components"],i={},s="\u8d77\u624b\u5f0f",c={unversionedId:"Nginx/\u8d77\u624b\u5f0f",id:"Nginx/\u8d77\u624b\u5f0f",title:"\u8d77\u624b\u5f0f",description:"\u8981\u4e86\u89e3 nginx \u5c31\u8981\u5148\u4e86\u89e3\uff0cmac os \u7cfb\u7d71\u76ee\u9304\u7d50\u69cb\u662f\u4ec0\u9ebc",source:"@site/docs/Nginx/\u8d77\u624b\u5f0f.md",sourceDirName:"Nginx",slug:"/Nginx/\u8d77\u624b\u5f0f",permalink:"/tech-note/docs/Nginx/\u8d77\u624b\u5f0f",editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/Nginx/\u8d77\u624b\u5f0f.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5149\u7bc0\u7d04\u6642\u9593",permalink:"/tech-note/docs/JavaScript/\u65e5\u5149\u7bc0\u7d04\u6642\u9593"},next:{title:"\u5efa\u7acb express \u5c08\u6848\u8d77\u624b\u5f0f",permalink:"/tech-note/docs/Node/express"}},p=[{value:"<strong>Mac OS \u7cfb\u7d71\u76ee\u9304\u4ecb\u7d39</strong>",id:"mac-os-\u7cfb\u7d71\u76ee\u9304\u4ecb\u7d39",children:[],level:2},{value:"\u5b89\u88dd Nginx",id:"\u5b89\u88dd-nginx",children:[],level:2},{value:"Location \u914d\u7f6e",id:"location-\u914d\u7f6e",children:[{value:"\u7db2\u5740\u914d\u7f6e",id:"\u7db2\u5740\u914d\u7f6e",children:[],level:3}],level:2},{value:"\u67e5\u770b\u4f60\u7684 log \u7d00\u9304",id:"\u67e5\u770b\u4f60\u7684-log-\u7d00\u9304",children:[],level:2}],u={toc:p};function m(n){var e=n.components,t=(0,a.Z)(n,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u8d77\u624b\u5f0f"},"\u8d77\u624b\u5f0f"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8981\u4e86\u89e3 nginx \u5c31\u8981\u5148\u4e86\u89e3\uff0cmac os \u7cfb\u7d71\u76ee\u9304\u7d50\u69cb\u662f\u4ec0\u9ebc")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5e38\u7528\u6307\u4ee4\u5927\u5168"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u7528 brew \u958b\u95dc nginx server\n$ brew services [start | stop | restart] nginx \n\n# \u78ba\u8a8d\u4e00\u4e0b services \u958b\u59cb\u7684 status \n$ brew services list \n")))),(0,l.kt)("h2",{id:"mac-os-\u7cfb\u7d71\u76ee\u9304\u4ecb\u7d39"},(0,l.kt)("strong",{parentName:"h2"},"Mac OS \u7cfb\u7d71\u76ee\u9304\u4ecb\u7d39")),(0,l.kt)("p",null,"max os \u5c6c\u65bc\u985eunix\u7684\u7cfb\u7d71\uff0c\u6240\u4ee5\u4ed6\u6703\u6709\u4e00\u4e9bunix\u7cfb\u7d71\u7684\u76ee\u9304\u98a8\u683c\u3002"),(0,l.kt)("p",null,"\u7db2\u4e0a\u5c0d\u985eunix\u7cfb\u7d71\u7684\u4e00\u4e9b\u89e3\u91cb"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u985eUnix\u7cfb\u7d71\uff08\u82f1\u6587\uff1aUnix-like\uff09\u662f\u6307\u7e7c\u627fUNIX\u7684\u8a2d\u8a08\u98a8\u683c\u6f14\u8b8a\u51fa\u4f86\u7684\u7cfb\u7d71\uff08\u6bd4\u5982GNU/Linux\u3001FreeBSD\u3001OpenBSD\u3001SUN\u516c\u53f8\u7684Solaris\u3001Minix\u3001QNX\u7b49\uff09\uff0c\u9019\u4e9b\u4f5c\u696d\u7cfb\u7d71\u96d6\u7136\u6709\u7684\u662f\u81ea\u7531\u8edf\u9ad4\uff0c\u6709\u7684\u662f\u5546\u696d\u8edf\u9ad4\uff0c\u4f46\u90fd\u76f8\u7576\u7a0b\u5ea6\u5730\u7e7c\u627f\u4e86\u539f\u59cbUNIX\u7684\u7279\u6027\uff0c\u6709\u8a31\u591a\u76f8\u4f3c\u8655\uff0c\u4e26\u4e14\u90fd\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u9075\u5b88POSIX\u898f\u7bc4\uff0c\u4f46\u662f\u5b83\u5011\u537b\u4e26\u4e0d\u542b\u6709UNIX\u7684\u539f\u59cb\u78bc\u3002\u76ee\u524dUNIX\u7684\u539f\u59cb\u78bc\u70baSCO\u516c\u53f8\u6240\u6709\uff0c\u5c6c\u65bc\u5546\u696d\u8edf\u9ad4\uff0cUNIX\u7684\u5546\u6a19\u6b0a\u548cUNIX\u6a19\u6e96\u8a8d\u5b9a\u5c6c\u65bcOPENGROUP\u6240\u6709\u3002\u7531\u65bcUNIX\u6a19\u6e96\u8a8d\u5b9a\u50f9\u683c\u6602\u8cb4\uff0c\u6240\u4ee5\u76ee\u524d\u552f\u4e00\u7372\u5f97UNIX\u6a19\u6e96\u8a8d\u5b9a\u7684\u70ba\u860b\u679c\u7684MACOS\u7cfb\u7d71\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ee5\u4e0b\u76ee\u9304\u70ba\u985eunix\u7cfb\u7d71\u7684\u901a\u7528\u76ee\u9304")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"/bin\n#bin\u662fbinary\u7684\u7c21\u5beb\uff0c\u4e3b\u8981\u662f\u4e00\u4e9b\u7cfb\u7d71\u5fc5\u5099\u7684\u5de5\u5177\u6bd4\u5982\uff0ccp,ls,mv,rm,sh\u7b49\n#\u82f1\u6587\u89e3\u91cb\uff1acommands in this dir are all system installed user commands\n\n/sbin\n#sbin\u662f\u7ba1\u7406\u54e1\u7528\u65bc\u7ba1\u7406\u7cfb\u7d71\u7684\u4e00\u4e9b\u5fc5\u5099\u547d\u4ee4\uff0c\u6bd4\u5982\u5e38\u7528\u7684\uff0cifconfig,mount,reboot,shutdown\u7b49\n#\u82f1\u6587\u89e3\u91cb\uff1acommands in this dir are all system installed super user commands\n\n/usr\n#\u76ee\u9304\u4e0b\u9762\u7684\u57fa\u672c\u90fd\u662f\u7cfb\u7d71\u81ea\u5e36\u7b2c\u4e09\u65b9\u548c\u7528\u6236\u5b89\u88dd\u7684\u7b2c\u4e09\u65b9\u8edf\u9ad4\u7684\u5b89\u88dd\u76ee\u9304\n\n/usr/bin\n#\u7528\u6236\u548c\u7ba1\u7406\u54e1\u90fd\u9700\u8981\u7528\u5230\u7684\u4e00\u4e9b\u7b2c\u4e09\u65b9\u8edf\u9ad4\n\n/usr/sbin\n#\u7ba1\u7406\u54e1\u53ef\u4ee5\u7528\u5230\u7684\u4e00\u4e9b\u7b2c\u4e09\u65b9\u7684\u8edf\u9ad4\n\n/usr/local/\n#\u7528\u6236\u81ea\u5df1\u5b89\u88dd\u7684\u4e00\u4e9b\u7b2c\u4e09\u65b9\u8edf\u9ad4\u6240\u5728\u4f4d\u7f6e\n\n/usr/local/bin\n#\u6b64\u76ee\u9304\u4e0b\u4e00\u822c\u90fd\u662f\u7528\u6236\u81ea\u5df1\u5b89\u88dd\u7684\u4e00\u4e9b\u8edf\u9ad4\u7684\u4e8c\u9032\u4f4d\u6587\u4ef6\u5165\u53e3\uff0c\u6bd4\u5982\u4e0a\u4e00\u7bc7\u6587\u7ae0\u4e2d\u63d0\u5230\u7684\u7528homebrew\u5b89\u88dd\u7684nginx,\u4ed6\u7684\u57f7\u884c\u6587\u4ef6\u8edf\u9023\u5c31\u5728\u6b64\u76ee\u9304\uff0c\u4f8b\u5982\uff1anginx@ -> ../Cellar/nginx/1.15.8/bin/nginx\u3002\u53ef\u4ee5\u770b\u5230\u4ed6\u5c31\u662f\u57f7\u884chomebrew\u5b89\u88dd\u7684\u8edf\u9ad4\u4f4d\u7f6e\u3002\u653e\u5728\u9019\u88e1\u7684\u539f\u56e0\u4e3b\u8981\u662f\u5728\u7cfb\u7d71\u8b8a\u91cf\u88e1\u9762 echo $PATH \u5df2\u7d93\u914d\u7f6e/usr/local/bin \u76ee\u9304\uff0c\u8edf\u9ad4\u8edf\u9023\u5230\u6b64\u76ee\u9304\u5f8c\uff0c\u547d\u4ee4\u884c\u4e0a\u76f4\u63a5\u8f38\u5165\u547d\u4ee4\u5c31\u80fd\u57f7\u884c\u4e86\u3002\u65b9\u4fbf\u8edf\u9ad4\u7684\u7ba1\u7406\n\n/usr/local/etc\n#\u4e00\u4e9b\u7b2c\u4e09\u65b9\u8edf\u9ad4\u7684\u914d\u7f6e\u4fe1\u606f\uff0c\u6bd4\u5982\u4e4b\u524d\u8aaa\u7684nginx\uff0c\u5c31\u5728\u6b64\u76ee\u9304\uff1a/usr/local/etc/nginx\n\n/etc\n## \u7528\u65bc\u5b58\u653e\u7cfb\u7d71\u914d\u7f6e\u6587\u4ef6\u7684\u5730\u65b9\uff0c\u5982\u7528\u6236\u5bc6\u78bc\u6587\u4ef6/etc/passwd\uff0c\u76ee\u9304\u6307\u5411\u7684\u5be6\u969b\u76ee\u9304\u662f\uff1a/private/etc\n\n/tmp\n#\u81e8\u6642\u6587\u4ef6\u5b58\u653e\u76ee\u9304\uff0c\u5176\u6b0a\u9650\u70ba\u6240\u6709\u4eba\u4efb\u610f\u8b80\u5beb\u3002\u76ee\u9304\u6307\u5411\u7684\u5be6\u969b\u76ee\u9304\u662f /private/tmp\n\n/var\n#\u5b58\u653e\u7d93\u5e38\u8b8a\u5316\u7684\u6587\u4ef6\uff0c\u5982\u65e5\u8a8c\u6587\u4ef6\uff0c\u76ee\u9304\u6307\u5411\u7684\u5be6\u969b\u76ee\u9304\u662f /private/var\n\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e0b\u9762\u662fmac os \u7368\u6709\u7684\u4e00\u4e9b\u76ee\u9304")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"/Applications\n#\u57fa\u672c\u4e00\u4e9bgui\u61c9\u7528\u7a0b\u5f0f\u90fd\u5728\u6b64\u76ee\u9304\n\n/Users\n#\u7528\u6236\u76ee\u9304\uff0c\u5b58\u653e\u7528\u6236\u7684\u4e00\u4e9b\u6587\u6a94\uff0c\u8cc7\u6599\u4fe1\u606f\n\n/System\n#\u53ea\u5305\u542b\u4e00\u500b\u540d\u70baLibrary\u7684\u76ee\u9304\uff0c\u9019\u500b\u5b50\u76ee\u9304\u4e2d\u5b58\u653e\u4e86\u7cfb\u7d71\u7684\u7d55\u5927\u90e8\u5206\u7d44\u4ef6\uff0c\u5982\u5404\u7a2eframework\uff0c\u4ee5\u53ca\u5167\u6838\u6a21\u584a\uff0c\u5b57\u9ad4\u6587\u4ef6\u7b49\u7b49\u3002\n\n/Library\n#\u7cfb\u7d71\u7684\u6578\u64da\u6587\u4ef6\u3001\u5e6b\u52a9\u6587\u4ef6\u3001\u6587\u6a94\u7b49\u7b49\n")),(0,l.kt)("p",null,"\u539f\u6587\u7db2\u5740\uff1a"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://kknews.cc/code/8gg8zje.html"},"https://kknews.cc/code/8gg8zje.html")),(0,l.kt)("h2",{id:"\u5b89\u88dd-nginx"},"\u5b89\u88dd Nginx"),(0,l.kt)("p",null,"\u5728 Mac \u88e1\u53ea\u8981\u9019\u6a23\u4e0b\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install nginx\n")),(0,l.kt)("p",null,"\u7136\u5f8c\u518d\u4e0b\u500b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ nginx # \u6253\u958b nginx server\n$ brew services [start | stop | restart] nginx # \u7528 brew \u958b\u95dc nginx server \n")),(0,l.kt)("p",null,"\u670d\u52d9\u5c31\u8dd1\u8d77\u4f86\u4e86\uff0c\u6253\u958b\u700f\u89bd\u5668\xa0",(0,l.kt)("a",{parentName:"p",href:"http://localhost:8080/"},"http://localhost:8080/")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/2140/1*lzxbXJ51TZHvZkNYvgojiQ.png",alt:"https://miro.medium.com/max/2140/1*lzxbXJ51TZHvZkNYvgojiQ.png"})),(0,l.kt)("p",null,"mac \u7528 brew \u88dd\u7684\u8a71\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/nginx/nginx.conf")," \u9019\u908a\u53ef\u4ee5\u8a2d\u5b9a nginx \u7684\u4e00\u4e9b\u74b0\u5883\u3002"),(0,l.kt)("p",null,"\u6253\u958b\u8a2d\u5b9a\u6a94\uff0c\u4fee\u6539\xa0",(0,l.kt)("strong",{parentName:"p"},"root"),"\xa0\uff08\u7db2\u9801\u7f6e\u653e\u76ee\u9304\uff09\uff0c\u5c31\u53ef\u4ee5\u628a\u7db2\u9801\u653e\u5728\u4f60\u60f3\u653e\u7684\u5730\u65b9\u56c9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"server {\n    listen 80;\n    server_name localhost; #access_log logs/host.access.log main;\n    \n    \n    location / {\n        root /Users/ben/www; # \u5728\u9019\u500b\u6a94\u6848\u4f4d\u7f6e\u6293\u6a94\u6848\n        index index.html index.htm; # \u6703\u53bb\u6253\u7684\u6a94\u6848\u540d\u7a31\n    }\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://iter01.com/521092.html"},"Mac \u5b89\u88dd Nginx")),(0,l.kt)("h2",{id:"location-\u914d\u7f6e"},"Location \u914d\u7f6e"),(0,l.kt)("h3",{id:"\u7db2\u5740\u914d\u7f6e"},"\u7db2\u5740\u914d\u7f6e"),(0,l.kt)("p",null,"\u52d5\u614b\u8def\u7531\u6307\u5b9a\u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ ^/(?<para1>.*)/solution-detail/(?<solutionID>.*)/(?<para2>.*) {\n    proxy_pass http://ssr_server/$para1/solution-detail/$solutionID/$para2;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://segmentfault.com/a/1190000022173920"},"nginx location\u914d\u7f6e")),(0,l.kt)("h2",{id:"\u67e5\u770b\u4f60\u7684-log-\u7d00\u9304"},"\u67e5\u770b\u4f60\u7684 log \u7d00\u9304"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com/starbugs/web-server-nginx-2-bc41c6268646"},"Web Server & Nginx\u200a-\u200a(2)")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/wiki/start/topics/examples/full/"},"Full Example Configuration")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.notion.so/upstream-995b8e4f09964bd8ad9416dd0abc1c33"},"upstream")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Nginx \u76f8\u95dc\u6307\u4ee4")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"- # \u555f\u52d5 nginx\u670d\u52d9\n    - sudo nginx\n- # \u91cd\u65b0\u8f09\u5165\u914d\u7f6e|\u91cd\u555f|\u505c\u6b62|\u9000\u51fa nginx\n    - nginx -s reload | reopen | stop | quit\n- # \u6e2c\u8a66\u914d\u7f6e\u662f\u5426\u6709\u8a9e\u6cd5\u932f\u8aa4\n    - nginx -t\n- # \u67e5\u770b nginx \u76f8\u95dc\u8a2d\u7f6e\n    - brew info nginx\n- # \u67e5\u770b nginx \u8a2d\u5b9a\n    - nginx -V\n")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("a",{parentName:"p",href:"https://dotblogs.com.tw/hochile/2020/03/31/153446"},"\u6c99\u9dd7\u5de5\u4f5c\u5ba4"),"\n")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8a2d\u5b9a tdc nginx log \u8def\u5f91"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-\uff12\uff11\uff12\uff13"},"access_log  /usr/local/var/log/nginx/tdc.access.log  main;\nerror_log   /usr/local/var/log/nginx/tdc.error.log;\n")))))}m.isMDXComponent=!0}}]);
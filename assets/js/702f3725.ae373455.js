"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[6088],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,k=m["".concat(s,".").concat(u)]||m[u]||g[u]||r;return n?l.createElement(k,i(i({ref:t},p),{},{components:n})):l.createElement(k,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7601:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return g}});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],o={},s="Git",c={unversionedId:"tool/Git",id:"tool/Git",title:"Git",description:"Git \u53ef\u4ee5\u8aaa\u662f\u6bd4\u5beb code \u9084\u8981\u91cd\u8981\u7684\u6771\u897f\uff0c\u73fe\u5728\u7684\u5c08\u6848\u57fa\u672c\u4e0a\u90fd\u8981\u5171\u540c\u5354\u4f5c\uff0c\u6240\u4ee5\u5982\u4f55\u907f\u514d\u885d\u7a81\uff0c\u4e0d\u5728\u958b\u767c\u7684\u6642\u5019\u767c\u751f\u707d\u96e3\uff0c\u53ef\u4ee5\u8aaa\u662f\u975e\u5e38\u7684\u91cd\u8981\uff0c\u5beb code \u5beb\u4e0d\u597d\u53ef\u4ee5\u554f\u4eba\uff0c\u4f46 Git \u4e0d\u884c\u7684\u8a71\u53ef\u80fd\u9023\u5de5\u4f5c\u90fd\u6c92\u6709\u8fa6\u6cd5\u4e00\u8d77 co-work \u3002\u53e6\u5916\u5982\u679c\u5c0d vim \u9084\u6c92\u6709\u5f88\u719f\u7684\u8a71\u5efa\u8b70\u53bb\u591a\u4e86\u89e3\u4e00\u4e0b vim \u7684\u7de8\u8f2f\u3001\u5132\u5b58\u3001\u67e5\u5c0b\u65b9\u5f0f\uff0c\u5c0d\u4f60\u5728\u4f7f\u7528 git \u4e0a\u6703\u66f4\u52a0\u7684\u5f97\u5fc3\u61c9\u624b\u3002 # Git \u5e38\u7528commend line",source:"@site/docs/tool/Git.md",sourceDirName:"tool",slug:"/tool/Git",permalink:"/tech-note/docs/tool/Git",draft:!1,editUrl:"https://github.com/thomas-chu-30/tech-note/tree/master/docs/tool/Git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CSRF tool",permalink:"/tech-note/docs/tool/CSRF tool"},next:{title:"Homebrew",permalink:"/tech-note/docs/tool/Homwbrew"}},p={},g=[{value:"git \u8d77\u624b\u5f0f",id:"git-\u8d77\u624b\u5f0f",level:2},{value:"clone \u5c08\u6848",id:"clone-\u5c08\u6848",level:2},{value:"\u52a0\u5165 remote",id:"\u52a0\u5165-remote",level:2},{value:"\u5207\u63db\u9060\u7aef\u5206\u652f",id:"\u5207\u63db\u9060\u7aef\u5206\u652f",level:2},{value:"\u52a0\u5165\u66ab\u5b58\u5340",id:"\u52a0\u5165\u66ab\u5b58\u5340",level:2},{value:"\u52a0\u5165\u672c\u5730\u5132\u5b58\u5340",id:"\u52a0\u5165\u672c\u5730\u5132\u5b58\u5340",level:2},{value:"stash",id:"stash",level:2},{value:"\u5408\u4f75\u5206\u4e4b",id:"\u5408\u4f75\u5206\u4e4b",level:2},{value:"merge",id:"merge",level:3},{value:"rebase",id:"rebase",level:3},{value:"\u522a\u9664 branch",id:"\u522a\u9664-branch",level:2},{value:"\u91cd\u65b0 rename",id:"\u91cd\u65b0-rename",level:2},{value:"\u9060\u7aef\u6578\u64da\u5eab",id:"\u9060\u7aef\u6578\u64da\u5eab",level:2},{value:"fetch",id:"fetch",level:3},{value:"pull",id:"pull",level:3},{value:"push",id:"push",level:3},{value:"tag",id:"tag",level:2},{value:"Git Bisect",id:"git-bisect",level:2},{value:"fork \u5c08\u6848",id:"fork-\u5c08\u6848",level:2},{value:"Git alais",id:"git-alais",level:2},{value:"\u6aa2\u67e5 git",id:"\u6aa2\u67e5-git",level:2},{value:"Other",id:"other",level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",level:2}],m={toc:g};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"git"},"Git"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Git \u53ef\u4ee5\u8aaa\u662f\u6bd4\u5beb code \u9084\u8981\u91cd\u8981\u7684\u6771\u897f\uff0c\u73fe\u5728\u7684\u5c08\u6848\u57fa\u672c\u4e0a\u90fd\u8981\u5171\u540c\u5354\u4f5c\uff0c\u6240\u4ee5\u5982\u4f55\u907f\u514d\u885d\u7a81\uff0c\u4e0d\u5728\u958b\u767c\u7684\u6642\u5019\u767c\u751f\u707d\u96e3\uff0c\u53ef\u4ee5\u8aaa\u662f\u975e\u5e38\u7684\u91cd\u8981\uff0c\u5beb code \u5beb\u4e0d\u597d\u53ef\u4ee5\u554f\u4eba\uff0c\u4f46 Git \u4e0d\u884c\u7684\u8a71\u53ef\u80fd\u9023\u5de5\u4f5c\u90fd\u6c92\u6709\u8fa6\u6cd5\u4e00\u8d77 co-work \u3002\u53e6\u5916\u5982\u679c\u5c0d vim \u9084\u6c92\u6709\u5f88\u719f\u7684\u8a71\u5efa\u8b70\u53bb\u591a\u4e86\u89e3\u4e00\u4e0b vim \u7684\u7de8\u8f2f\u3001\u5132\u5b58\u3001\u67e5\u5c0b\u65b9\u5f0f\uff0c\u5c0d\u4f60\u5728\u4f7f\u7528 git \u4e0a\u6703\u66f4\u52a0\u7684\u5f97\u5fc3\u61c9\u624b\u3002 # Git \u5e38\u7528commend line")),(0,r.kt)("h2",{id:"git-\u8d77\u624b\u5f0f"},"git \u8d77\u624b\u5f0f"),(0,r.kt)("p",null,"\u5728\u5c08\u6848\u4f4d\u7f6e\u4e0b\u521d\u4f7f\u5316 git \uff0c\u8868\u793a\u53ef\u958b\u59cb\u7528 git \u4f86\u7ba1\u7406\u4f60\u7684\u5c08\u6848\uff0c\u6b64\u6642\u5c08\u6848\u4e2d\u6703\u51fa\u73fe\u4e00\u500b\u96b1\u85cf\u8cc7\u6599\u593e ",(0,r.kt)("inlineCode",{parentName:"p"},".git")," \uff0c\u7136\u800c\u4f60\u5728\u958b\u767c\u7684\u904e\u7a0b\u4e2d\u4e5f\u4e00\u5b9a\u6703\u6709\u4f60\u4e0d\u60f3\u8981\u63a8\u5230 remote \u7684\u6771\u897f\uff0c\u9019\u500b\u6642\u5019\u4f60\u53ef\u4ee5\u5efa\u7acb\u4e00\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore")," \u7684\u6a94\u6848\uff0c\u5728\u88e1\u9762\u7de8\u5beb\u4f60\u4e0d\u60f3\u8981\u4e0a\u50b3\u7684\u6587\u4ef6 or \u8cc7\u6599\u593e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git init\n# .gitignore \u6a94\u6848\nnode_modules # \u8cc7\u6599\u593e\u4e0d\u63a8\u4e0a git\n/dist\n.env # \u6a94\u6848\u4e0d\u63a8\u4e0a git\n")),(0,r.kt)("p",null,"\u5728\u4f86\u4f60\u9700\u8981\u5c0d\u5c08\u6848\u8aaa\uff0c\u4f60\u662f\u8ab0\uff0c\u6240\u4ee5\u628a\u4f60\u7684 email \u548c\u540d\u7a31\u548c git \u8aaa\uff0c\u56e0\u6b64\u5728 git.config \u88e1\u9762\u5efa\u7acb\u8cc7\u8a0a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," # \u67e5\u770b\u4f60\u76ee\u524d\u7684 config \u6e05\u55ae\ngit config --list\n\n# \u5efa\u7acb\u540d\u7a31\ngit config --global user.name [YOUR_NAME]\n\n# \u5efa\u7acb email\ngit config --global user.email [YOUT_EMAIL]\n")),(0,r.kt)("h2",{id:"clone-\u5c08\u6848"},"clone \u5c08\u6848"),(0,r.kt)("p",null,"\u958b\u767c\u5176\u5b83\u7684\u5c08\u6848\uff0c\u900f\u904e clone \u7684\u65b9\u5f0f\uff0c\u628a .git \u7684\u6a94\u6848\u4e00\u8d77\u6293\u4e0b\u4f86"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone [YOUR_PROJECT]\n")),(0,r.kt)("h2",{id:"\u52a0\u5165-remote"},"\u52a0\u5165 remote"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u8a62remote\u76f8\u95dc\u6307\u4ee4\ngit remote -h\n\n# \u5c07\u9060\u7aef\u6578\u64da\u5eab\u7684\u540d\u7a31\u5f9e <old> \u6539\u70ba <new>\ngit remote rename `<old>` `<new>`\n\n# \u5728 <newurl> \u5167\u6307\u5b9a\u9060\u7aef\u6578\u64da\u5eab\u7684\u65b0\u5730\u5740\ngit remote set-url `<name>` `<newurl>`\n\n# \u52a0\u5165 remote \u8cc7\u6599\ngit remote add origin [YOUR_PROJECT]\n\n# \u79fb\u9664 remote \u8cc7\u6599\ngit remote remove origin\n")),(0,r.kt)("h2",{id:"\u5207\u63db\u9060\u7aef\u5206\u652f"},"\u5207\u63db\u9060\u7aef\u5206\u652f"),(0,r.kt)("p",null,"\u9996\u5148\u4f60\u61c9\u8a72\u4e0d\u6703\u77e5\u9053\u5c08\u6848\u4e2d\u6240\u6709\u7684 br \u53eb\u4ec0\u9ebc\u540d\u7a31\uff0c\u6240\u4ee5\u53ef\u900f\u904e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u6240\u6709 local \u9060\u7aef br\ngit branch -a\n")),(0,r.kt)("p",null,"\u5728\u78ba\u8a8d\u5b8c\u4e4b\u5f8c\uff0c\u5728\u56de\u5230\u5c08\u6848\u7684\u4f4d\u7f6e\u4e0a\uff0c\u9032\u884c\u5207\u63db\u5206\u652f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout -b [BRANCH_NAME] [origin/BRANCH_NAME]\n")),(0,r.kt)("h2",{id:"\u52a0\u5165\u66ab\u5b58\u5340"},"\u52a0\u5165\u66ab\u5b58\u5340"),(0,r.kt)("p",null,"\u628a\u8cc7\u6599\u52a0\u5165\u66ab\u5b58\u5340"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," # add all file stage\ngit add .\n\n# after everyone check, add file to stage\ngit add -p\n")),(0,r.kt)("p",null,"\u53d6\u6d88\u52a0\u5165\u66ab\u5b58\u5340"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git checkout\n")),(0,r.kt)("h2",{id:"\u52a0\u5165\u672c\u5730\u5132\u5b58\u5340"},"\u52a0\u5165\u672c\u5730\u5132\u5b58\u5340"),(0,r.kt)("p",null,"\u628a\u8cc7\u6599\u52a0\u5165\u672c\u5730\u5132\u5b58\u5340\uff0c\u65b9\u6cd5\u5176\u5be6\u6709\u5f88\u591a\u7a2e\uff0c\u4f46\u4e3b\u8981\u5c31\u662f\u8981\u628a\u4f60\u7684\u8cc7\u6599\u5beb\u5230 git \u88e1\u9762\uff0c\u5982\u679c\u4f60\u6240\u8981\u5beb\u7684\u6771\u5f88\u591a\u7684\u8a71\uff0c\u5efa\u8b70\u4f60\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"vim")," \u7684\u65b9\u5f0f\u53bb\u4f5c\u7de8\u8f2f\u6b50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git commit # \u6703\u76f4\u63a5\u9032\u5230 vim IDE \u4e2d\ngit commit -m 'msg content'\n")),(0,r.kt)("p",null,"\u9000\u56de\u672c\u5730\u5132\u5b58\u5340"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# get commit id\ngit log\n\n# \u672c\u5730\u6578\u64da\u5eab\u4e0d\u898b\ngit reset --hard `<id>^`\n\n# \u672c\u5730\u6578\u64da\u5eab\u9084\u5728\ngit reset --soft `<id>^`\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"commit \u8a0a\u606f\u908f\u8f2f\u4ee5\u5927\u5beb\u958b\u982d\u4ee5<\u52d5\u8a5e> + <\u53d7\u8a5e> + <\u5167\u5bb9> \u7684\u6587\u6cd5\u64b0\u5beb\u5167\u5bb9\u4e0d\u5b9c\u904e\u9577\u5167\u5bb9\u9700\u8981\u64da\u6709\u4ee3\u8868\u6027")),(0,r.kt)("h2",{id:"stash"},"stash"),(0,r.kt)("p",null,"\u6703\u4f7f\u7528\u5b83\u6700\u5e38\u6709\u7684\u60c5\u5883\u662f\uff0c\u4f60\u958b\u767c\u5230\u4e00\u534a\uff0c\u4f46\u662f BOSS \u8acb\u4f60\u8d95\u5feb\u7684\u53bb\u8655\u7406\u53e6\u4e00\u4ef6\u662f\uff0c\u9019\u500b\u6642\u5019\u4f60\u4e5f\u9084\u6c92\u6709\u5230\u53ef\u4e0b commit \u7684\u6642\u5019\uff0c\u9019\u500b\u6642\u5019\uff0c\u53ef\u7528 stash \u628a\u4f60\u958b\u767c\u7684 code \u5148\u5230\u4e00\u500b\u5730\u65b9\uff0c\u4e4b\u5f8c\u53ea\u8981\u56de\u4f86\uff0c\u5728\u628a\u6771\u897f stash \u56de\u4f86\u4fbf\u53ef\u7e7c\u7e8c\u958b\u767c\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 stash \u4e4b\u524d\u5efa\u8b70\u5148\u628a\u6240\u6709\u7684 code \u653e\u5230\u66ab\u5340\uff0c\u56e0\u6709\u6642\u5019\u6211\u5011\u662f\u65b0\u5efa\u6a94\uff0c\u76f4\u63a5 stash \u7684\u8a71\u65b0\u6a94\u5c31\u6703\u88ab\u907a\u7559\u5728\uff0c\u539f\u672c\u7684 br \u4e0a\u9762git add . \u70ba\u4e86\u78ba\u4fdd\u6211\u5011\u6240\u5beb\u7684\u6771\u897f\u4e0d\u8981\u88ab\u5206\u5225\u653e\u5728\u4e0d\u540c\u7684 stash list \u88e1\u9762")),(0,r.kt)("p",null,"\u66ab\u6642\u5b58\u73fe\u72c0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git stash save 'msg ...'\n")),(0,r.kt)("p",null,"\u986f\u793a\u66ab\u5b58\u6e05\u55ae"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git stash list\n")),(0,r.kt)("p",null,"\u56de\u5fa9\u66ab\u6e05\u55ae\uff0c\u901a\u7576\u4f60\u6703\u53bb\u770b\u4e00\u4e0b\u4f60\u7684\u6e05\u55ae\u6709\u4ec0\u9ebc\uff0c\u7136\u5f8c\u78ba\u5b9a\u662f\u7b2c\u5e7e\u500b\u4e4b\u5f8c\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"stash@{0}")," \u7684\u65b9\u5f0f\u4f86\u9084\u539f\u4f60\u60f3\u7684\u7684\u66ab\u5b58\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9019\u88e1\u7684 0 \u662f\u8868\u793a\uff0c\u4f60\u6700\u4e00\u6b21 stash \u8d77\u4f86\u7684\u6771\u897f\uff0c1 \u7684\u8a71\u5c31\u662f\u5012\u6578\u7b2c\u4e8c\u6b21\u7684\u6771\u897f\uff0c\u4f9d\u6b64\u985e\u63a8")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," # \u62ff\u56de\u6700\u5f8c\u4e00\u6b21 stash \u7684 code\ngit stash pop shash@{0}\n\n# delete stash data\ngit stash pop `<shash ID>`\n\ngit stash apply `<shash ID>`\n")),(0,r.kt)("p",null,"\u522a\u9664\u66ab\u6a94"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git stash drop `<shash ID>`\ngit stash clear # clear all\n")),(0,r.kt)("h2",{id:"\u5408\u4f75\u5206\u4e4b"},"\u5408\u4f75\u5206\u4e4b"),(0,r.kt)("p",null,"\u901a\u5e38\u5728\u6709\u898f\u6a21\u7684\u5c08\u6848\u4e0b\u9762\u958b\u767c\uff0c\u6bd4\u8f03\u4e0d\u6703\u7528\u5230 merge \uff0c\u56e0\u70ba\u4e3b\u8981\u90fd\u662f\u900f\u904e lib \u53bb\u767c merge request \uff0c\u800c\u4e0d\u662f\u81ea\u5df1\u5728\u672c\u5730\uff0c\u5c31\u628a code merged \u5230\u5176\u5b83\u7684\u5206\u652f\u3002"),(0,r.kt)("h3",{id:"merge"},"merge"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git merge [BRANCH_NAME]\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f46\u662f\u6211\u5011\u5728\u62c9\u5206\u652f\u7684\u6642\u5019\uff0c\u5176\u5be6\u5c31\u662f\u5e38\u5e38\u5728\u7528 merge \u7684\u6307\u4ee4\uff0c\u53ea\u662f\u88ab\u5408\u4f75\u5728\u4e00\u8d77\u4e86\u3002")),(0,r.kt)("h3",{id:"rebase"},"rebase"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git rebase [BRANCH_NAME]\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u9019\u5169\u500b\u90fd\u662f\u628a br \u4f5c\u5408\u4e26\u7684\u6548\u679c\uff0c\u4f46\u662f rebase \u662f\u76f4\u63a5\u628a\u539f\u672c\u7684\u5206\u652f\u5408\u56de\u5230\u53e6\u4e00\u500b br \u7684\u5206\u652f\u4e0a\uff0c\u8b8a\u6210\u4e00\u500b\uff0c\u4e5f\u5c31\u662f\u8aaa\uff0c\u6709\u4e9b commit \u4f60\u53ef\u80fd\u6703\u6c92\u6709\u8fa6\u6cd5\u5728 tree \u4e0a\u9762\u76f4\u63a5\u7684\u770b\u5230\uff0c\u56e0\u70ba\u88ab\u5408\u5230\u53e6\u4e00\u500b tree \u4e0a\u9762\u4e86")),(0,r.kt)("h2",{id:"\u522a\u9664-branch"},"\u522a\u9664 branch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -d [BRANCH_NAME]\n")),(0,r.kt)("h2",{id:"\u91cd\u65b0-rename"},"\u91cd\u65b0 rename"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -m [oldname] [newname]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git branch -m [new_name]\n")),(0,r.kt)("h2",{id:"\u9060\u7aef\u6578\u64da\u5eab"},"\u9060\u7aef\u6578\u64da\u5eab"),(0,r.kt)("h3",{id:"fetch"},"fetch"),(0,r.kt)("p",null,"\u4e3b\u8981\u53ea\u57f7\u884c\u62c9 code \u7684\u52d5\u4f5c\uff0c\u4f46\u5b83\u4e0d\u6703\u628a code \u548c\u4f60\u73fe\u5728\u7684 br \u9032\u884c\u5408\u4f75\uff0c\u6240\u4ee5\u57f7\u884c\u5b8c\u5f8c\u4f60\u662f\u6703\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," \u4e0a\u9762\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u628a\u4f60\u5728\u9060\u7aef\u7684 br \u62c9\u4e0b\u4f86\ngit fetch\n")),(0,r.kt)("h3",{id:"pull"},"pull"),(0,r.kt)("p",null,"\u90a3 pull \u7684\u9019\u500b\u52d5\u4f5c\uff0c\u5c31\u662f\u6211\u5011\u628a fetch + merge \u7684\u52d5\u4f5c\u4e00\u8d77\u4f5c\u5b8c\uff0c\u628a code \u62c9\u4e0b\u4f86\uff0c\u7136\u5f8c merge \u5230\u4f60\u73fe\u5728\u7684 branch \u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# git fetch + git merge\ngit pull\n\n# \u7576\u7136\u4f60\u4e5f\u53ef\u9078\u64c7 rebase\ngit pull --rebase\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," \u5728\u958b\u767c\u904e\u7a0b\u4e2d\u5982\u679c\u4f60\u9047\u5230\u9700\u8981\u8a2d\u5b9a config \u4f60\u53ef\u80fd\u6703\u770b\u5230\u9019\u500b\u756b\u9762"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# bla... bla...\n")),(0,r.kt)("h3",{id:"push"},"push"),(0,r.kt)("p",null,"\u628a\u4f60\u6240 commit \u597d\u7684\u7684\u6a94\u6848\u5f80\u4e0a\u50b3\u5230 remote \u7aef\uff0c\u4f46\u662f\u9700\u5148\u78ba\u8a8d\u662f\u5426\u5df2\u8a2d\u5b9a\u597d origin \u7684 remote \u4f4d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin [BRANCH_NAME]\n")),(0,r.kt)("h2",{id:"tag"},"tag"),(0,r.kt)("p",null,"\u82e5\u8981\u6dfb\u52a0\u6a19\u793a\u6a19\u7c64\uff0c\u53ef\u4ee5\u5728 tag \u547d\u4ee4\u52a0\u4e0a -a \u53c3\u6578\u57f7\u884c\uff0c\u57f7\u884c\u5f8c\u6703\u555f\u52d5\u7de8\u8f2f\u5668\uff0c\u8acb\u8f38\u5165\u8981\u7d66\u4e88\u7684\u8a3b\u89e3\u3002\u4e5f\u53ef\u4ee5\u7528 -am \u53c3\u6578\u4f86\u76f4\u63a5\u6dfb\u52a0\u8a3b\u89e3\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git tag -a [TAG_NAME]\n")),(0,r.kt)("p",null,"\u5728 HEAD \u6307\u5411\u7684\u63d0\u4ea4\u88e1\u589e\u52a0\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"[TAG_NAME]")," \u7684\u6a19\u7c64\uff0c\u8acb\u57f7\u884c\u4ee5\u4e0b\u7684\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git tag -am 'msg...' [TAG_NAME]\ngit tag -n #  \u53ef\u4ee5\u986f\u793a\u51fa\u6a19\u7c64\u548c\u8a3b\u89e3\n")),(0,r.kt)("h2",{id:"git-bisect"},"Git Bisect"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5e0c\u671b\u4f60\u4e00\u8f29\u5b50\u90fd\u4e0d\u8981\u7528\u5230\u9019\u500b\u6771\u897f ~~ bisect \u662f\u900f\u904e\u4e8c\u5206\u6cd5\uff0c\u4f86\u5f97\u77e5\u90a3\u4e00\u500b commit \u51fa\u4e86\u554f\u984c\uff0c\u5982\u4e0b\u5217\u7684 gif \u8aaa\u660e")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://blog.puckwang.com/images/2021/Git-Bisect-Demo.gif",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5927\u7565\u64cd\u4f5c\u6b65\u9a5f")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u57f7\u884c\u958b\u59cb\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6a19\u8a18\u4e00\u500b\u597d\u7684 Commit \u8207\u4e00\u500b\u58de\u7684 Commit\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6a19\u8a18 Git \u81ea\u52d5\u5207\u63db\u7684 Commit \u662f\u597d\u7684\u6216\u58de\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6210\u529f\u627e\u5230\u7b2c\u4e00\u500b\u6709\u554f\u984c\u7684 Commit\u3002")),(0,r.kt)("p",null,"\u53c3\u8003\u4e0b\u5217 commend \u6293\u51fa\u932f\u8aa4\u7684 commit \u5728\u90a3\u88e1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git bisect start\ngit bisect start [BAD_COMMIT] [GOOD_COMMIT] # \u958b\u59cb\u5f8c\u5c07\u81ea\u52d5 checkout \u5230\u8981\u6aa2\u67e5\u7684 commit\n\n# \u8acb\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4\u6a19\u8a18\u6b63\u5e38 or \u932f\u8aa4\ngit bisect good # \u544a\u8a34 git \u76ee\u524d\u73fe\u5728\u662f\u597d\u7684\ngit bisect good [GOOD_COMMIT]\ngit bisect bad #\u544a\u8a34 git \u76ee\u524d\u662f\u58de\u7684\ngit bisect bad [BAD_COMMIT]\n\n# \u53ef\u642d\u914d\u5176\u5b83\u7684\u6307\u4ee4\ngit bisect [help|start|bad|good|new|old|terms|skip|next|reset|visualize|view|replay|log|run]\n\ngit bisect skip # \u8df3\u904e\u76ee\u524d\u7248\u672c\ngit bisect reset # \u505c\u6b62\u641c\u5c0b \ngit bisect reset a15fd5c # \u91cd\u7f6e a15fd5c \u6a19\u8a18 \ngit bisect log # \u67e5\u770b\u64cd\u4f5c\u8a18\u9304\ngit bisect visualize # \u8996\u89ba\u5316\u6aa2\u8996 \n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.gss.com.tw/blog/%E4%BD%BF%E7%94%A8-git-bisect-%E5%BF%AB%E9%80%9F%E6%89%BE%E5%88%B0%E7%AC%AC%E4%B8%80%E5%80%8B%E6%9C%89%E5%95%8F%E9%A1%8C%E7%9A%84-commit"},"\u53c3\u8003\u6587\u7ae0")),(0,r.kt)("h2",{id:"fork-\u5c08\u6848"},"fork \u5c08\u6848"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"github")," \u9078\u64c7 fork \uff0c\u9700\u5728\u628a\u4f60\u7684 remote \u5c08\u6848\u540d\u7a31\u4fee\u6b63\uff0c\u56e0\u70ba\u901a\u5e38 origin \u6307\u7684\u662f\u81ea\u5df1\u7684\u958b\u767c remote\u3002\u7136\u5f8c\u5728\u628a fork \u7684 repositories \u8a2d\u5b9a\u5230\u4f60\u7684 origin \u88e1\u9762\u3002"),(0,r.kt)("p",null,"\u78ba\u8a8d remote \u7684\u540d\u7a31 \u21d2 \u4fee\u6b63\u540d\u7a31 \u21d2 \u52a0\u5165\u65b0\u7684fork repositories \u21d2 \u78ba\u8a8d remote \u7684\u540d\u7a31"),(0,r.kt)("h2",{id:"git-alais"},"Git alais"),(0,r.kt)("p",null,"\u5efa\u7acb\u5c6c\u65bc\u81ea\u5df1 alais \u5728\u958b\u767c\u7684\u6642\u5019\u4e5f\u6703\u66f4\u65b9\u4fbf\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.ci commit\ngit config --global alias.st status\n\n# git co -b [BRANCH_NAME] \u5efa\u7acb\u4e00\u500b\u65b0\u7684 br\n")),(0,r.kt)("h2",{id:"\u6aa2\u67e5-git"},"\u6aa2\u67e5 git"),(0,r.kt)("p",null,"\u4e0b\u5217\u9019\u4e9b\u6307\u4ee4\u662f\u5728\u4f60\u958b\u767c\u5230\u4e00\u534a\uff0c\u60f3\u8981\u56de\u53bb\u67e5\u6771\u897f\u6642\u5f88\u7528\u7684\u6307\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," # \u770b\u4e00\u4e0b\u9084\u6709\u591a\u5c11\u6771\u897f\u6c92\u6709\u9032\u66ab\u5b58\u5340\ngit status\n\n# \u78ba\u8a8d\u9019\u500b br commit \u7684\u72c0\u6cc1\ngit log\n\n# \u78ba\u8a8d\u4e00\u4e0b\u9060\u7aef\ngit remote -v\n\n# stash \u7684\u6e05\u55ae\ngit stash list\n\n# \u53ef\u4ee5\u6aa2\u770b\u4e00\u4e0b\u6307\u4ee4\ngit remote -h\n")),(0,r.kt)("h2",{id:"other"},"Other"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clean -fd\n\u628a\u6c92\u6709\u8ffd\u5b97\u7684\u6a94\u6848 delete \n")),(0,r.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://clouding.city/git/tips/"},"Git \u74b0\u5883\u8a2d\u5b9a \u5c0f\u6280\u5de7")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zlargon.gitbooks.io/git-tutorial/content/file/move.html"},"\u642c\u79fb\u6a94\u6848")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/git-commit-message-a18a8a5cc0cb4cc48c4c49c82da4cabe"},"git commit message \u7684\u683c\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.notion.so/git-commit-message-a18a8a5cc0cb4cc48c4c49c82da4cabe"},"git commit message\u7684\u683c\u5f0f")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://zlargon.gitbooks.io/git-tutorial/content/"},"https://zlargon.gitbooks.io/git-tutorial/content/")))}u.isMDXComponent=!0}}]);
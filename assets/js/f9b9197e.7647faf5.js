"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[2862],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),a=["components"],i={},p="Decorators",c={unversionedId:"angular/decorators",id:"angular/decorators",title:"Decorators",description:"Decorators \u662f function \u639b\u6709 @\u524d\u7db4\u7b26\u865f\uff0c\u53ef\u4ee5\u7528\u65bc class\u3001paramemter\u3001method \u6216 property\u7684\u524d\u9762\u3002\u7528\u4f86\u63d0\u4f9b\u984d\u5916\u7684\u8cc7\u8a0a\u3002",source:"@site/docs/angular/decorators.md",sourceDirName:"angular",slug:"/angular/decorators",permalink:"/tech-note/docs/angular/decorators",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/angular/decorators.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Server Side Render",permalink:"/tech-note/docs/angular/SSR"},next:{title:"Directive",permalink:"/tech-note/docs/angular/directive"}},u=[{value:"HostListener",id:"hostlistener",children:[],level:2},{value:"HostBinding",id:"hostbinding",children:[],level:2},{value:"NgModule",id:"ngmodule",children:[],level:2},{value:"Input",id:"input",children:[],level:2},{value:"Output",id:"output",children:[],level:2},{value:"VeiwChild",id:"veiwchild",children:[],level:2},{value:"VeiwChildren",id:"veiwchildren",children:[],level:2},{value:"Injectable &amp; Inject",id:"injectable--inject",children:[{value:"inject \u7b2c\u4e00\u7a2e",id:"inject-\u7b2c\u4e00\u7a2e",children:[],level:3},{value:"inject \u7b2c\u4e8c\u7a2e",id:"inject-\u7b2c\u4e8c\u7a2e",children:[],level:3},{value:"inject \u7b2c\u4e09\u7a2e",id:"inject-\u7b2c\u4e09\u7a2e",children:[],level:3}],level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",children:[],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"decorators"},"Decorators"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Decorators \u662f function \u639b\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"@"),"\u524d\u7db4\u7b26\u865f\uff0c\u53ef\u4ee5\u7528\u65bc ",(0,l.kt)("inlineCode",{parentName:"p"},"class"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"paramemter"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"method")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"property"),"\u7684\u524d\u9762\u3002\u7528\u4f86\u63d0\u4f9b\u984d\u5916\u7684\u8cc7\u8a0a\u3002")),(0,l.kt)("h2",{id:"hostlistener"},"HostListener"),(0,l.kt)("p",null,"@hostListener \u53ef\u4ee5\u76e3\u807d\u5bbf\u4e3b\u5143\u7d20\u4e0a\u7684\u4e8b\u4ef6\uff0c\u76e3\u807d JS \u7684 event click | keydown | mouseleave ..."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class CountClicks {\n  numberOfClicks = 0;\n    // \u9019\u88e1\u7684 onClick \u53ef\u4ee5\u81ea\u884c\u547d\u540d\n  @HostListener('window:click', ['$event'])\n  onClick(btn): void{\n    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);\n  }\n}\n")),(0,l.kt)("h2",{id:"hostbinding"},"HostBinding"),(0,l.kt)("p",null,"@HostBinding()\u53ef\u4ee5\u70ba\u6307\u4ee4\u7684\u5bbf\u4e3b\u5143\u7d20\u65b0\u589e\u985e\u3001\u6a23\u5f0f\u3001\u5c6c\u6027\u7b49"),(0,l.kt)("p",null,"@HostBinding()\u548c@HostListener()\u4e0d\u50c5\u50c5\u7528\u5728\u81ea\u5b9a\u7fa9\u6307\u4ee4\uff0c\u53ea\u662f\u5728\u81ea\u5b9a\u7fa9\u6307\u4ee4\u4e2d\u7528\u7684\u8f03\u591a"),(0,l.kt)("p",null,"\u4e0b\u9762\u6211\u5011\u901a\u904e\u5be6\u73fe\u4e00\u500b\u5728\u8f38\u5165\u6642\u5be6\u6642\u6539\u8b8a\u5b57\u578b\u548c\u908a\u6846\u984f\u8272\u7684\u6307\u4ee4\uff0c\u5b78\u7fd2@HostBinding()\u548c@HostListener()\u7684\u7528\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"export class AddRainbowDirective {\n    constructor() {}\n    possibleColors = [\n        'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff', 'mediumspringgreen',\n        'cornflowerblue', 'blanchedalmond', 'lightslategrey',\n    ];\n    @HostBinding('style.color') color: string;\n    @HostBinding('style.borderColor') borderColor: string;\n    @HostListener('keydown') onKeydown() {\n        const colorPick = Math.floor(Math.random() * this.possibleColors.length);\n        this.color = this.borderColor = this.possibleColors[colorPick];\n    }\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<input appRainbow>\n")),(0,l.kt)("h2",{id:"ngmodule"},"NgModule"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"declarations"),"\uff0d\u5c6c\u65bc\u6b64 NgModule \u7684 Component\u3001Directive \u8207 Pipe \u7686\u653e\u7f6e\u65bc\u6b64\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"imports"),"\uff0d\u6b64 NgModule \u9700\u8981\u4f7f\u7528\u3001\u4f9d\u8cf4\u7684\u5176\u4ed6 NgModule \u7686\u653e\u7f6e\u65bc\u6b64\uff08\u597d\u50cf\u6709\u9ede\u9952\u820c\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"providers"),"\uff0d\u53ef\u4ee5\u88ab\u6574\u500b\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u4efb\u4f55\u90e8\u5206\u88ab\u4f7f\u7528\u7684 Service \u7686\u653e\u7f6e\u65bc\u6b64\uff0c\u4e5f\u53ef\u4ee5\u5c07 Service \u76f4\u63a5\u653e\u7f6e\u5728 Component \u7684 Metadata \u88e1\u7684\xa0",(0,l.kt)("inlineCode",{parentName:"li"},"providers"),"\xa0",(0,l.kt)("em",{parentName:"li"},"\uff08\u4f46\u653e\u7f6e\u5728\u4e0d\u540c\u5730\u65b9\u6703\u6709\u4e00\u4e9b\u9700\u8981\u7279\u5225\u6ce8\u610f\u7684\u4e8b\u9805\uff0c\u5f8c\u7e8c\u5728\u8aaa\u660e Service \u6642\u6703\u63d0\u5230\u3002\u53e6\u5916\uff0c\u5728 Angular 6 \u4e4b\u5f8c\uff0c\u5728 Service \u4e4b\u4e2d\u4e5f\u53ef\u4ee5\u4f7f\u7528 Metadata \u88e1\u7684\xa0",(0,l.kt)("inlineCode",{parentName:"em"},"providedIn"),"\xa0\u5ba3\u544a\uff0c\u8a72 Service \u8981\xa0",(0,l.kt)("inlineCode",{parentName:"em"},"provided"),"\xa0\u5230\u54ea\u88e1\u3002\u8a73\u7d30\u53ef\u4ee5\u53c3\u8003",(0,l.kt)("a",{parentName:"em",href:"https://blog.ninja-squad.com/2018/05/04/what-is-new-angular-6/"},"\u6b64\u7bc7\u6587\u7ae0"),"\u6216\u662f\u9694\u58c1\u68da",(0,l.kt)("a",{parentName:"em",href:"https://ithelp.ithome.com.tw/articles/10203876"},"Angular \u5927\u5e2b\u4e4b\u8def"),"\u4e5f\u6709\u63d0\u5230\uff09"),"\xa0\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"exports"),"\uff0d\u6b64\u8655\u653e\u7f6e\u7684\u662f\uff0c\u7576\u5728\u5176\u4ed6 NgModule \u88e1 import \u4e86\u7576\u524d\u7684 Module \u5f8c\uff0c\u53ef\u4ee5\u5728\u5176\u4ed6 NgModule \u88e1\u7684 Component Template \u4f7f\u7528\u7684 Component\u3001Directive \u8207 Pipe\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"entryComponents"),"\uff0d\u653e\u5728\u9019\u88e1\u7684\u5143\u4ef6\u901a\u5e38\u662f\u7528\u4e0d\u901a\u904e Route \u7684\u65b9\u5f0f\uff0c\u800c\u63a1\u7528\u52d5\u614b\u52a0\u5165\u7684\u5143\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"bootstrap"),"\uff0d\u5728\u6b64\u8a2d\u7f6e\u7684\u662f\u61c9\u7528\u7a0b\u5f0f\u901a\u5e38\u7a31\u4e4b\u70ba Root Component\xa0",(0,l.kt)("em",{parentName:"li"},"\uff08\u6839\u5143\u4ef6\uff09"),"\xa0\uff0c\u800c\u4e14\u53ea\u6709 Root Module \u624d\u8981\u8a2d\u7f6e\u6b64\u5c6c\u6027\u3002")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10195338"},"[\u529f\u80fd\u4ecb\u7d39-11] NgModules - iT \u90a6\u5e6b\u5fd9::\u4e00\u8d77\u5e6b\u5fd9\u89e3\u6c7a\u96e3\u984c\uff0c\u62ef\u6551 IT \u4eba\u7684\u4e00\u5929")),(0,l.kt)("h2",{id:"input"},"Input"),(0,l.kt)("p",null,"\u7236\u5c64\u7684 html "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'<app-bank-account [bank]="RBC" [account-id]="4747"></app-bank-account>\n')),(0,l.kt)("p",null,"\u5b50\u5c64\u7684 component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class BankAccount {\n  @Input() bankName: string;\n  @Input('account-id') id: string; //\u53ef\u4ee5\u7528\u6b64\u65b9\u628a\u540d\u7a31\u6539\u70ba\u81ea\u5df2\u60f3\u8981\u7684\u6771\u897f\n    // TODO: \u9084\u6709\u4e00\u500b\u53ef\u4ee5\u76f4\u63a5 set() \u503c\n}\n")),(0,l.kt)("h2",{id:"output"},"Output"),(0,l.kt)("p",null,"\u8981\u4f7f\u7528 output \u6709\u4e09\u500b\u6b65\u9a5f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5f15\u5165 Output & EventEmitter \u7684 function \u5728 angular"),(0,l.kt)("li",{parentName:"ol"},"\u8b93\u4f60\u7684 Output \u6709\u4e00\u500b EventEmitter"),(0,l.kt)("li",{parentName:"ol"},"\u5efa\u7acb\u4e00\u500b function \u628a\u8cc7\u6599 emt \u4e0a\u53bb")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Output, EventEmitter } from '@angular/core'; // step1\n\n@Output() newItemEvent = new EventEmitter<string>(); // step2 \n\naddNewItem(value: string) {\n    this.newItemEvent.emit(value); // step3 \u7528\u9019\u500b\u65b9\u5f0f emit \u8cc7\u6599\u4e0a\u53bb\n  }\n}\n// html <app-item (newItemEvent)=\"addItem($event)\"></app-item>\n")),(0,l.kt)("h2",{id:"veiwchild"},"VeiwChild"),(0,l.kt)("p",null,"\u6293\u53d6 DOM \u4e5f\u53ef\u4ee5\u6293\u53d6 component \u5f97\u5230\u88e1\u9762\u7684\u5b9a\u7fa9\u8b8a\u6578\u7684\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"@ViewChild('historyBlock') historyBlock;\n\nngOnInit(): void {\n        console.log(this.historyBlock.nativeElement) // get DOM\n}\n// html\n<div #historyBlock> </div>\n")),(0,l.kt)("h2",{id:"veiwchildren"},"VeiwChildren"),(0,l.kt)("p",null,"\u7528\u65bc\u914d\u7f6e\u6aa2\u8996\u67e5\u8a62\u7684\u5f15\u6578\u88dd\u98fe\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<ng-container *ngFor="let item of arrName">\n      <hello #item [name]="item"></hello>\n</ng-container>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { AfterViewInit, Component, VERSION, ViewChild } from "@angular/core";\nimport { HelloComponent } from "./hello.component";\n\n@Component({\n  selector: "my-app",\n  templateUrl: "./app.component.html",\n  styleUrls: ["./app.component.css"],\n})\nexport class AppComponent implements AfterViewInit {\n  arrName = ["aa", "bb", "cc"];\n  @ViewChildren("item") itemElement: QueryList<HelloComponent>;\n\n  ngAfterViewInit() {\n    this.itemElement.map((e) => {\n      console.log("itemElement", e.name); // \u4f9d\u5e8f\u63d0\u51fa\u5b50\u7d44\u4ef6\u88e1\u7684\u503c\n    });\n  }\n}\n')),(0,l.kt)("p",null,"\u6ce8\u610f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"ViewChildren"),"\xa0\u4e00\u5b9a\u8981\u642d\u914d\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"QueryList"),"\xa0\u4e00\u8d77\u4f7f\u7528\uff0c\u4e0d\u7136\u5c31\u4e0d\u80fd\u5be6\u73fe\u5217\u8868\u66f4\u65b0\u9019\u4ef6\u4e8b\u4e86\u56e0\u751f\u547d\u9031\u671f\u95dc\u4fc2\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"ViewChild"),"\xa0\u8207\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"ViewChildren"),"\xa0\u8981\u5728\xa0",(0,l.kt)("inlineCode",{parentName:"p"},"ngAfterViewInit"),"\xa0\u88e1\u624d\u80fd\u5be6\u73fe"),(0,l.kt)("h2",{id:"injectable--inject"},"Injectable & Inject"),(0,l.kt)("p",null,"Angular \u5176\u5be6\u63d0\u4f9b\u4e86\u4e09\u7a2e\u8a3b\u518a Service \u7684\u65b9\u5f0f\u3002"),(0,l.kt)("h3",{id:"inject-\u7b2c\u4e00\u7a2e"},"inject \u7b2c\u4e00\u7a2e"),(0,l.kt)("p",null,"\u7b2c\u4e00\u7a2e\u65b9\u5f0f\u6700\u7c21\u55ae\uff0c\u4e5f\u662f Angular CLI \u5728\u7522\u751f Service \u6642\u9810\u8a2d\u4f7f\u7528\u7684\u65b9\u5f0f\uff1a"),(0,l.kt)("p",null,"\u9019\u7a2e\u65b9\u5f0f\u662f\u5728 Service \u81ea\u5df1\u7684 Metadata \u88e1\u52a0\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"providedIn: 'root'")," \u7684\u5c6c\u6027\uff0c\u4f86\u544a\u8a34 Angular \u8aaa\uff1a\u300c\u8acb\u628a\u6211\u8a3b\u518a\u5728\u6574\u500b\u7cfb\u7d71\u90fd\u662f\u4f7f\u7528\u540c\u4e00\u500b\u5be6\u9ad4\u7684\u6ce8\u5c04\u5668\u88e1\u300d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"@Injectable({\n        providedIn: 'root'\n})\n")),(0,l.kt)("h3",{id:"inject-\u7b2c\u4e8c\u7a2e"},"inject \u7b2c\u4e8c\u7a2e"),(0,l.kt)("p",null,"\u9019\u7a2e\u65b9\u5f0f\u662f\u544a\u8a34 Angular \u8aaa\uff1a\u300c\u8acb\u628a\u6211\u8a3b\u518a\u5728\u9019\u6574\u500b NgModule \u90fd\u7528\u540c\u4e00\u500b\u5be6\u9ad4\u7684\u6ce8\u5c04\u5668\u88e1\u300d\u3002\u4e5f\u5c31\u662f\u8aaa\uff0c\u5047\u8a2d\u7576\u521d A Service \u662f\u8a3b\u518a\u5728 A Module \u88e1\uff0c\u90a3\u9ebc\u5728\u6574\u500b A Module \u88e1\u5c31\u6703\u4f7f\u7528\u540c\u4e00\u500b\u5be6\u9ad4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"@NgModule({\n        providers: [\n                BackendService,\n                Logger\n        ],\n    ...\n})\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u90a3\u5728 B Module \u88e1\u53ef\u4ee5\u7528 A Service\u55ce\uff1f \u53ef\u4ee5\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u90a3\u5728 B Module \u88e1\u7684 A Service \u8ddf\u5728 A Module \u88e1\u7684 A Service \u662f\u540c\u4e00\u500b\u5be6\u9ad4\u55ce\uff1f\u540c\u4e00\u500b<\u5fc3\u4e2d\u5b58\u7591\uff1f\uff1f>")),(0,l.kt)("h3",{id:"inject-\u7b2c\u4e09\u7a2e"},"inject \u7b2c\u4e09\u7a2e"),(0,l.kt)("p",null,"\u9019\u7a2e\u65b9\u5f0f\u662f\u544a\u8a34 Angular \u8aaa\uff1a\u300c\u8acb\u628a\u6211\u8a3b\u518a\u5728\u9019\u6574\u500b Component \u90fd\u7528\u540c\u4e00\u500b\u5be6\u9ad4\u7684\u6ce8\u5c04\u5668\u88e1\u300d\u3002\u610f\u601d\u662f\u6bcf\u500b Component \u62ff\u5230\u7684 Service \u5be6\u9ad4\u90fd\u4e0d\u662f\u540c\u4e00\u500b\u3002"),(0,l.kt)("p",null,"\u7d55\u5c0d\u4e0d\u662f\u540c\u4e00\u500b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"@Component({\n  selector:    'app-hero-list',\n  templateUrl: './hero-list.component.html',\n  providers:  [ HeroService ]\n})\n")),(0,l.kt)("p",null,"\u9019\u500b\u8981\u5e38\u5e38\u770b\u4e00\u4e0b\uff0c\u91cd\u8981"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.kevinyang.net/2018/01/19/angular-viewproviders-providers/"},"https://blog.kevinyang.net/2018/01/19/angular-viewproviders-providers/")),(0,l.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.kevinyang.net/2017/01/30/angular2-decorators/"},"\u81ea\u8a02Decorators")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jiaming0708.github.io/2017/03/27/angular-hostbinding-listener/"},"HostBinding&HostListener")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://jiaming0708.github.io/2017/03/27/angular-hostbinding-listener/"},"HostBinding&HostListener")))}d.isMDXComponent=!0}}]);
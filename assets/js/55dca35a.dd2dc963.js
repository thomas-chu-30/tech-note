"use strict";(self.webpackChunktech_note=self.webpackChunktech_note||[]).push([[7678],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4568:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],u={},i="Router",p={unversionedId:"angular/router",id:"angular/router",title:"Router",description:"Angular \u8def\u7531",source:"@site/docs/angular/router.md",sourceDirName:"angular",slug:"/angular/router",permalink:"/tech-note/docs/angular/router",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/angular/router.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resolver",permalink:"/tech-note/docs/angular/resolver"},next:{title:"Create a Page",permalink:"/tech-note/docs/tutorial-basics/create-a-page"}},s=[{value:"<strong>Angular \u8def\u7531</strong>",id:"angular-\u8def\u7531",children:[],level:2},{value:"\u8f49\u5740",id:"\u8f49\u5740",children:[{value:"HTML5 URLs and the <code>&lt;base href&gt;</code>",id:"html5-urls-and-the-base-href",children:[],level:3},{value:"template \u5beb\u6cd5",id:"template-\u5beb\u6cd5",children:[],level:3},{value:"\u7528 function \u8f49\u8df3\u7db2\u5740",id:"\u7528-function-\u8f49\u8df3\u7db2\u5740",children:[],level:3},{value:"\u53d6\u5f97\u53c3\u6578",id:"\u53d6\u5f97\u53c3\u6578",children:[],level:3}],level:2},{value:"\u5ef6\u9072 Lazy Page",id:"\u5ef6\u9072-lazy-page",children:[{value:"Create a feature module with routing",id:"create-a-feature-module-with-routing",children:[],level:3}],level:2},{value:"\u8def\u7531\u5b88\u885b",id:"\u8def\u7531\u5b88\u885b",children:[{value:"\u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c\uff1f",id:"\u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c",children:[],level:3},{value:"\u5efa\u7acb\u4e00\u500b guard",id:"\u5efa\u7acb\u4e00\u500b-guard",children:[],level:3}],level:2},{value:"matcher",id:"matcher",children:[],level:2},{value:"directive router",id:"directive-router",children:[{value:"RouterLink",id:"routerlink",children:[],level:3},{value:"RouterLinkActive",id:"routerlinkactive",children:[],level:3},{value:"RouterLinkWithHref",id:"routerlinkwithhref",children:[],level:3},{value:"RouterOutlet",id:"routeroutlet",children:[],level:3}],level:2},{value:"\u4f60\u53ef\u80fd\u6703\u9047\u5230\u7684\u554f\u984c",id:"\u4f60\u53ef\u80fd\u6703\u9047\u5230\u7684\u554f\u984c",children:[{value:"*\u5982\u679c\u4f60\u91cd\u8907\u4f7f\u7528 component \u7684\u8a71",id:"\u5982\u679c\u4f60\u91cd\u8907\u4f7f\u7528-component-\u7684\u8a71",children:[],level:3},{value:"\u5728 parent \u8981\u62ff\u5230\u672c\u9801\u7684 component",id:"\u5728-parent-\u8981\u62ff\u5230\u672c\u9801\u7684-component",children:[],level:3}],level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",children:[],level:2}],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"router"},"Router"),(0,o.kt)("h2",{id:"angular-\u8def\u7531"},(0,o.kt)("strong",{parentName:"h2"},"Angular \u8def\u7531")),(0,o.kt)("p",null,"\u5efa\u7acb component \u4e4b\u5f8c\uff0c\u53bb ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/app/app-routing.module.ts")," \u5f15\u9032 component"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { AppRoutingModule } from './app-routing.module'; \n// CLI imports AppRoutingModule\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n        // \u5728\u9019\u88e1\u5f15\u5165 *** components\n  ],\n  imports: [\n    BrowserModule,\n    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n")),(0,o.kt)("p",null,"\u5728\u53bb ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/app/app-routing-modules.ts")," \u52a0\u4e0a routers"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NgModule } from '@angular/core';\nimport { Routes, RouterModule } from '@angular/router'; // CLI imports router\n\nconst routes: Routes = []; // sets up routes constant where you define your routes\n\n// configures NgModule imports and exports\n@NgModule({\n  imports: [RouterModule.forRoot(routes)],\n  exports: [RouterModule]\n})\nexport class AppRoutingModule { }\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Routes = [\n  { path: 'first-component', component: FirstComponent },\n  { path: 'second-component', component: SecondComponent },\n];\n\n// <a routerLink=\"/first-component\"></a>\n// RouterLinkActive => \u9019\u500b\u662f\u7528\u4f86\u4f5c\u4ec0\u9ebc\u7684\uff1f\uff1f\n")),(0,o.kt)("h2",{id:"\u8f49\u5740"},"\u8f49\u5740"),(0,o.kt)("h3",{id:"html5-urls-and-the-base-href"},"HTML5 URLs and the ",(0,o.kt)("inlineCode",{parentName:"h3"},"<base href>")),(0,o.kt)("p",null,"The guidelines that follow will refer to different parts of a URL. This diagram outlines what those parts refer to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"foo://example.com:8042/over/there?name=ferret#nose\n\\_/   \\______________/\\_________/ \\_________/ \\__/\n |           |            |            |        |\nscheme    authority      path        query   fragment\n")),(0,o.kt)("h3",{id:"template-\u5beb\u6cd5"},"template \u5beb\u6cd5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<a [routerLink]="[\'products\']" [queryParams]="{ id: 101 }">Prodcuts</a>\n<a routerLink="products" [queryParams]="{ id: 101 }">Prodcuts</a>\n<a [routerLink]="[\'market\',\'GP11011\']">Prodcuts</a>\n\n\x3c!-- hash url: router_name#fragment_name --\x3e\n<a [routerLink]="[\'router_name\']" fragment="fragment_name">\n')),(0,o.kt)("h3",{id:"\u7528-function-\u8f49\u8df3\u7db2\u5740"},"\u7528 function \u8f49\u8df3\u7db2\u5740"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Router } from '@angular/router'\n// constructor(private router: Router){}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const routes: Routes = [ { path: 'group/:id/:categories', ... }];\n//\nconst routes: Routes = [ { path: 'group', ... }];\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"\n// /market/categories/group/516/led-light\nthis.router.navigate(['group', 516, 'led-light']);\n\n// group;id=7 \nthis.router.navigate(['group', { id:7 }]);\n\n// group?id=7\nthis.router.navigate(['group'], { queryParams: { id: 7 } });\n\n// group#prodID\nthis.router.navigate(['group'], { fragment: prodID });\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://waynestalk.com/angular-router-tutorial/"},"Angular Router \u6559\u5b78 - Wayne's Talk")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10195347"},"[\u529f\u80fd\u4ecb\u7d39-15] Router\u9032\u968e\u4ecb\u7d39 - iT \u90a6\u5e6b\u5fd9::\u4e00\u8d77\u5e6b\u5fd9\u89e3\u6c7a\u96e3\u984c\uff0c\u62ef\u6551 IT \u4eba\u7684\u4e00\u5929")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10209035"},"[Angular \u6df1\u5165\u6dfa\u51fa\u4e09\u5341\u5929] Day 25 - \u8def\u7531\u7e3d\u7d50\uff08\u4e00\uff09 - iT \u90a6\u5e6b\u5fd9::\u4e00\u8d77\u5e6b\u5fd9\u89e3\u6c7a\u96e3\u984c\uff0c\u62ef\u6551 IT \u4eba\u7684\u4e00\u5929")),(0,o.kt)("h3",{id:"\u53d6\u5f97\u53c3\u6578"},"\u53d6\u5f97\u53c3\u6578"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export class ProductsComponent implements OnInit {\n  constructor(private route: ActivatedRoute) { }\n  ngOnInit() {\n  \n      // \u7b2c\u4e00\u7a2e\u65b9\u5f0f\uff08\u8f03\u63a8\u85a6\uff09\n      this.route.queryParams.subscribe((queryParams) => {\n        console.log(queryParams['id']);\n      });\n      \n      // \u7b2c\u4e8c\u7a2e\u65b9\u5f0f\n      console.log(this.route.snapshot.queryParams['id']);       \n  }\n}\n")),(0,o.kt)("h2",{id:"\u5ef6\u9072-lazy-page"},"\u5ef6\u9072 Lazy Page"),(0,o.kt)("p",null,"\u5728\u7db2\u7ad9\u4e00\u958b\u59cb\u9032\u4f86\u7684\u6642\u5019\uff0c\u4e0d\u628a\u6240\u6709\u7db2\u7ad9\u7528\u5230\u7684\u8cc7\u539f\u5168\u90e8\u8f09\u5165\uff0c\u7531 router \u5c0d\u61c9\u5230\u7684 module \u5404\u5225\u8f09\u5165"),(0,o.kt)("h3",{id:"create-a-feature-module-with-routing"},"Create a feature module with routing"),(0,o.kt)("p",null,"Next, you\u2019ll need a feature module with a component to route to. To make one, enter the following command in the terminal, where ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," is the name of the feature module. The path for loading the ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," feature modules is also ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," because it is specified with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--route")," option:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ng generate module customers --route customers --module app.module\n")),(0,o.kt)("p",null,"This creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," folder having the new lazy-loadable feature module ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomersModule")," defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"customers.module.ts")," file and the routing module ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomersRoutingModule")," defined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"customers-routing.module.ts")," file. The command automatically declares the ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomersComponent")," and imports ",(0,o.kt)("inlineCode",{parentName:"p"},"CustomersRoutingModule")," inside the new feature module."),(0,o.kt)("p",null,"Because the new module is meant to be lazy-loaded, the command does NOT add a reference to the new feature module in the application's root module file, ",(0,o.kt)("inlineCode",{parentName:"p"},"app.module.ts"),". Instead, it adds the declared route, ",(0,o.kt)("inlineCode",{parentName:"p"},"customers")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," array declared in the module provided as the ",(0,o.kt)("inlineCode",{parentName:"p"},"--module")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const routes: Routes = [\n  {\n    path: 'customers',\n    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)\n  }\n];\n")),(0,o.kt)("h2",{id:"\u8def\u7531\u5b88\u885b"},"\u8def\u7531\u5b88\u885b"),(0,o.kt)("h3",{id:"\u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c"},"\u89e3\u6c7a\u4e86\u4ec0\u9ebc\u554f\u984c\uff1f"),(0,o.kt)("p",null,"\u5728 angular \u4e2d\uff0c\u8def\u7531\u5b88\u885b\u4e3b\u8981\u53ef\u4ee5\u89e3\u6c7a\u4ee5\u4e0b\u7684\u554f\u984c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c0d\u65bc\u7528\u6236\u8a2a\u554f\u9801\u9762\u7684\u6b0a\u9650\u80fd\u5426\u9032\u5165\uff08\u662f\u5426\u5df2\u7d93\u767b\u9304\uff1f\u5df2\u7d93\u767b\u9304\u7684\u89d2\u8272\u662f\u5426\u6709\u6b0a\u9650\uff1f\uff09 "),(0,o.kt)("li",{parentName:"ol"},"\u5728\u8df3\u8f49\u5230\u7d44\u4ef6\u4e4b\u524d\u7372\u53d6\u5fc5\u9808\u7684\u6578\u64da \u9801\u9762\u6642\uff0c\u63d0\u793a\u7528\u6236\u662f\u5426\u4fdd\u5b58\u672a\u63d0\u4ea4\u7684\u4fee\u6539"),(0,o.kt)("li",{parentName:"ol"},"\u96e2\u958b\u9801\u9762\u6642\uff0c\u63d0\u793a\u7528\u6236\u662f\u5426\u4fdd\u5b58\u672a\u63d0\u4ea4\u7684\u4fee\u6539")),(0,o.kt)("p",null,"Angular\u5e7e\u500b\u8def\u7531\u6a21\u584a\u63d0\u4f9b\u77ad\u5982\u4e0b\u7684\u63a5\u53e3\u7528\u65bc\u5e6b\u52a9\u6211\u5011\u89e3\u6c7a\u4e0a\u9762\u7684\u554f\u984c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"CanActivate\u64cd\u4f5c\u8a2a\u554f\u8655\u7406\u7cfb\u7d71\u8df3\u8f49\u5230\u53ef\u4ee5\u57f7\u884c\u7684\u5730\u5740\uff1a\uff08\u5224\u65b7\u662f\u5426\uff09"),(0,o.kt)("li",{parentName:"ol"},"CanActivateChild \u529f\u80fd\u540c CanActivate\uff0c\u52a0\u9ede\u83dc"),(0,o.kt)("li",{parentName:"ol"},"CanDeactivate\uff1a\u4f7f\u7528\u8655\u7406\u5f9e\u7576\u524d\u8def\u7531\u7684\u60c5\u6cc1\uff08\u5224\u65b7\u662f\u5426\u5b58\u5728\u672a\u63d0\u4ea4\u7684\u4fe1\u606f\uff09"),(0,o.kt)("li",{parentName:"ol"},"CanLoad\u5ef6\u9072\u52a0\u8f09\u7684\u65b9\u5f0f\uff1a \u662f\u5426\u5141\u8a31\u901a\u904e")),(0,o.kt)("p",null,"\u5728\u7d93\u904e\u4e86\u8def\u7531\u5b88\u885b\uff0c\u901a\u904e\u6dfb\u52a0\u8def\u7531\u5b88\u885b\u8fd4\u56de\u7684\u503c\uff0c\u5f9e\u800c\u9054\u5230\u8def\u7531\u63a7\u5236\u7684\u6700\u7d42\u76ee\u7684"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"true\uff1a\u5c0e\u822a\u7e7c\u7e8c"),(0,o.kt)("li",{parentName:"ol"},"false\uff1a\u5c0e\u822a\u6b04\uff0c\u7528\u6236\u8df3\u8f49\u505c\u7559\u5728\u7576\u524d\u7684\u9801\u9762\u6216\u8005\u662f\u5230\u6307\u5b9a\u7684\u9801\u9762"),(0,o.kt)("li",{parentName:"ol"},"UrlTree\uff1a\u53d6\u6d88\u7576\u524d\u7684\u5c0e\u822a\uff0c\u4e26\u5c0e\u822a\u5230\u8def\u7531\u5b88\u885b\u8fd4\u56de\u7684\u9019\u500bUrlTree\u4e0a\uff08\u4e00\u500b\u65b0\u7684\u8def\u7531\u4fe1\u606f\uff09")),(0,o.kt)("h3",{id:"\u5efa\u7acb\u4e00\u500b-guard"},"\u5efa\u7acb\u4e00\u500b guard"),(0,o.kt)("p",null,"\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"agnular CLI")," \u5efa\u7acb\u4e00\u500b ",(0,o.kt)("inlineCode",{parentName:"p"},"guard")," \u4f86\u5be6\u73fe\u8def\u7531\u5b88\u885b\uff0c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ng g guard auth/auth\n")),(0,o.kt)("p",null,"\u5728 router \u5efa\u7acb\u4e00\u500b\u8def\u7531\u5b88\u885b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const routes: Routes = [\n  {\n    path: 'crisis-center',\n    component: CrisisListComponent,\n    canActivate: [AuthGuard], // \u6dfb\u52a0\u9488\u5bf9\u5f53\u524d\u8def\u7531\u7684 canActivate \u8def\u7531\u5b88\u536b\n  }\n];\n")),(0,o.kt)("h2",{id:"matcher"},"matcher"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"\nexport const UserRoutes: Routes = [\n  {\n    path: 'users',\n    component: UserComponent,\n    children: [\n      {\n        path: '',\n        component: UserListComponent\n      },\n      {\n        matcher: ComplexUrlMatcher(\"id\", /[0-9]+/),\n        component: UserItemComponent\n      },\n    ]\n  }\n];\n\n@NgModule({\n  imports: [RouterModule.forChild(UserRoutes)],\n  exports: [RouterModule]\n})\nexport class UserRoutingModule { }\n")),(0,o.kt)("h2",{id:"directive-router"},"directive router"),(0,o.kt)("h3",{id:"routerlink"},(0,o.kt)("a",{parentName:"h3",href:"https://angular.io/api/router/RouterLink"},"RouterLink")),(0,o.kt)("h3",{id:"routerlinkactive"},(0,o.kt)("a",{parentName:"h3",href:"https://angular.io/api/router/RouterLinkActive"},"RouterLinkActive")),(0,o.kt)("p",null,"routerLinkActive\u5247\u662f\u7528\u4f86\u8a2d\u5b9a\u82e5\u73fe\u5728\u7684\u7db2\u5740\u8207\u6240\u8a2d\u5b9a\u7684\u9023\u7d50\u4e00\u81f4\u6642\uff0c\u8981\u52a0\u4e0a\u53bb\u7684Class\u540d\u7a31\uff0c\u4e5f\u53ef\u4ee5\u5229\u7528\u4f86\u5224\u65b7\u986f\u793a\u7684\u908f\u8f2f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'<a\n    routerLink="/market/categories/note"\n    #rla="routerLinkActive"\n    routerLinkActive="active"\n>\n        {{ rla.isActive ? \'isActive\' : \'noActive\' }} note\n</a>\n<a routerLink="/market/categories/book">book</a>\n')),(0,o.kt)("h3",{id:"routerlinkwithhref"},(0,o.kt)("a",{parentName:"h3",href:"https://angular.io/api/router/RouterLinkWithHref"},"RouterLinkWithHref")),(0,o.kt)("h3",{id:"routeroutlet"},(0,o.kt)("a",{parentName:"h3",href:"https://angular.io/api/router/RouterOutlet"},"RouterOutlet")),(0,o.kt)("h2",{id:"\u4f60\u53ef\u80fd\u6703\u9047\u5230\u7684\u554f\u984c"},"\u4f60\u53ef\u80fd\u6703\u9047\u5230\u7684\u554f\u984c"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5982\u679c\u4f60\u91cd\u8907\u4f7f\u7528-component-\u7684\u8a71"},"*\u5982\u679c\u4f60\u91cd\u8907\u4f7f\u7528 component \u7684\u8a71"),(0,o.kt)("p",null,"\u89f8\u767c events \u7684 subscribe \u6703\u7d93\u904e\u5f88\u591a\u7684 event "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://angular.io/api/router/Event"},"Angular")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/de4479ce5b19"},"Angular\u6846\u67b6\u4e2d\u53bb\u76d1\u542c\u8def\u7531\u7684\u6539\u53d8\uff08Router\u4e2d\u7684events: Observable \uff09")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"this.router.events.subscribe((ev) => {  \n        // ev \u662f\u5728 event \u7684\u89f8\u767c\u6642\u6703\u8dd1\u904e\u5f88\u591a\u7684 event  \n        // \u9019\u500b if \u662f\u5728\u5224\u65b7\u5982\u679c event \u662f ActivationStart \u7684\u6642\u5019\n        // \u4e26\u4e14 component \u540c\u70ba SupplierProductsPageComponent \u6642 unsubscribe\n        if (ev instanceof ActivationStart && Object.is(ev?.snapshot?.component, SupplierProductsPageComponent)) {\n            this.getDataSubscribe.unsubscribe();\n    }\n});\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"\u5728-parent-\u8981\u62ff\u5230\u672c\u9801\u7684-component"},"\u5728 parent \u8981\u62ff\u5230\u672c\u9801\u7684 component"),(0,o.kt)("p",null,"\u60c5\u5883\u8aaa\u660e\uff0c\u5728 header \u56e0\u70ba\u8981\u900f\u904e\u9801\u9762 router \u7684 data \u4f86\u5224\u65b7\u8cc7\u6599\u986f\u793a\u3002\u4f46\u5728\u6b64\u8655\u7684 route \u662f\u76f4\u5411\u6700\u5916\u9762\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.component")," \uff0c\u4f46\u771f\u6b63\u60f3\u8981\u62ff\u5230\u7684\u6771\u897f\u662f\u5728 firstChild \u88e1\u9762\uff0c\u6240\u4ee5\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"while")," \u4f86\u53d6\u5f97\u6700\u5f8c\u4e00\u500b component "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"let current = this.route.firstChild;\n        while (current.firstChild) {\n        current = current.firstChild;\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"[ \u6ce8\u610f ]"," \u5982\u679c\u662f lazy page \u7684\u8a71\uff0c\u4e2d\u9593\u6703\u6709\u4e00\u5c64 ",(0,o.kt)("inlineCode",{parentName:"p"},"component")," \u70ba undefine")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ithelp.ithome.com.tw/articles/10195346"},(0,o.kt)("strong",{parentName:"a"},"Router\u57fa\u790e\u4ecb\u7d39"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.codingame.com/playgrounds/8104/angular-router-tutorial"},"Angular Router Tutorial")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://matthung0807.blogspot.com/2019/06/angular-7-router-parameters.html"},"Angular \u4f7f\u7528Router Parameters \u8def\u7531\u53c3\u6578")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://jonny-huang.github.io/angular/training/11_angular_lazy_loading/"},"Angular \u5ef6\u9072\u8f09\u5165")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/danvic712/p/getting-started-with-angular-route-guards.html"},"Angular \u4ece\u5165\u5751\u5230\u6316\u5751 - \u8def\u7531\u5b88\u536b\u8fde\u8fde\u770b")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://tw511.com/a/01/26032.html"},"\u8a73\u89e3Angular\u4e2d\u7684\u8def\u7531\u5b88\u885b")))}m.isMDXComponent=!0}}]);
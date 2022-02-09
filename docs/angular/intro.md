# Angular

[@angular/router](https://docs.w3cub.com/angular/api/router)

mat icon search web 

[Google Fonts](https://fonts.google.com/icons?selected=Material+Icons)

[Angular](https://angular.io/api)

<aside>
🔹 此連結為 angular api 的查尋連結

</aside>

### 常用 command line 大全

> 可參考 CLI 命令參考手冊，下列為 generate component 的 command
> 

```jsx
$ ng g component home/component/my-new-component     
# => 组件 | 相對生成組件生成位置在項目的根目錄的  src/app/home/component（指令其他等等都可以用該方式生成）

$ ng g directive my-new-directive =>  指令 
    
$ ng g pipe my-new-pipe => 管道 
    
$ ng g service my-new-service => 服務
    
$ ng g class my-new-class => 類 
    
$ ng g interface my-new-interface => 接口 
    
$ ng g enum my-new-enum => 枚舉
    
$ ng g module my-module => 模塊
```

[Angular - ng generate](https://angular.tw/cli/generate#component)

[Angular CLI 常用终端操作命令](https://www.jianshu.com/p/67acdd21f89c)

angular 入門到實踐

[样式](https://cipchk.gitbooks.io/angular-practice/content/component/styles.html)

## 資料夾結構說明

[[Angular 深入淺出三十天] Day 04 - 資料夾結構說明 - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10203534)

[[Angular #3]認識 Angular CLI 產生的專案目錄結構](https://medium.com/angular-%E7%9A%84%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98/angular-3-%E8%AA%8D%E8%AD%98-angular-cli-%E7%94%A2%E7%94%9F%E7%9A%84%E5%B0%88%E6%A1%88%E7%9B%AE%E9%8C%84%E7%B5%90%E6%A7%8B-ba20c77d0029)

## NgModule

NgModule的metadata有下面幾項：

- imports：這個模組所需用到的Angular提供的或第三方提供的Angular資源庫（如FormsModule、HttpModule等）。
- providers：一些供這個模組使用的service，在此宣告後所有下面的元件都可以直接使用這個服務。
- declarations：這個Module內部`Components/Directives/Pipes`的列表，聲明這個Module的內部成員
- exports：用來控制將哪些內部成員暴露給外部使用。
- bootstrap：這個屬性只有根模組需要設定，在此設定在一開始要進入的模組成員是那一個。

### **Bootstrapping**

每一個專案都一定會有一個根模組，也就是root module，我們會在main.ts去做Bootstrap這個根模組的動作，讓整個APP可以運行起來。

```jsx
// main.js
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);//用這一串文字來運行根模組AppModule
```

在bootstrap的動作裡，會建立好執行環境並把在`src/app/app.module.ts`裡設定的bootstrap陣列裡的元素取出來並透過在該成員裡設定的selector，讓我們可以在`src/index.html`來顯示這個元件的VIEW。

### **Service providers**

可以看到`app.module.ts`的providers會增加一個名為UserService的類別

```
providers: [ UserService ]
```

在使用上，如果已經有設定好providers後，只要在元件的constructor裡面宣告一個變數是providers裡面設定好的service，就可以在元件裡直接取用了

```jsx
constructor(userService: UserService) {
    this.user = userService.userName;
}
```

![http://claire-chang.com/wp-content/uploads/2017/12/injector-injects.png](http://claire-chang.com/wp-content/uploads/2017/12/injector-injects.png)

[[功能介紹-11] NgModules - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10195338)

### Services Inject

[[Angular 深入淺出三十天] Day 17 - 基礎結構說明（四） - iT 邦幫忙::一起幫忙解決難題，拯救 IT 人的一天](https://ithelp.ithome.com.tw/articles/10207283)

### Service

在 Angular 裡，Service 其實一個滿核心的元件，任何你在應用程式裡會需要用到的值、函式或是功能都會用到它。而它也通常是一個有著明確定義的 Class，專門用來處理某件事。

而 Angular 之所以會有 Service 這個元件是因為它想要讓我們在使用 Angular 撰寫應用時，能夠寫的更模組化一點、重用性更高一點。

所以在理想狀況下， Component 只負責處理畫面、資料綁定，而 Service 則負責像是取得資料、表單驗證等等的邏輯處理，來讓我們的應用程式擁有更好的結構與彈性。

那 Angular 是怎麼讓 Component 能夠很便利的使用 Service 呢？

答案是：**DI** *（**D**ependency **I**njection，依賴注入）*`@Injectable`

***第一種 injectable***

使用 `@Injectable` 的話，可以在每一個 component 作引用

```tsx
@Injectable({
  providedIn: 'root'
}) // 預設的寫法
```

***第二種 injectable***

這種方式是告訴 Angular 說：「請把我註冊在這整個 NgModule 都用同一個實體的注射器裡」。也就是說，假設當初 A Service 是註冊在 A Module 裡，那麼在整個 A Module 裡就會使用同一個實體。

```tsx
// src/app/app.modules.ts
@NgModule({
  providers: [
    BackendService, // 加在這裡
  ],
})
```

***第三種 injectable***

註冊在 Component 裡，這種方式是告訴 Angular 說：「請把我註冊在這整個 Component 都用同一個實體的注射器裡」。意思是每個 Component 拿到的 Service 實體都不是同一個。

```tsx
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
```

## 繼承

[How To Extend Classes with Angular Component Inheritance | DigitalOcean](https://www.digitalocean.com/community/tutorials/angular-component-inheritance)

## 使用 HTTP 與後端服務進行通訊

~~~~ 這部分還沒有很熟悉 ~~~~~~

```jsx
// app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

[Angular - 使用 HTTP 與後端服務進行通訊](https://angular.tw/guide/http#setup-for-server-communication)

## Zone.js

[[Angular] NgZone 的應用](https://blog.kevinyang.net/2019/02/14/ng-ngzone/)

## angular 會對 url 中的 () 去作判斷

https://github.com/angular/angular/issues/10280

[question ](https://www.notion.so/question-f4a7e9a4d35341378dffd3bccd6bb065)

[i18n tranlate ](https://www.notion.so/i18n-tranlate-335ecc06bd0349bfa51bba718327a164)

[Angular for SSR](https://www.notion.so/Angular-for-SSR-0cb5908f871c4a96bb2cf6d8d2cc3603)

[Router](https://www.notion.so/Router-03b68bca16aa433eb0616f0fa1b223c4)

[Life Hooks](https://www.notion.so/Life-Hooks-23eb905e772f4901955bb5cf27fb280b)

[Directive](https://www.notion.so/Directive-1693564dfc8d45fdbb1fe9c06310e835)

[Decorators](https://www.notion.so/Decorators-bd2331d06164495db2804f206eb9d2e4)

[Resolver](https://www.notion.so/Resolver-9a345add174d43bea66d9ba93cc244ff)

[Blog](https://www.notion.so/Blog-dae39f67de074502a56d139b5a6d351f)

[Unit Testing (Jest)](https://www.notion.so/Unit-Testing-Jest-dbc4ce76d3e14019bf6aaab16db0aca3)

[Form](https://www.notion.so/Form-f727ebd646ae46b9a0db2b661a68a771)

Yes, you can still use your general member account to shop at TECHDesign: 

```jsx
public auth$ = new ReplaySubject<AuthInfo | null>(1);

    constructor(private apiSystemService: ApiSystemService) {}

    initUserRoles() {
        return this.apiSystemService
            .getCheckAuth()
            .pipe(
                tap((ret: any) => {
                    this.userConfig = ret.data.config;
                    this.userRoles = ret.data.roles;
                    this.auth$.next(ret.data);
                })
            )
            .toPromise();
    }

```

```jsx
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root',
})
export class LoginGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        // 因為 initialNavigation: 'enabledBlocking' 這個設定的關係，route navigate不會等到 APP_INITIALIZER 完成才發生，
        // 因此必須要透過 訂閱 auth$ 的方式來等到 checkAuth api 返回。
        return this.authService.auth$.pipe(
            map((data) => {
                if (!this.authService.isLogin()) {
                    const url = `/user/login?then=${state.url}`;
                    return this.router.parseUrl(url);
                }
                return true;
            })
        );
    }
}
```

[**ng2-file-upload**](https://www.notion.so/ng2-file-upload-034cf6a5408846ca801cd43b1ecedea8)

[Element](https://www.notion.so/Element-cf0bb4f09ac742faa4398a4f81f7ba5d)
# 10分鐘內的Npm腳本教程!

使用Node進行開發時，必須使用npm，腳本是npm的最強大和最常見的功能之一。

我將在本文中介紹如何使用npm腳本。

目錄 



- [1. 1.什麼是npm腳本？](https://codertw.com/程式語言/741974/#outline__1)
- [2. 2.原則](https://codertw.com/程式語言/741974/#outline__2)
- [3. 3.通配符](https://codertw.com/程式語言/741974/#outline__3)
- [4. 4.傳遞參數](https://codertw.com/程式語言/741974/#outline__4)
- [5. 5.執行順序](https://codertw.com/程式語言/741974/#outline__5)
- [6. 6.默認值](https://codertw.com/程式語言/741974/#outline__6)
- [7. 7.鉤子](https://codertw.com/程式語言/741974/#outline__7)
- [8. 8.縮寫形式](https://codertw.com/程式語言/741974/#outline__8)
- [9. 9.變量](https://codertw.com/程式語言/741974/#outline__9)
- [10. 10.常見腳本示例](https://codertw.com/程式語言/741974/#outline__10)
- \11. 11.使用nrm管理npm鏡像
  - [11.1. 相關文章](https://codertw.com/程式語言/741974/#outline__11_1)

## 1.什麼是npm腳本？

Npm允許您使用文件中的`scripts`字段定義腳本命令`package.json`。

```json
{
	...
	"scripts": {
		"build": "node build.js"
	}
}
```

上面的代碼是`package.json`文件的一部分，`scripts`這裡的字段是一個對象。它的每個屬性都對應一個腳本。例如，與該`build`命令對應的腳本為`node build.js`。

如果您`npm run`在命令行下使用該命令，腳本將被執行。

```
$ npm run build
# equivalent to execution
$ node build.js
```

在中定義的這些腳本`package.json`稱為npm腳本。有很多優點：

- 與項目相關的腳本可以放在一個地方。
- 用於不同項目的腳本命令可以使用相同的外部接口，只要它們具有相同的功能即可。用戶不需要知道如何測試您的項目，只需運行npm run test即可。
- 您可以利用npm提供的許多輔助功能。

您可以使用`npm run`不帶任何參數的命令來查看當前項目的所有npm腳本命令。

```
$ npm run
```

## 2.原則

npm腳本的原理非常簡單。無論何時`npm run`執行，都會自動創建一個新的shell，並且將在該shell中執行指定的腳本命令。因此，只要該命令可以由外殼程序（通常是Bash）運行，它就可以用npm腳本編寫。

特殊的是，由創建的shell `npm run`將`node_modules/.bin`當前目錄的子目錄添加到`PATH`變量中，並且該`PATH`變量將在執行後恢復。

這意味著可以直接通過腳本名稱來調用當前目錄的node_modules / .bin子目錄中的所有腳本，而無需添加路徑。例如，如果當前項目的依賴項中包含Mocha，則只需`mocha test`直接編寫：

```
"test": "mocha test"
```

而不是像這樣寫：

```
"test": "./node_modules/.bin/mocha test"
```

由於對npm腳本的唯一要求是腳本可以在shell中執行，因此它們不一定是Node腳本，並且可以在其中編寫任何可執行文件。

npm腳本的退出代碼也遵循shell腳本的規則。如果退出代碼不是`0`，則npm將假定腳本執行失敗。

## 3.通配符

由於npm腳本是Shell腳本，因此可以使用Shell通配符。

```
"lint": "jshint *.js"
"lint": "jshint **/*.js"
```

在上面的代碼中，`*`表示任何文件名，`**`表示任何子目錄。

如果要將通配符傳遞給原始命令以防止被Shell逸出，則必須逸出星號。

```
"test": "tap test/\*.js"
```

## 4.傳遞參數

使用`--`指示傳遞給npm腳本的參數。

```
"lint": "jshint **.js"
```

如果將參數傳遞給上述npm run lint命令，則必須編寫如下。

```
$ npm run lint --  --reporter checkstyle > checkstyle.xml
```

您也可以在中再次封裝命令`package.json`。

```
"lint": "jshint **.js",
"lint:checkstyle": "npm run lint -- --reporter checkstyle > checkstyle.xml"
```

## 5.執行順序

如果要在npm腳本中執行多個任務，則需要弄清執行順序。

如果是並行執行（並行並行執行），則可以使用＆符號。

```
$ npm run script1.js & npm run script2.js
```

如果是順序執行（僅在成功執行前一個任務時才執行下一個任務），則可以使用該`&&`符號。

```
$ npm run script1.js && npm run script2.js
```

這兩個符號是Bash的功能。另外，您可以使用節點的任務管理模塊：[script-runner](https://github.com/paulpflug/script-runner)，[npm-run-all](https://github.com/mysticatea/npm-run-all)，[redrun](https://github.com/coderaiser/redrun)。

## 6.默認值

通常，npm腳本由用戶提供。但是，npm為兩個腳本提供了默認值。換句話說，這兩個腳本無需定義即可直接使用。

```
"start": "node server.js"，
"install": "node-gyp rebuild"
```

在上述代碼中，默認值`npm run start`是`node server.js`，提供有一個`server.js`在項目的根目錄腳本; 默認值`npm run install`就是`node-gyp rebuild`，只要有一個`binding.gyp`項目的根目錄下的文件。

## 7.鉤子

npm腳本有兩個鉤子：`pre`和`post`。例如，`build`腳本命令的掛鉤是`prebuild`和`postbuild`。

```
"prebuild": "echo I run before the build script",
"build": "cross-env NODE_ENV=production webpack",
"postbuild": "echo I run after the build script
```

當用戶執行時，它將按以下順序自動執行`npm run build`。

```
npm run prebuild && npm run build && npm run postbuild
```

因此，可以在這兩個掛鉤中進行一些準備和清理。這是下面的例子。

```
"clean": "rimraf ./dist && mkdir dist",
"prebuild": "npm run clean",
"build": "cross-env NODE_ENV=production webpack"
```

Npm默認提供以下鉤子:

- 預發佈，後發佈
- 預安裝，後安裝
- preuninstall，postuninstall
- 前版本，後版本
- 前測，後測
- 穿越，後停
- 啟動前，記錄開始
- 重啟前，重啟後

自定義腳本命令也可以與`pre`和`post`掛鉤一起添加。例如，腳本命令`myscript`具有`premyscript`和`postmyscript`鉤子。但是，double pres和posts無效。例如，`prepretest`和`postposttest`是無效的。

在`npm_lifecycle_event`由npm提供的變量返回當前運行的腳本的名稱，如`pretest`，`test`，`posttest`，等。因此，您可以使用該變量為`npm scripts`同一腳本文件中的不同命令編寫代碼。讓我們看下面的例子。

```
const TARGET = process.env.npm_lifecycle_event;
if (TARGET === 'test') {
	console.log('Running the test task!');
}
if (TARGET === 'pretest') {
	console.log('Running the pretest task!');
}
if (TARGET === 'posttest') {
	console.log('Running the posttest task!');
}
```

> 請注意，prepublish掛鉤不僅將在npm publish命令之前運行，而且還將在npm install（不帶任何參數）命令之前運行。但是，這種行為很容易使用戶感到困惑，因此npm 4引入了一個prepare行為類似於的新鉤子prepublish。從npm 5開始，該prepublish鉤子只會在npm publish命令之前運行。

## 8.縮寫形式

這是四個常用npm腳本的簡短版本。

> - npm start 是短的 npm run start
> - npm stop 是短的 npm run stop
> - npm test 是短的 npm run test
> - npm restart 是短的 npm run stop && npm run restart && npm run start
>

`npm start`，`npm stop`和`npm restart`都是很好的理解，而`npm restart`是實際執行三個腳本命令的化合物命令：`stop`，`restart`，`start`。並且執行順序如下。

- 重新啟動
- 調動
- 停
- 郵件停止
- 重新開始
- 預啟動
- 開始
- 郵件開始
- 重啟後

## 9.變量

npm腳本具有非常強大的功能，可讓您使用npm的內部變量。

首先，npm腳本可以獲取`package.json`帶有`npm_package_`前綴的字段。例如，`package.json`下面是一個。

```json
{
	"name": "foo", 
	"version": "1.2.5",
	"scripts": {
		"view": "node view.js"
	}
}
```

然後，該變量`npm_package_name返回foo`，並且該變量`npm_package_version`返回`1.2.5`。

```
// view.js
console.log(process.env.npm_package_name); // foo
console.log(process.env.npm_package_version); // 1.2.5
```

在上面的代碼中，我們`package.json`通過環境變量`process.env`對象獲取的字段值。如果是`Bash`腳本，則可以使用`$npm_package_name`和獲得兩個值`$npm_package_version`。

該 `npm_package_`前綴也支持嵌套的`package.json`領域。

```json
"repository": {
	"type": "git",
	"url": "xxx"
},
scripts: {
	"view": "echo $npm_package_repository_type"
}
```

在上面的代碼中，您可以使用獲取字段的`type`屬性。`repositorynpm_package_repository_type`

這是另一個例子。

```json
"scripts": {
	"install": "foo.js"
}
```

在上面的代碼中，`npm_package_scripts_install`變量的值等於`foo.js`。

`npm config get xxx`也可以通過`npm_config_`前綴獲取npm的配置變量（命令返回的值）。例如，您可以使用獲取當前模塊的`release`標籤`npm_config_tag`。

```
"view": "echo $npm_config_tag",
```

請注意，環境變量可以覆蓋中的config對象package.json。

```json
{ 
	"name" : "foo",
	"config" : { "port" : "8080" },
	"scripts" : { "start" : "node server.js" }
}
```

在上面的代碼中，npm_package_config_port變量返回8080。並且可以通過以下方法覆蓋此值。

```
$ npm config set foo:port 80
```

env命令可以列出所有環境變量。

```
"env": "env"
```

## 10.常見腳本示例

```
// delete the directory
"clean": "rimraf dist/*",
// build an HTTP service locally
"serve": "http-server -p 9090 dist/",
// open the browser
"open:dev": "opener http://localhost:9090",
// real-time refresh
"livereload": "live-reload --port 9091 dist/",
// build an HTML file
"build:html": "jade index.jade > dist/index.html",
// Re-execute the build as long as the CSS file has changed.
"watch:css": "watch 'npm run build:css' assets/styles/",
// Re-execute the build as long as the HTML file has changed
"watch:html": "watch 'npm run build:html' assets/html",
// Deploy to Amazon S3.
"deploy:prod": "s3-cli sync ./dist/ s3://example-com/prod-site/",
// build favicon
"build:favicon": "node scripts/favicon.js",
```

## 11.使用nrm管理npm鏡像

nrm(npm registry manager)是npm的鏡像源管理工具，有時候國外資源太慢，使用這個就可以快速地在 npm 源間切換。

在命令行執行以下命令，全局安裝`nrm`。

```
npm install -g nrm
```

執行命令`nrm ls`查看可選的源。

![10分鐘內的Npm腳本教程!](https://codertw.com/wp-content/uploads/img/5jl3a68O73.jpg)

其中，帶`*`的是當前使用的源，上面的輸出表明當前源是taobao源。

如果要切換到cnpm源或者其他鏡像，您可以使用`nrm use 源名稱`進行切換：

```
nrm use cnpm
```

你可以增加定製的源，特別適用於添加企業內部的私有源，執行命令`nrm add <registry> <url>`，其中reigstry為源名，url為源的路徑。

```
nrm add registry http://registry.npm.frp.trmap.cn/
```

刪除，執行以下命令：

```
nrm del <registry> url
```

你還可以通過 `nrm test` 測試相應源的響應時間,從而決定使用哪種鏡像！

```
nrm test taobao
```

如果您感覺文章對您有幫助，請幫忙點個贊👍吧！謝謝！

🔗查看原文點擊👉[這裡](https://www.tutorialdocs.com/article/npm-scripts-tutorial.html)

本文使用 [mdnice](https://mdnice.com/?from=juejin) 排版

## 相關文章

[精講JavaScript的”switch”語句](https://codertw.com/程式語言/741970/)

[現代JavaScript教程—邏輯運算符](https://codertw.com/程式語言/741971/)

[基於vue3.0.1beta，搭建仿京東的電商H5項目！](https://codertw.com/程式語言/741972/)

[從基礎到進階（一），0～100道JavaScript題目，測試你有多瞭解JavaScript，刷新你的知識！🚀](https://codertw.com/程式語言/741973/)


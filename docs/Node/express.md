# 建立 express 專案起手式

## **安裝 Express-Generator**

------

這個指令是 Express 的命令工具，他可以很方便的一鍵初始化整個專案，首先 `npm install -g express-generator` 安裝全域中。

```bash
$ npm install -g express-generator # 在全域中建立 express 命令工具
$ express --version # 確認版本，是否有安裝完成
```

## **初始化專案**

------

安裝完成後就在桌面來初始化建立專案囉，前端的部分有許多模板引擎，模板引擎（Template Engine）是一個將頁面模板和數據結合起來生成 HTML 的工具，有下列幾個:

- -ejs
- -pug
- -hbs
- -hogan

```bash
$ express -f [專案名稱] // force on non-empty directory
$ express --view=ejs [專案名稱] // 使用一 ejs 作為 template
# 兩選一就可以 
```

## 啟動專案

```bash
$ npm install
$ npm run start # 預設為 3000 port 
```

> 這裡可以把  node ./bin/www 改為 nodemon ./bin/www 這樣子可以直執行專案，但前提是你需要安裝 nodemon 這個套件

參考文章
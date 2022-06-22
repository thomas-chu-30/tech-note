## 基礎

1. 切換檔案位子，查看清單

```shell
$ ls # 列出目前所在的清單
$ pwd # 確認目前所在路徑
$ cd [path | ..] # 切換到所在的檔案位子
```

2. 另一個比較特別的是看說你的檔案權限

```shell
$ ll
-rw-r--r--@  1 zhuzhengyang  staff    20K  7 16 16:44 2021 Trend of MLCC under 5G Era.jpg
```

3. 建立 folder 和刪除 folder

```shell
$ mkdir # 建立
$ rmdir # 刪除
```

## 進階

### tail

查看 log 時候用的

```shell
$ tail [-F | -f | -r] [-b number | -c number | -n number] [file ...]
```

多加一個 [-q] 為了在檢查多個文件時禁止打印標題。

```shell
$ tail [-F | -f | -r] [-q] [-b number | -c number | -n number] [file ...]
```

### curl 

透過 `terminal` 直接打 url，當成是 client 的一樣的去打 request

```shell
curl [option] [url]
```

[參考的 option](https://ss64.com/osx/curl.html)

### chown

https://blog.gtwang.org/linux/linux-chown-command-tutorial/



下列為查尋 command line 網站

https://ss64.com/osx/
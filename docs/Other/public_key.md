# 產生 ssh key



首先輸入指令來產生 key

```shell
$ ssh-keygen
```
接著會詢問產生的ssh key要存放的位置

這時選擇要放的位置 預設為 /home/username/.ssh/id_rsa

如果不同伺服器會使用不同的key 則改變key的位置 (例如： **/home/username/.ssh/id_rsa_ubuntu**)

```shell
id_rsa		id_rsa.pub <= 把這個東西打開	known_hosts 
```
```shell
cat id_rsa.pub
```

在把公 key copy 下來

## 參考文章

[產生SSH Key並且透過KEY進行免密碼登入](https://xenby.com/b/220-%E6%95%99%E5%AD%B8-%E7%94%A2%E7%94%9Fssh-key%E4%B8%A6%E4%B8%94%E9%80%8F%E9%81%8Ekey%E9%80%B2%E8%A1%8C%E5%85%8D%E5%AF%86%E7%A2%BC%E7%99%BB%E5%85%A5)




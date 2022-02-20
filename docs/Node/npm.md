
# Npm install

一開始在使用 npm 管理安裝套件時，一定會對於這兩者很困惑：

```shell
npm install packagename --save
```

與

```shell
npm install packagename --save-dev
```

究竟，這兩者有什麼樣的差異？

其實，我們可以從 package.json 看到差異：

![https://chriskang028.files.wordpress.com/2017/07/4132567561-573e6bffdc518_articlex-e1499253928925.png?w=461&h=527](https://chriskang028.files.wordpress.com/2017/07/4132567561-573e6bffdc518_articlex-e1499253928925.png?w=461&h=527)

可以看到分別有 *dependencies* 與 *devDependencies* 兩個節點，分別有裝入不同的套件。我們再回到前面的 *–save* 與 *–save-dev* 的兩個安裝指令，前者分別是指到 *dependencies* 與 *devDependencies* 下，後者則是只有寫入 *devDependencies* 下。所以執行 npm install 時，可以根據需求，使用不同的指令安裝。

至於根據什麼樣的需求呢？其實，這兩個的差異，關係到開發環境與發佈環境。下面分別列舉使用目的與原因：

1. *dependencies :* 使用在**已經發布**的環境下，換句話說，是指發布後仍然需要依賴使用的 plug-in。舉個例子來說，如果我需要使用 *jQuery* 與 *AngularJs* 來開發，就算開發完之後發佈到伺服器，我仍然需要依賴 *jQuery* 與 *AngularJs* 的套件，這些套件會在發布後繼續使用。**用法**：當我執行 *npm install –production* 或是註明 *NODE_ENV* 變量值为為 *production* 時，只會下載 *dependencies* 中的套件。
2. *devDependencies :* 使用在**開發中**的環境下，意思是指——只單純會在開發時應用到的 plug-in。同樣舉個例子，如果我在開發時需要使用 Js ES6 並使用 *babel* 轉換成 ES5，或是我希望可以使用 gulp-stylus 的套件來使用，但在發佈之後，我們並不會在用到 gulp-stylus 這個套件。換句話說，他只需要存在於開發環境中，而不需要繼續放到發布環境裏。**用法**：鍵入 *npm install* 時，會同時抓下來 *dependencies & devDependencies* 兩個節點之中的套件。

另外補充一點，如果發布之後仍然需要的套件，直接放在 *dependencies* 裏就行了，不需要同時間放在兩個地方，套用時會自動去調用 *dependencies* 地方的套件，功能不會受到影響。

希望這篇文章可以讓你弄懂 npm install 一些套件相依的觀念。



## 參考文章

https://chriskang028.wordpress.com/2017/07/05/%E5%BC%84%E6%87%82-npm-install-%E7%9A%84-dependencies-v-s-devdependencies/

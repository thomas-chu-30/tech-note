# encode decode

> 通常如果一樣東西需要編碼，說明這樣東西並不適合傳輸。原因多種多樣，如 Size 過大，包含隱私資料，**對於 Url 來說，之所以要進行編碼，是因為 Url 中有些字元會引起歧義。**
>
> 例如，url 引數字串中使用 key=value 鍵值對這樣的形式來傳參，鍵值對之間以&符號分隔，如/s?q=abc&ie=utf-8。如果你的 value 字串中包含了=或者&，那麼勢必會造成接收 Url 的伺服器解析錯誤，因此必須將引起歧義的&和=符號進行轉義，也就是對其進行編碼。

又如，url 的編碼格式採用的是 ASCII 碼，而不是 Unicode，這也就是說你不能在 Url 中包含任何非 ASCII 字元，例如中文。否則如果客戶端瀏覽器和服務端瀏覽器支援的字符集不同的情況下，中文可能會造成問題。

url 編碼的原則：就是使用安全的字元（沒有特殊用途或者特殊意義的可列印字元）去表示那些不安全的字元。
預備知識：URI 是統一資源標識的意思，通常我們所說的 URL 只是 URI 的一種。
典型 URL 的格式如下所示。下面提到的 URL 編碼，實際上應該指的是 URI 編碼。

```
  foo://example.com:8042/over/there?name=ferret#nose
  \__/ \_______________/\_________/\__________/\__/
   |           |             |          |        |
scheme     authority        path      query   fragment
```

## 哪些字元需要編碼

RFC3986 文件規定，**\*URL 中只允許包含英文字母（a-zA-Z）、數字（0-9）、-\_.~ 4 個特殊字元以及所有保留字元\***。RFC3986 文件對 Url 的編解碼問題做出了詳細的建議，指出了哪些字元需要被編碼才不會引起 Url 語義的轉變，以及對為什麼這些字元需要編碼做出了相應的解釋。

US-ASCII 字符集中沒有對應的可列印字元：Url 中只允許使用可列印字元。US-ASCII 碼中的 10-7F 位元組全都表示控制字元，這些字元都不能直接出現在 Url 中。同時，對於 80-FF 位元組（ISO-8859-1），由於已經超出了 US-ACII 定義的位元組範圍，因此也不可以放在 Url 中。

保留字元：URL 可以劃分成若干個元件，協議、主機、路徑等。有一些字元（:/?#[]@）是用作分隔不同元件的。

例如`：`冒號用於分隔協議和主機，`/`用於分隔主機和路徑，`?`用於分隔路徑和查詢引數，等等。還有一些字元（!$&'()\*+,;=）用於在每個元件中起到分隔作用的，如`=`用於表示查詢引數中的鍵值對，`&`符號用於分隔查詢多個鍵值對。**當元件中的普通資料包含這些特殊字元時，需要對其進行編碼。**

> RFC3986 中指定了以下字元為保留字元：**! \* ' ( ) ; : @ & = + $ , / ? # [ ]**

不安全字元：還有一些字元，當他們直接放在 URL 中的時候，可能會引起解析程式的歧義。這些字元被視為不安全字元，原因有很多。

-   空格：url 在傳輸的過程，或者使用者在排版的過程，或者文字處理程式在處理 url 的過程，都有可能引入無關緊要的空格，或者將那些有意義的空格給去掉。
-   引號以及`<>`：引號和尖括號通常用於在普通文字中起到分隔 url 的作用
-   \#：通常用於表示書籤或者錨點
-   %：百分號本身用作對不安全字元進行編碼時使用的特殊字元，因此本身需要編碼
-   {}|\^[]`~：某一些閘道器或者傳輸代理會篡改這些字元

需要注意的是，對於 Url 中的合法字元，編碼和不編碼是等價的，但是對於上面提到的這些字元，如果不經過編碼，那麼它們有可能會造成 Url 語義的不同。因此對於 url 而言，只有普通英文字元和數字，特殊字元$-\_.+!\*'()還有保留字元，才能出現在未經編碼的 url 之中。其他字元均需要經過編碼之後才能出現在 Url 中。

但是由於歷史原因，目前尚存在一些不標準的編碼實現。例如對於~符號，雖然 RFC3986 文件規定，對於波浪符號~，不需要進行 Url 編碼，但是還是有很多老的閘道器或者傳輸代理會進行編碼。

**URL 編碼遵循下列規則：** 每對 name/value 由&；符分開；每對來自表單的 name/value 由=符分開。如果使用者沒有輸入值給這個 name，那麼這個 name 還是出現，只是無值。任何特殊的字元（就是那些不是簡單的七位 ASCII，如漢字）將以百分符%用十六進位制編碼，當然也包括象 =,&；，和 % 這些特殊的字元。其實 url 編碼就是一個字元 ascii 碼的十六進位制。不過稍微有些變動，需要在前面加上“%”。比如“\”，它的 ascii 碼是 92，92 的十六進位制是 5c，所以“\”的 url 編碼就是%5c。那麼漢字的 url 編碼呢？很簡單，看例子：“胡”的 ascii 碼是-17670，十六進位制是 BAFA，url 編碼是“%BA%FA”。

防止 sql 注入。URL 編碼平時是用不到的，因為 IE 會自動將輸入到位址列的非數字字母轉換為 url 編碼。曾有人提出資料庫名字裡帶上“#”以防止被下載，因為 IE 遇到#就會忽略後面的字母。破解方法很簡單——用 url 編碼%23 替換掉#。也可以使用 “雙 URL 編碼”

## **URL 與 URI**

很多人會混淆這兩個名詞。
URL：(Uniform/Universal Resource Locator 的縮寫，統一資源定位符)。
URI：(Uniform Resource Identifier 的縮寫，統一資源識別符號)。

關係：
URI 屬於 URL 更低層次的抽象，一種字串文字標準。
就是說，URI 屬於父類，而 URL 屬於 URI 的子類。URL 是 URI 的一個子集。

二者的區別：URI 表示請求伺服器的路徑，定義這麼一個資源。而 URL 同時說明要如何訪問這個資源（http://）。

埠 與 URL 標準格式
何為埠？埠(Port)，相當於一種資料的傳輸通道。用於接受某些資料，然後傳輸給相應的服務，而電腦將這些資料處理後，再將相應的回覆通過開啟的埠傳給對方。
埠的作用：因為 IP 地址與網路服務的關係是一對多的關係。所以實際上因特網上是通過 IP 地址加上埠號來區分不同的服務的。
埠是通過埠號來標記的，埠號只有整數，範圍是從 0 到 65535。

## **URL 編碼**

為什麼要進行 URL 編碼？通常如果一樣東西需要編碼，說明這樣東西並不適合直接進行傳輸。

1、會引起歧義：例如 URL 引數字串中使用 key=value 這樣的鍵值對形式來傳參，鍵值對之間以 & 符號分隔，如 **?postid=5038412&t=1450591802326**，伺服器會根據引數串的 & 和 = 對引數進行解析，如果 value 字串中包含了 = 或者 & ，如寶潔公司的簡稱為 P&G，假設需要當做引數去傳遞，那麼可能 URL 所帶引數可能會是這樣 **?name=P&G&t=1450591802326**，因為引數中多了一個&勢必會造成接收 URL 的伺服器解析錯誤，因此必須將引起歧義的 & 和 = 符號進行轉義， 也就是對其進行編碼。

2、非法字元：又如，URL 的編碼格式採用的是 ASCII 碼，而不是 Unicode，這也就是說你不能在 URL 中包含任何非 ASCII 字元，例如中文。否則如果客戶端瀏覽器和服務端瀏覽器支援的字符集不同的情況下，中文可能會造成問題。

那麼如何編碼？如下：

### ~~escape (已被廢除)~~

首先想宣告的是，**W3C 把這個函式廢棄了，身為一名前端如果還用這個函式是要打臉的。**

escape 只是對字串進行編碼（而其餘兩種是對 URL 進行編碼），與 URL 編碼無關。編碼之後的效果是以 %XX 或者 %uXXXX 這種形式呈現的。它不會對 **ASCII 字元、數字 以及 @ \* / +** 進行編碼。

根據 MDN 的說明，escape 應當換用為 encodeURI 或 encodeURIComponent；unescape 應當換用為 decodeURI 或 decodeURIComponent。escape 應該避免使用。舉例如下：

```js
encodeURI("https://www.baidu.com/ a b c");
// "https://www.baidu.com/%20a%20b%20c"
encodeURIComponent("https://www.baidu.com/ a b c");
// "https%3A%2F%2Fwww.baidu.com%2F%20a%20b%20c"

//而 escape 會編碼成下面這樣，eocode 了冒號卻沒 encode 斜槓，十分怪異，故廢棄之
escape("https://www.baidu.com/ a b c");
// "https%3A//www.baidu.com/%20a%20b%20c"
```

### encodeURI

encodeURI() 是 Javascript 中真正用來對 URL 編碼的函式。它著眼於對整個 URL 進行編碼。

```javascript
encodeURI("http://www.cnblogs.com/season-huang/some other thing");
//"http://www.cnblogs.com/season-huang/some%20other%20thing";
```

編碼後變為上述結果，可以看到空格被編碼成了%20，而**斜槓 / ，冒號 :** 並沒有被編碼。是的，它用於對整個 URL 直接編碼，不會對 **ASCII 字母 、數字 、 ~ ! @ # $ & \* ( ) = : / , ; ? + ' 進行編碼。**

```javascript
encodeURI("~!@#$&*()=:/,;?+'");
// ~!@#$&*()=:/,;?+'
```

### encodeURIComponent

嘿，有的時候，我們的 URL 長這樣子，請求引數中帶了另一個 URL ：

```javascript
var URL = "http://www.a.com?foo=http://www.b.com?t=123&s=456";
```

直接進行 encodeURI 顯然是不行的。因為 encodeURI 不會對冒號 : 及斜槓 / 進行轉義，那麼就會出現上述所說的伺服器接受到之後解析會有歧義。

```javascript
encodeURI(URL);
// "http://www.a.com?foo=http://www.b.com?t=123&b=456"
```

這個時候，就該用到 encodeURIComponent() 。它的作用是對 URL 中的引數進行編碼，記住是對引數，而不是對整個 URL 進行編碼。

因為它僅僅不對 **ASCII 字母、數字 ~ ! \* ( ) ' 進行編碼。**

**錯誤的用法：**

```javascript
var URL = "http://www.a.com?foo=http://www.b.com?t=123&s=456";
encodeURIComponent(URL);
// "http%3A%2F%2Fwww.a.com%3Ffoo%3Dhttp%3A%2F%2Fwww.b.com%3Ft%3D123%26s%3D456"
// 錯誤的用法，看到第一個 http 的冒號及斜槓也被 encode 了
```

**正確的用法：encodeURIComponent() 著眼於對單個的引數進行編碼：**

```javascript
var param = "http://www.b.com?t=123&s=456"; // 要被編碼的引數
URL = "http://www.a.com?foo=" + encodeURIComponent(param);
//"http://www.a.com?foo=http%3A%2F%2Fwww.b.com%3Ft%3D123%26s%3D456"
```

## 參考資料

https://stackoverflow.com/questions/5450190/how-to-encode-the-plus-symbol-in-a-url

https://stackoverflow.com/questions/6855624/plus-sign-in-query-string

https://www.itread01.com/content/1547754501.html

https://dotblogs.com.tw/apprenticeworkshop/2018/12/09/About-URL-Encoding

# Regular 正規表達式

> 

## 初次見面

JavaScript 的正規式是一個內建的物件，其建構函數（Construction functoin）為 RegExp，典型用法如下：

```js
re = new RegExp("pattern", "flag") 
```

 上述用法也可以寫成：

```js
 re = /pattern/flag 
```

其中，pattern 代表以正規表示法來顯示的字串，flag 則是比對的方式。flag 的值可能有三種，分別解釋如下：

- g：全域比對（Global match）
- i：忽略大小寫（Ignore case）
- gi：全域比對並忽略大小寫



## 快束了解正規表示式

| 正規式        | 說明及範例                                                   | 比對不成立之字串         |
| ------------- | ------------------------------------------------------------ | ------------------------ |
| /a/           | 含字母 "a" 的字串，例如 "ab", "bac", "cba"                   | "xyz"                    |
| /a./          | 含字母 "a" 以及其後任一個字元的字串，例如 "ab", "bac"（若要比對.，請使用 \.） | "a", "ba"                |
| /^xy/         | 以 "xy" 開始的字串，例如 "xyz", "xyab"（若要比對 ^，請使用 \^） | "axy", "bxy"             |
| /xy$/         | 以 "xy" 結尾的字串，例如 "axy", "abxy"以 "xy" 結尾的字串，例如 "axy", "abxy" （若要比對 $，請使用 \$） | "xya", "xyb"             |
| [13579]       | 包含 "1" 或 "3" 或 "5" 或 "7" 或 "9" 的字串，例如："a3b", "1xy" | "y2k"                    |
| [0-9]         | 含數字之字串                                                 | 不含數字之字串           |
| [a-z0-9]      | 含數字或小寫字母之字串                                       | 不含數字及小寫字母之字串 |
| [a-zA-Z0-9]   | 含數字或字母之字串                                           | 不含數字及字母之字串     |
| b[aeiou]t     | "bat", "bet", "bit", "bot", "but"                            | "bxt", "bzt"             |
| [^0-9]        | 不含數字之字串（若要比對 ^，請使用 \^）                      | 含數字之字串             |
| [^aeiouAEIOU] | 不含母音之字串（若要比對 ^，請使用 \^）                      | 含母音之字串             |
| [^\^]         | 不含 "^" 之字串，例如 "xyz", "abc"                           | "xy^", "a^bc"            |



## 使用方式說明

| 分類 | 種類           |
| ---- | -------------- |
| 字元 | . ？ * + \| .* |
| \D   | ^ $ \          |
| \w   | () [] -        |

### .【點】

簡單來說，點可以代替所有可能的字元（字母、數字或符號）。

比如使用「**.GC**」，可以匹配的搜尋結果包括U**GC**（User Generated Content）、O**GC**（Occupationally Generated Content）、P**GC**（Professionally Generated Content）或是2**GC**、n**GC**等。

### ?【問號】

問號代表的意思是，比對前一個字串或是不比對。比如你在輸入facebook的時候可能不小心book少了一個o，那你使用規則運算式**facebo?k**，可能匹配的結果包括faceb**oo**k（包括o）、face**bo**k（不包括o）。

### ＊【星號】

星號表示比對前一個字串零次或是多次。比方你輸入的「sk**y\***blue」時，星好前面的字元為[y]，因此搜尋結果會出現**skblue**（y出現零次）、sk**y**blue（y出現一次）、sk**yyyy**blue（y出現很多次）。

### + 【加號】

加號跟星號類似，差別在於它至少要與前一個字比對一次或以上。以上一個例子「sky*blue」來說，搜尋結果可能會出現「skblue」，但因為加號強制在前面的符號至少要比對一次，因此如果輸入「**sky+blue**」，就一定會出現至少一次y：「sk**y**blue」，其他可能的結果跟輸入星號一樣。

### ｜【直線】

跟使用google搜尋引擎類似，規則運算式也有代表「或者」的符號，就是直線。比如你想要搜尋整個網站跟Facebook、Instagram、Wordpress、Google有關的文章之流量，你就可以使用 **Facebook｜Instagram｜Wordpress｜Google** 這樣的進階搜尋，為你想要的結果一次一網打盡。

又或者你有不同的產品，在網址的結尾分別使用thank**s**或是thank**you**，那麼你也可以用/productname-thank **（s｜kyou）**，一次查看完成產品購買的使用者的資訊。

### ＾ 【插入符號】 $【錢字符號】

^插入符號是比對前開頭，$錢字符號則是比對結尾。

比如你輸入的搜尋條件是 **^eat**，那麼你會搜尋到的結果會有**eat**、**eat**en；如果是**eat$**，那麽搜尋到的結果可能是cr**eat**、p**eat**、l**eat**。如果你只想要搜尋eat這個字，那麼可以使用**^eat＄**，這將只鎖定符合「eat」的這個搜尋結果

### \ 【反斜線】

將任何特殊字元，恢復成一般字元。

可能在搜尋特定網址的時候裡面有一個點或者是查找IP的時候也有一個點，可是這個點同時又在規則運算式裡面有它自己的功能，為了要讓這個點不受到規則運算的影響（不要使用規則運算裡「點」的功能），此時就需要反斜線的幫助。

比如我想找**transbiz.com**但如果只輸入transbiz.com的時候可能會出現的搜尋結果包括transbiz**k**com、transbiz**z**com、transbiz**c**com⋯⋯所以為了更精準地找到你想要的結果，在規則運算式裡輸入「**transbiz\.com**」，就會出現transbiz.com了。

### ( ) 【括號】

括號簡單來說就是把你想要找的相關字詞放在括號裡面，它就會依照括號裡面的字元排序為你找到可能的結果。比如 (sym)，你可能搜尋到的結果可能有**sym**pathy、**sym**bol、as**sym**等。

而在使用上它常常會和｜（直線）一起搭配使用，比如 **sy(m｜n)**，你可能就會找到**syn**drome。

### ] 【中括號】

任意比對字串中裡面的每個項目。比如你設定**[DEFG]**，那麼就會為你找出含有DEFG的相關內容，比如產品類別有A到Z，但你想看DEFG這幾個商品類別的表現，那麼就可以用product[DEFG]找到你要的商品：prdocut**D**、prdocut**E**、prdocut**F**、prdocut**G**。

### – 【破折號】

常常會和中括號[]一起使用，比如product **[A-K]**, product **[3-9]** 就可以分別叫出編號A到K、編號3到9的商品。



## 常用範例

- IPv4

```js
/^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$/
```

- MAC _ IEEE 802 MAC-48 標準格式 _ 6 組由 `:` 或 `-` 做區隔的雙位數 16 進制數字

```js
/^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/
```

- 驗證使用者帳號，第一個字不為數字，只接受 大小寫字母、數字及底線

```js
/^[a-zA-Z]\w*$/
```



## Mail

An email is a string (a subset of ASCII characters) separated into two parts by @ symbol. a "personal_info" and a domain, that is personal_info@domain. The length of the personal_info part may be up to 64 characters long and domain name may be up to 253 characters.

The personal_info part contains the following ASCII characters.

- Uppercase (A-Z) and lowercase (a-z) English letters.
- Digits (0-9).
- Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
- Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.

The domain name [for example com, org, net, in, us, info] part contains letters, digits, hyphens, and dots.

**Example of valid email id**

- mysite@ourearth.com
- my.ownsite@ourearth.org
- mysite@you.me.net

**Example of invalid email id**

- mysite.ourearth.com [@ is not present]
- mysite@.com.my [ tld (Top Level domain) can not start with dot "." ]
- @you.me.net [ No character before @ ]
- mysite123@gmail.b [ ".b" is not a valid tld ]
- mysite@.org.org [ tld can not start with dot "." ]
- .mysite@mysite.org [ an email should not be start with "." ]
- mysite()*@gmail.com [ here the regular expression only allows character, digit, underscore, and dash ]
- mysite..1234@yahoo.com [double dots are not allowed]

**JavaScript code to validate an email id**

```javascript
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
```

To get a valid email id we use a regular expression `/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/`. According to [http://tools.ietf.org/html/rfc3696#page-5](https://tools.ietf.org/html/rfc3696#page-5) ! # $ % & ‘ * + – / = ? ^ ` . { | } ~ characters are legal in the local part of an e-mail address but in the above regular expression those characters are filtered out. You can modify or rewrite the said regular expression.

[w3resource 提供的 validate](https://www.w3resource.com/javascript/form/email-validation.php)

> RFC 822 
>
> RFC 822是電子郵件的標準格式，電子郵件除了是由一個Internet用戶傳遞給另一個用戶的信息之外，還必須包含附加的服務信息，這兩個部分加在一起叫做電子郵件的標準格式，外文簡稱RFC 822.
>
> regular 參考
>
> ```js
> /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|
> \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|
> \[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:
> (?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
> ```



## 工具網站

- [iHateRegex](https://ihateregex.io) 查詢常用的正規表示式
- [RegExr - Regular Expression Online](http://regexr.com) 線上測試正規表示式
- [JavaScript Regular Expression Visualizer](https://jex.im/regulex/) 視覺化呈現正規表示式的規則路徑

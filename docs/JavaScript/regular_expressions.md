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



## 正規表示式說明

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



| 正規表示法的特定字元 | 說明             | 等效的正規表示法 |
| -------------------- | ---------------- | ---------------- |
| \d                   | 數字             | [0-9]            |
| \D                   | 非數字           | [^0-9]           |
| \w                   | 數字、字母、底線 | [a-zA-Z0-9_]     |
| \W                   | 非 \w            | [^a-zA-Z0-9_]    |
| \s                   | 空白字元         | [ \r\t\n\f]      |
| \S                   | 非空白字元       | [^ \r\t\n\f]     |



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
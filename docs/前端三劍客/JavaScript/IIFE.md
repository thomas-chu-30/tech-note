# IIFE

> IIFE (Immediately Invoked Function Expression) 是一個定義完馬上就執行的 JavaScript function (en-US)。使用Grouping Operator (en-US) () 包起來的 anonymous function。這樣的寫法可以避免裡面的變數污染到 global scope。

Function 轉換為 expression 形式，並且馬上執行，function scope 內的變數在外面是無法存取的。

```javascript
const result = (function () {
    var name = "Barry";
    return name;
})();
// Immediately creates the output:
console.log(result); // "Barry"
```

可能的使用情況，本身的 object 需要 function 去處理資料，直接 return 值出來使用。

```javascript
const a = {
    b: (function(){ 
        return 'thomas'
    })(),
    c: (()=>{
        return 'john'
    })()
}

console.log(a.b, a.c) // thomas john
```

async function 版本

```javascript
const a = {
    b: ( async function(){ 
        return 'thomas'
    })(),
    c: ( async ()=>{
        return 'john'
    })()
}
```

直接傳遞參數

```javascript
(function(name){ 
    return name
})('thomas'),

// thomas
```


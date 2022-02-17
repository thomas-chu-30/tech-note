# Jest | 測試設置分類（describe）及作用域（scoping）



在測試中，執行範圍會影響到的除了變數外還有另外幾個 `Jest` 提供的函式：

1. `beforeAll` ：所在區域內會第一個執行。
2. `beforeEach` ：每一次的測試前會先執行。
3. `afterAll` ：所在區域內最後一個執行。
4. `afterEach` ：每一次的測試後會馬上執行。

可由以下例子更清楚它們的執行順序：

## 參考文章

[Jest | 測試設置分類（describe）及作用域（scoping）](https://medium.com/enjoy-life-enjoy-coding/unit-test-%E6%9B%BF%E6%B8%AC%E8%A9%A6%E8%A8%AD%E7%BD%AE%E5%88%86%E9%A1%9E-describe-%E5%8F%8A%E4%BD%9C%E7%94%A8%E5%9F%9F-scoping-2c5082266ca)
---
sidebar_position: 1
---

# Guides

## 名詞解釋

| 名稱                                     | 內容                                                                                                                                                                                                  |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SUT](http://xunitpatterns.com/SUT.html) | System Under Test，就是待測物。舉例來說，當我們在寫 Unit Test，SUT 往往就是 Class，那個我們要測試的 Class                                                                                             |
| [DOC](http://xunitpatterns.com/DOC.html) | Depended-On Component，SUT 所依賴的元件，也就是 Mock, Stub ..想要抽換掉的元件。<br />把這些相依性抽換成我們可以控制的狀態，以專注去測試 SUT。                                                         |
| test fixture                             | 測試的時候特意準備的東西，讓測試可以順利跑完所需要，有些人會叫做 test context。<br />舉例來說，一組測試用的資料。                                                                                     |
| control point                            | 用 control point 來操作 SUT，有些 control point 只是為了測試而存在。<br />舉例來說，某個 class 開了純為測試存在的 API，這種 control point 當然不能在產品裡面使用。                                    |
| indirect input                           | 改變 SUT 的數值，並非直接來自我們的操作，而是來自於 DOC。<br />好比我們對一個物件呼叫 `updateName`，然後物件去問另外一個資料庫物件，取得了在資料庫裡面的數值來更新自己                                |
| indirect output                          | 當 SUT 的一些狀態改變了，而我們沒有辦法透過直接的 API 去取得改變的狀態。<br />可是，它同時也會影響到其他元件的狀態，後面這些能被觀察的狀態，<br />就是 indirect output。這與後面的 Mock object 有關。 |
| Test double                              | 這個字不好翻譯，double 當作名詞有「替身」的意思，<br />Test Double 就是我們要拿來替換掉真實運作的 DOC 的物件們，得到一個更簡單，可以測試的環境。                                                      |

## Test Double

自動化測試中，我們常會使用一些經過簡化的，行為與表現類似於生產環境下的對象的複製品。引入這樣的複製品能夠降低構建測試用例的複雜度，允許我們獨立而解耦地測試某個模塊，不再擔心受到系統中其他部分的影響；這類型對像也就是所謂的 Test Double。實際上對於 Test Double 的定義與闡述也是見仁見智，Gerard Meszaros 在[這篇文章](https://link.zhihu.com/?target=http%3A//xunitpatterns.com/Test%20Double.html)中就介紹了五個不同的 Double 類型；而人們更傾向於使用 Mock 來統一描述不同的 Test Doubles。不過對於 Test Doubles 實現的誤解還是可能會影響到測試的設計，使測試用例變得混亂和脆弱，最終帶來不必要的重構。

大致能夠把 Test double 分成以下幾種

![](https://jchu.cc/2018/08/16-test/test_double.svg)

測試的過程，可用以下這圖說明一下

![](https://jchu.cc/2018/08/16-test/test_flow.svg)

1. Setup，生成 Test double 來取代 DOC，並準備好 Fixture 方便接下來的測試
2. 初始化 SUT，通常就是建構一個 object
3. Exercise，執行測試。這時候 SUB 還可能會去跟 Test double 去要一些數值
4. Verify，確認執行完的結果是否無誤
5. Teardown，把之前測試過程產生的東西給清乾淨

### Test Stub

**提供 indirect input 給 SUT 的 Test double**

![](https://jchu.cc/2018/08/16-test/test_stub.svg)

舉例來說，我們要測試登入用的程式是不是有正常運作。SUT 就是登入用的主程式，塞了一個假的 Network 物件給他，只要對 Network 物件下 `GET` 總是回傳 200 OK。這個 Network 物件就是 Stub。

> Stub is an object that holds predefined data and uses it to answer calls during tests. It is used when we cannot or don’t want to involve objects that would answer with real data or have undesirable side effects.Stub 代指那些包含了预定义好的数据并且在测试时返回给调用者的对象。Stub 常被用于我们不希望返回真实数据或者造成其他副作用的场景。

Stub 的典型应用场景即是当某个对象需要从数据库抓取数据时，我们并不需要真实地与数据库进行交互或者像 Fake 那样从内存中抓取数据，而是直接返回预定义好的数据。

### Test Spy

**就是能力更強，有記錄功能的 Test Stub，提供 indirect input 給 SUT 的 Test double**

![](https://jchu.cc/2018/08/16-test/test_spy.svg)

以前面的例子來說，在驗證的階段，可能還想要知道這個 Network 物件的 API 被呼叫了幾次，有沒有使用到錯的 end-point？能夠告訴我們這些資訊的，就是 Test Spy。

### Mock Object

**就是帶有判斷功能的 Stub，判斷 SUT 是不是正確地使用這個 DOC**

![](https://jchu.cc/2018/08/16-test/test_mock.svg)

前面的 Spy 是看最後有沒有正確的 indirect output。但也有可能，最後的結果是對的，中間的順序錯了。好比說呼叫 web api 的順序是不是正確的？這時候我們需要在 Test double 裡面偷看實作的運作。Mock Object 就會在被使用的過程中，擁有檢查的邏輯。

> Mocks are objects that register calls they receive. In test assertion we can verify on Mocks that all expected actions were performed.Mocks 代指那些仅记录它们的调用信息的对象，在测试断言中我们需要验证 Mocks 被进行了符合期望的调用。

当我们并不希望真的调用生产环境下的代码或者在测试中难于验证真实代码执行效果的时候，我们会用 Mock 来替代那些真实的对象。典型的例子即是对邮件发送服务的测试，我们并不希望每次进行测试的时候都发送一封邮件，毕竟我们很难去验证邮件是否真的被发出了或者被接收了。我们更多地关注于邮件服务是否按照我们的预期在合适的业务流中被调用，其概念如下图所示：

**就是帶有判斷功能的 Stub，判斷 SUT 是不是正確地使用這個 DOC**

前面的 Spy 是看最後有沒有正確的 indirect output。但也有可能，最後的結果是對的，中間的順序錯了。好比說呼叫 web api 的順序是不是正確的？這時候我們需要在 Test double 裡面偷看實作的運作。Mock Object 就會在被使用的過程中，擁有檢查的邏輯。

### Fake Object

**就是提供比較簡單、輕量實作的 DOC**

![](https://jchu.cc/2018/08/16-test/test_fake.svg)

Fake Object 不在意 Indirect input 也不在意 indirect output，只專心地滿足自己的介面。

前述的幾個物件，要嘛是專門提供假的固定值(Stub)，要嘛是有檢查的功能。Fake 物件就是一個簡化過 DOC，有著一樣的介面但是實作都很簡單，譬如說是個 In-memory 的資料庫物件，用起來像是真正的資料庫，但是操作沒有 disk IO，而且資料可能是我們寫好的 fixture。

> Fakes are objects that have working implementations, but not same as production one. Usually they take some shortcut and have simplified version of production code.Fake 是那些包含了生产环境下具体实现的简化版本的对象。

如下图所示，Fake 可以是某个 Data Access Object 或者 Repository 的基于内存的实现；该实现并不会真的去进行数据库操作，而是使用简单的 HashMap 来存放数据。这就允许了我们能够在并没有真的启动数据库或者执行耗时的外部请求的情况下进行服务的测试。

### Dummy Object

**用來填充的無用物件，只是為了滿足 API 的介面**

建構一個物件，或是呼叫一個方法的時候，有時候需要傳入一些物件當作參數，而我們知道這些物件完全不會被使用到，但是為了要滿足介面，成功編譯，塞進去的填充物就是 Dummy Object。

> 測試的時候可以只針對一個 file 去作測試，只需要指定路徑
>
> ```shell
> npm run test -- src/app/components/header/header-right/header-right.component.spec.ts
> ```

## 測試設置分類（describe）及作用域（scoping）

在測試中，執行範圍會影響到的除了變數外還有另外幾個 `Jest` 提供的函式：

1. `beforeAll` ：所在區域內會第一個執行。
2. `beforeEach` ：每一次的測試前會先執行。
3. `afterAll` ：所在區域內最後一個執行。
4. `afterEach` ：每一次的測試後會馬上執行。

可由以下例子更清楚它們的執行順序：

```js
beforeAll(() => {
    console.log("全域 beforeAll ：全域的第一個順序執行");
});
beforeEach(() => {
    console.log("全域 beforeEach ：每次測試前都會執行，優先度大於區域的");
});
afterAll(() => {
    console.log("全域 afterAll ：全域的最後一個順序執行");
});
afterEach(() => {
    console.log("全域 afterEach ：每次測試後都會執行，優先度低於區域的");
});

describe("Test", () => {
    beforeAll(() => {
        console.log("區域 beforeAll ：區域的第一個順序執行");
    });
    beforeEach(() => {
        console.log("區域 beforeEach ：每次測試前都會執行，優先度低於全域的");
    });
    afterAll(() => {
        console.log("區域 afterAll ：區域的最後一個順序執行");
    });
    afterEach(() => {
        console.log("區域 afterEach ：每次測試後都會執行，優先度大於全域的");
    });

    test("Test1", () => {
        expect(true).toBe(true);
    });

    test("Test1", () => {
        expect(3).toBe(3);
    });
});
```

![image](https://miro.medium.com/max/1400/1*atbUx-IqZaj7E_iz6KLrxw.png)

## Mock Function

### 為什麼要使用 Mock 函數？

在項目中，一個模塊的方法內常常會去調用另外一個模塊的方法。在單元測試中，**我們可能並不需要關心內部調用的方法的執行過程和結果，只想知道它是否被正確調用即可**，甚至會指定該函數的返回值。此時，使用 Mock 函數是十分有必要。

Mock 函數提供的以下三種特性，在我們寫測試代碼時十分有用：

-   捕獲函數調用情況
-   設置函數返回值
-   改變函數的內部實現

### jest.fn()

jest.fn()是創建 Mock 函數最簡單的方式，如果沒有定義函數內部的實現，jest.fn()會返回 undefined 作為返回值。

```js
// functions.test.js

test("测试jest.fn()调用", () => {
    let mockFn = jest.fn();
    let result = mockFn(1, 2, 3);

    // 断言mockFn的执行后返回undefined
    expect(result).toBeUndefined();
    // 断言mockFn被调用
    expect(mockFn).toBeCalled();
    // 断言mockFn被调用了一次
    expect(mockFn).toBeCalledTimes(1);
    // 断言mockFn传入的参数为1, 2, 3
    expect(mockFn).toHaveBeenCalledWith(1, 2, 3);
});
```

jest.fn()所創建的 Mock 函數還可以設置返回值，定義內部實現或返回 Promise 對象。

```js
// functions.test.js

test("测试jest.fn()返回固定值", () => {
    let mockFn = jest.fn().mockReturnValue("default");
    // 断言mockFn执行后返回值为default
    expect(mockFn()).toBe("default");
});

test("测试jest.fn()内部实现", () => {
    let mockFn = jest.fn((num1, num2) => {
        return num1 * num2;
    });
    // 断言mockFn执行后返回100
    expect(mockFn(10, 10)).toBe(100);
});

test("测试jest.fn()返回Promise", async () => {
    let mockFn = jest.fn().mockResolvedValue("default");
    let result = await mockFn();
    // 断言mockFn通过await关键字执行后返回值为default
    expect(result).toBe("default");
    // 断言mockFn调用后返回的是Promise对象
    expect(Object.prototype.toString.call(mockFn())).toBe("[object Promise]");
});
```

### jest.mock()

fetch.js 文件夾中封裝的請求方法可能我們在其他模塊被調用的時候，並不需要進行實際的請求（請求方法已經通過單側或需要該方法返回非真實數據）。此時，使用 jest.mock(）去 mock 整個模塊是十分有必要的。

下面我們在 src/fetch.js 的同級目錄下創建一個 src/events.js。

```js
// events.js

import fetch from "./fetch";

export default {
    async getPostList() {
        return fetch.fetchPostsList((data) => {
            console.log("fetchPostsList be called!");
            // do something
        });
    },
};
```

functions.test.js 中的测试代码如下：

```js
// functions.test.js

import events from "../src/events";
import fetch from "../src/fetch";

jest.mock("../src/fetch.js");

test("mock 整个 fetch.js模块", async () => {
    expect.assertions(2);
    await events.getPostList();
    expect(fetch.fetchPostsList).toHaveBeenCalled();
    expect(fetch.fetchPostsList).toHaveBeenCalledTimes(1);
});
```

在測試代碼中我們使用了 jest.mock('../src/fetch.js')去 mock 整個 fetch.js 模塊。如果註釋掉這行代碼，執行測試腳本時會出現以下報錯信息

### jest.spyOn()

**jest.spyOn()方法同樣創建一個 mock 函數，但是該 mock 函數不僅能夠捕獲函數的調用情況，還可以正常的執行被 spy 的函數。實際上，jest.spyOn()是 jest.fn()的語法糖，它創建了一個和被 spy 的函數具有相同內部代碼的 mock 函數。**
上圖是之前 jest.mock()的示例代碼中的正確執行結果的截圖，從 shell 腳本中可以看到 console.log('fetchPostsList be called!');這行代碼並沒有在 shell 中被打印，這是因為通過 jest.mock()後，模塊內的方法是不會被 jest 所實際執行的。這時我們就需要使用 jest.spyOn()。

```js
// functions.test.js

import events from "../src/events";
import fetch from "../src/fetch";

test("使用jest.spyOn()监控fetch.fetchPostsList被正常调用", async () => {
    expect.assertions(2);
    const spyFn = jest.spyOn(fetch, "fetchPostsList");
    await events.getPostList();
    expect(spyFn).toHaveBeenCalled();
    expect(spyFn).toHaveBeenCalledTimes(1);
});
```

> 這篇文章中我們介紹了 jest.fn(),jest.mock()和 jest.spyOn()來創建 mock 函數，通過 mock 函數我們可以通過以下三個特性去更好的編寫我們的測試代碼：通過 mock 函數我們可以通過以下三個特性去更好的編寫我們的測試代碼：
>
> -   捕獲函數調用情況
> -   設置函數返回值
> -   改變函數的內部實現
>
> 在實際項目的單元測試中，jest.fn()常被用來進行某些有回調函數的測試；jest.mock()可以 mock 整個模塊中的方法，當某個模塊已經被單元測試 100%覆蓋時，使用 jest.mock()去 mock 該模塊，節約測試時間和測試的冗餘度是十分必要；當需要測試某些必須被完整執行的方法時，常常需要使用 jest.spyOn()。這些都需要開發者根據實際的業務代碼靈活選擇。

---

## 覺得神奇的部分

目前寫起來 angular 在 run jest test 的時候，它會覺得是在 `browser` 端，這個覺得有一點點奇怪

## 參考文章

[Jest | 測試設置分類（describe）及作用域（scoping）](https://medium.com/enjoy-life-enjoy-coding/unit-test-%E6%9B%BF%E6%B8%AC%E8%A9%A6%E8%A8%AD%E7%BD%AE%E5%88%86%E9%A1%9E-describe-%E5%8F%8A%E4%BD%9C%E7%94%A8%E5%9F%9F-scoping-2c5082266ca)

[jest 測試入門](https://www.jianshu.com/p/70a4f026a0f1)

[測試中常見的名詞](https://jchu.cc/2018/08/16-test.html)

[讀 Jest Doc - 測試替身](https://dwatow.github.io/2020/04-24-jest/jest-doc-5/)

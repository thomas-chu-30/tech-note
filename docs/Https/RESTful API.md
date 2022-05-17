# RESTful API-設計規範

## URL設計

### 動詞+賓語

RESTful的核心思想就是，客戶端發出的數據+操作指令都是“動詞+賓語”的結構，比如`GET /articles`這個命令，GET是動詞，/articles是賓語，動詞通常就有5種HTTP請求方法，對應CRUD操作，根據HTTP 規範，動詞一律大寫。

```jsx
# GET：讀取（Read）
# POST：新建（Create）
# POST：新建（Create）
# PATCH：更新（Update），通常是部分更新
# DELETE：刪除（Delete）
```

### 動詞的覆蓋

有些客戶端只能使用GET和POST這兩種方法。服務器必須接受POST模擬其他三個方法（PUT、PATCH、DELETE）。這時，客戶端發出的 HTTP 請求，要加上`X-HTTP-Method-Override`屬性，告訴服務器應該使用哪一個動詞，覆蓋POST方法。

```jsx
POST /api/Person/4 HTTP/1.1
X-HTTP-Method-Override: PUT
```

上面代碼中，X-HTTP-Method-Override指定本次請求的方法是PUT，而不是POST。

### 賓語必須是名詞

賓語就是 API 的 URL，是 HTTP 動詞作用的對象。它應該是名詞，不能是動詞。比如，/articles這個 URL 就是正確的，而下面的 URL 不是名詞，所以都是錯誤的。

```jsx
# /getAllCars
# /createNewCar
# /deleteAllRedCars
```

### 複數 URL

既然 URL 是名詞，那麼應該使用複數，還是單數？這沒有統一的規定，但是常見的操作是讀取一個集合，比如GET /articles（讀取所有文章），這裡明顯應該是複數。

Note ⇒ 為了統一起見，建議都使用複數 URL，比如GET /articles/2要好於GET /article/2。

### 避免多級 URL

常見的情況是，資源需要多級分類，因此很容易寫出多級的 URL，比如獲取某個作者的某一類文章。

```jsx
# GET /authors/12/categories/2
```

這種 URL 不利於擴展，語義也不明確，往往要想一會，才能明白含義。

更好的做法是，除了第一級，其他級別都用查詢字符串表達。

```jsx
# GET /authors/12?categories=2  //good
```

下面是另一個例子，查詢已發布的文章。你可能會設計成下面的 URL。

```jsx
# GET /articles/published
```

查詢字符串的寫法明顯更好

```jsx
# GET /articles?published=true  //good
```

## 狀態碼

### **狀態碼必須精確**

客戶端的每一次請求，服務器都必須給出回應。回應包括 HTTP 狀態碼和數據兩部分。

[HTTP 狀態碼]

```jsx
1xx：相關信息
2xx：操作成功
3xx：重定
4xx：客戶端錯誤
5xx：服務器錯誤
```

這五大類總共包含100多種狀態碼，覆蓋了絕大部分可能遇到的情況。每一種狀態碼都有標準的（或者約定的）解釋，客戶端只需查看狀態碼，就可以判斷出發生了什麼情況，所以服務器應該返回盡可能精確的狀態碼。

API 不需要1xx狀態碼，下面介紹其他四類狀態碼的精確含義。

### **2XX狀態碼**

200狀態碼表示操作成功，但是不同的方法可以返回更精確的狀態碼。

```jsx
# GET: 200 OK
# POST: 201 Created
# PUT: 200 OK
# PATCH: 200 OK
# DELETE: 204 No Content  //已經不存在
```

上面代碼中，POST返回201狀態碼，表示生成了新的資源；DELETE返回204狀態碼，表示資源已經不存在。

此外，202 Accepted狀態碼表示服務器已經收到請求，但還未進行處理，會在未來再處理，通常用於異步操作。下面是一個例子。

```jsx
HTTP/1.1 202 Accepted
{ "task": { "href": "/api/company/job-management/jobs/2130040", "id": "2130040" }
}
```

### 3xx 狀態碼

API 用不到301狀態碼（永久重定向）和302狀態碼（暫時重定向，307也是這個含義），因為它們可以由應用級別返回，瀏覽器會直接跳轉，API 級別可以不考慮這兩種情況。

API 用到的3xx狀態碼，主要是303 See Other，表示參考另一個 URL。它與302和307的含義一樣，也是"暫時重定向"，區別在於302和307用於GET請求，而303用於POST、PUT和DELETE請求。收到303以後，瀏覽器不會自動跳轉，而會讓用戶自己決定下一步怎麼辦。

下面是一個例子。

```jsx
HTTP/1.1 303 See Other
Location: /api/orders/12345
```

### 4xx 狀態碼

4xx狀態碼表示客戶端錯誤，主要有下面幾種。

- 400 Bad Request：服務器不理解客戶端的請求，未做任何處理。
- 401 Unauthorized：用戶未提供身份驗證憑據，或者沒有通過身份驗證。
- 403 Forbidden：用戶通過了身份驗證，但是不具有訪問資源所需的權限。
- 404 Not Found：所請求的資源不存在，或不可用。
- 405 Method Not Allowed：用戶已經通過身份驗證，但是所用的 HTTP 方法不在他的權限之內。
- 410 Gone：所請求的資源已從這個地址轉移，不再可用。
- 415 Unsupported Media Type：客戶端要求的返回格式不支持。比如，API 只能返回 JSON 格式，但是客戶端要求返回 XML 格式。
- 422 Unprocessable Entity ：客戶端上傳的附件無法處理，導致請求失敗。
- 429 Too Many Requests：客戶端的請求次數超過限額。

### **5xx** 狀態碼

5xx狀態碼表示服務端錯誤。一般來說，API 不會向用戶透露服務器的詳細信息，所以只要兩個狀態碼就夠了。

- 500 Internal Server Error：客戶端請求有效，服務器處理時發生了意外。
- 503 Service Unavailable：服務器無法處理請求，一般用於網站維護狀態。

## 服務器回應

### **不要纯本文**

API 返回的數據格式，不應該是純文本，而應該是一個 JSON 對象，因為這樣才能返回標準的結構化數據。所以，服務器回應的 HTTP 頭的Content-Type屬性要設為application/json。

客戶端請求時，也要明確告訴服務器，可以接受 JSON 格式，即請求的 HTTP 頭的ACCEPT屬性也要設成application/json。下面是一個例子。

```jsx
GET /orders/2 HTTP/1.1 
Accept: application/json
```

### 發生錯誤時，不要返回 200 狀態碼

有一種不恰當的做法是，即使發生錯誤，也返回200狀態碼，把錯誤信息放在數據體裡面，就像下面這樣。

```jsx
HTTP/1.1 200 OK
Content-Type: application/json

{
  "status": "failure",
  "data": {
    "error": "Expected at least two items in list."
  }
}
```

上面代碼中，解析數據體以後，才能得知操作失敗。

這張做法實際上取消了狀態碼，這是完全不可取的。正確的做法是，狀態碼反映發生的錯誤，具體的錯誤信息放在數據體裡面返回。下面是一個例子。

```jsx
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": "Invalid payoad.",
  "detail": {
     "surname": "This field is required."
  }
}
```

### 提供鏈接

API 的使用者未必知道，URL 是怎麼設計的。一個解決方法就是，在回應中，給出相關鏈接，便於下一步操作。這樣的話，用戶只要記住一個 URL，就可以發現其他的 URL。這種方法叫做 HATEOAS。

舉例來說，GitHub的API都在api.github.com都這個域名。訪問它，就可以得到其他 URL。

```jsx
{
  ...
  "feeds_url": "<https://api.github.com/feeds>",
  "followers_url": "<https://api.github.com/user/followers>",
  "following_url": "<https://api.github.com/user/following{/target}>",
  "gists_url": "<https://api.github.com/gists{/gist_id}>",
  "hub_url": "<https://api.github.com/hub>",
  ...
}
```

上面的回應中，挑一個 URL 訪問，又可以得到別的 URL。對於用戶來說，不需要記住 URL 設計，只要從 http://api.github.com 一步步查找就可以了。

HATEOAS 的格式沒有統一規定，上面例子中，GitHub 將它們與其他屬性放在一起。更好的做法應該是，將相關鏈接與其他屬性分開。

```jsx
HTTP/1.1 200 OK
Content-Type: application/json
{
  "status": "In progress",
   "links": {[
    { "rel":"cancel", "method": "delete", "href":"/api/status/12345" } ,
    { "rel":"edit", "method": "put", "href":"/api/status/12345" }
  ]}
}
```

------

參考
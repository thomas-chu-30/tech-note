## take

https://rxjs-cn.github.io/learn-rxjs-operators/operators/filtering/take.html

```javascript
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

// 發出 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
// 取第一個發出的值然後完成
const example = source.pipe(take(1));
// 輸出: 1
const subscribe = example.subscribe(val => console.log(val));
```

## megeMap

mergeMap = map + mergeAll，首先利用 map emit 出另一個obserable， 再利用 mergeAll 將 emit 出來的多條 Observable 合併成一條 Observable，範例及 Marble Diagram 如下。

```javascript
const series1$ = interval(200);
const series2$ = interval(1000);

series1$.pipe(
  take(3),
  map((s)=>series2$.pipe(take(3))),
  mergeAll()
).subscribe(x=>console.log(x));
// 0,0,0, 1,1,1, 2,2,2
```

上面的範例可以改用 megeMap 運算子，效果會是一樣的 !!!

```javascript
const series1$ = interval(200);
const series2$ = interval(1000);
    
series1$.pipe(
  take(3),
  mergeMap((s)=>series2$.pipe(take(3))),
).subscribe(x=>console.log(x));
```

為了解決巢狀訂閱問題

在寫網頁的時候，時常需要呼叫多支API，並取得結果，因此我們可能寫成如下這樣，先 call Post API，取得 post id 後，再 call Comment API，取得對應 Post 的所有 Comments，範例如下，如此即行成了巢狀訂閱。

```javascript

let postApiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
let commentApiUrl = 'https://jsonplaceholder.typicode.com/comments';

// 巢狀 Obersable
this.http.get(postApiUrl).subscribe((p: any)=>{
  this.http.get(`${commentApiUrl}/${p.id}`).subscribe(c => {
    console.log(c);
  })
});
```

```javascript
let postApiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
let commentApiUrl = 'https://jsonplaceholder.typicode.com/comments';

this.http.get(postApiUrl).pipe(
   mergeMap((p: any) => this.http.get(`${commentApiUrl}/${p.id}`))
).subscribe(x=>console.log(x));
```

[參考文章](https://medium.com/allen%E7%9A%84%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/rxjs-mergemap-%E7%AD%86%E8%A8%98-b971778cbff4)

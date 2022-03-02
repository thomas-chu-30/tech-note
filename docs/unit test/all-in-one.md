# all

tdc 專案中可以常看 

- login.component.spec.ts
- sign up 

## 注入一個 service (angular)

如果在 test 中要用 service 的時候需要用 **`TestBed.inject()` **的方式來引入

```js
let analyticsService = AnalyticsService;
beforeEach(()=> {
		...
		analyticsService = TestBed.inject(AnalyticsService);
})
```



## 引用物件的東西

```js
jest.spyOn(object, methodName)
```

範例：2

```js
const video = {
		play() {
				return true;
		},
};
module.exports = video;
```

```js
const video = require('./video');

test('plays video', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);

  spy.mockRestore();
});
```

如果是要放入假的資料可用 **`mockReturnValue()`**來去傳入假的資料

```js
const spy = jest.spyOn(apiService, 'post').mockReturnValue(of({}));
```

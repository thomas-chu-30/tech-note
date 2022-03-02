# expect 可以驗証什麼

> [以此篇文章的寫法為主](https://www.codeprj.com/zh/blog/8b263a1.html)

```js
expect.objectContaining(object)
expect.toHaveBeenCalledWith(arg1, arg2, ...)
```



## objectContaining(object)

匹配遞歸地匹配預期屬性的任何接收對象。也就是說，預期對象是接收對象的子集。因此，它匹配所接收的對象，該對象包含不屬於預期對象的屬性。

與期望對象中的文字屬性值不同，您可以使用matchers、expect.anything()等等。

假設我們希望使用事件對象調用onPress函數，我們需要驗證的是事件是否有event.x屬性和y屬性。我們可以這樣做:

```js
test('onPress gets called with the right thing', () => {
  	const onPress = jest.fn();
  	simulatePresses(onPress);
  	expect(onPress).toBeCalledWith(
    		expect.objectContaining({
      			x: expect.any(Number),
      			y: expect.any(Number),
    	}),
  	);
});
```

TDC 中常見的用法

```js
const dataLayerSpy = jest.spyOn(analyticsService, 'dataLayer');
...
expect(dataLayerSpy).toBeCalledWith(
		expect.objectContaining({
    		event: 'Market',
        eventValue: `Winbond / Product / W25 / Restock Notify`,
    })
); // 在經過一連串的 function 後所打的 event 是不是用期待的參數來傳
```



## toHaveBeenCalledWith(arg1, arg2, ...)

如果参数列表与spy调用时的参数相匹配，则返回true。

```js
const api = jest.spyOn(apiService, 'post').mockReturnValue(of({}));
expect(api).toHaveBeenCalledWith('/subscribe', { email, tdc_id, event_category: 'Homepage' });
expect(analyticsSpy).toHaveBeenCalledWith(
		expect.objectContaining({
    		event: 'Footer',
        eventCategory: 'Homepage',
        eventValue: 'Newsletter Subscription / Submit Successfully',
    })
);
```


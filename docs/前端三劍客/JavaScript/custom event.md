# Custom Event 

> 本方法在 IE 的支援度很差，真的逼不得已，不建議使用

```js
// demo 1
<div id="div"></div>

<script>

       var elem = document.querySelector('#div');

       var event = document.createEvent('Event');

       // 定义事件名称myEvent
       event.initEvent('myEvent', true, true);

       // 监听myEvent
       elem.addEventListener('myEvent', function (e) {
          console.log(e);
       }, false);

       // 使用目标对象去派发事件，可以是元素节点/事件对象
       elem.dispatchEvent(event);

</script>
```



```js
// demo 2
<div id="div"></div>

<script>

       var elem = document.querySelector('#div');

       var event = new Event('myEvent');

       elem.addEventListener('myEvent', function (e) {
           console.log(e)
	   }, false);
	
       elem.dispatchEvent(event);

</script>
```



## 參考文章

https://juejin.cn/post/6844903833227771917

https://developer.mozilla.org/zh-TW/docs/Web/API/CustomEvent/CustomEvent


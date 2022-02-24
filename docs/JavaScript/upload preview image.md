# Preview Image

開發過中程常常會有上傳檔案的功能，上傳完之後也要可以馬上去 preview image 的情況，此時我們可以透過 `files`來作到我們想要的效果 ↓ 

```html
<form>
    <input @change="getFile($event)" type="file" id='upload_file'/>
    <img v-if='url' :src="url" />
</form>
```

在 input onchange 的時候觸發的事件，在此事件中取得 `files`

```js
export default {
  setup(){
    let url = ref('')
    const getFile = ($event)=> {
      const file = $event.target.files[0]
      url.value = URL.createObjectURL(file); //把上傳檔案的 image url 傳入
    }
    return {getFile,url}
  }
}
```


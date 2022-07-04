```javascript
const formData = new FormData()
formData.append('image', evt.target.files[0])
formData.append('directory', '/users')
const data = {
	formData,
  token: this.$cookies().get('auth').access_token
}
const img = await this.uploadImage(data)
evt.target.value = ''
```

[參考文章](https://happyjayxin.medium.com/%E4%BD%BF%E7%94%A8-javascript-formdata-%E5%82%B3%E9%80%81%E8%B3%87%E6%96%99-4b11bc6c3f83)
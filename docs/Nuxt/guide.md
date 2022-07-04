[Views](https://nuxtjs.org/docs/2.x/concepts/views)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73bcf5b7-1078-472d-9b18-30b254e93d6b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73bcf5b7-1078-472d-9b18-30b254e93d6b/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50e02cfb-0c01-41ff-8e4c-dc8937f0056b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/50e02cfb-0c01-41ff-8e4c-dc8937f0056b/Untitled.png)

Nuxt

[更改應用的host和port](https://www.notion.so/host-port-f90ec0940a854f27a8d58ff111001876)

# 引入全域 function

```jsx
export default ({ app }, inject) => {
  inject('format', {
    price: number => {
      // fucntion 
    },
  })
}
```

[plugins](https://nuxtjs.org/docs/2.x/directory-structure/plugins#inject-in-root--context)

# asyncData 的 Context有什麼

[The Context](https://nuxtjs.org/docs/2.x/internals-glossary/context)

# Nuxt Helper

- isOffline 斷線的時候
- isOnlien 連線的時候
- refresh 從asynData 在跑一次
- $loading 打開loading 頁面

# Cofiguration

- build
- buildDir
- cli
- components
- dir
- extentplugins
- generator
- gloablName
- css
- dev
- env
- head

# Internals

# Components

不熟的

1. fetch hook (nuxt > 2.14)
2. layout property
3. transition
4. watchQuery

比較熟的

1. head methods
2. loading
3. middleware
4. scrollToTop
5. validate

## head methods

`Nuxt.js` uses `vue-meta` to update the headers and html attributes of your application

Type : Object | Function

```jsx
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello World!'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
    }
  }
</script>
```

## Loading

Type : Boolean ( default : true )

在這個 components 裡面不使用 global loading 效果

```jsx
<script>
  export default {
    loading: false
  }
</script>
```

## middleware

Type : String | Array | Function

Named middleware

創建一個檔案在 `middeware` 裡面，名稱和 pages 裡面的 middleware 一樣

```jsx
export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    return redirect('/login')
  }
} 
// middleware/authenticated.js
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware: 'authenticated'
  }
</script>
// pages
```

Anonymous middleware

如果要直接 call function 的話可以直接寫成 function 的方式

```jsx
<template>
  <h1>Secret page</h1>
</template>

<script>
  export default {
    middleware({ store, redirect }) {
      // If the user is not authenticated
      if (!store.state.authenticated) {
        return redirect('/login')
      }
    }
  }
</script>
```

## scrollToTop

Type : Boolean ( default : false )

> By default, `Nuxt.js` scrolls to the top when you go to another page, but with children routes, `Nuxt.js` keeps the scroll position. If you want to tell `Nuxt.js` to scroll to the top when rendering your child route, set scrollToTop to true:

設定為 true 的時候，來到此頁面的時候，會直接來到畫面的最上方

```jsx
<template>
  <h1>My child component</h1>
</template>

<script>
  export default {
    scrollToTop: true
  }
</script>
```

scrollBehavior ( config 設定參考 )

[The router Property](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-router#scrollbehavior)

## validate

Type : Function || Async Function

> If the validate method does not return true, Nuxt.js will automatically load the 404 error page.

```jsx
validate({ params, query, store }) {
  return true // if the params are valid
  return false // will stop Nuxt.js to render the route and display the error page
}
async validate({ params, query, store }) {
  // await operations
  return true // if the params are valid
  return false // will stop Nuxt.js to render the route and display the error page
}
// or 
validate({ params, query, store }) {
  return new Promise((resolve) => setTimeout(() => resolve()))
}
```

[Life Hooks](https://www.notion.so/Life-Hooks-5371b28e000b47afaf749384444c45b2)

[Router](https://www.notion.so/Router-a9151932232540bdb6a43a16114769b3)
# Resolver

router 轉址後會先經過 resolver 在去到另一個 router ，因此可先在此取得資料，到新頁面時就可直接賦予值

```bash
ng generate resolver <folder/name> [options eg. --skip-tests]
```

在 page 取得值

```jsx
this.route.data.subscribe((res) => {
     this.category = res.category.data;
});
```

router setting 

```jsx
{
        path: 'categories',
        component: ProductsPageComponent,
        resolve: {
            category: CategoryResolver,
        }
},
```

Resolver 的檔案

```jsx
export class CategoryResolver implements Resolve<boolean> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        // route 和 ActiveRoute 很像
				// state 和 Router 很像
        return of(true)
    }
}
```
# Customized Pipe

下列所遇到的情境是 url 的 queryString 重複的情況，所造成的 bug ，所以希望在 subscribed 的 pipe 把 queryString 展平。

```javascript
export function flattenQueryParams() {
    return function <T>(source: Observable<T>): Observable<T> {
        return new Observable((subscriber) => {
            source.subscribe({
                next(queryParams) {
                    let newQueryParams = {} as T;
                    for (let key of Object.keys(queryParams)) {
                        if (Array.isArray(queryParams[key])) {
                            newQueryParams[key] = queryParams[key].slice(-1)[0];
                        } else {
                            newQueryParams[key] = queryParams[key];
                        }
                    }
                    subscriber.next(newQueryParams);
                },
                error(error) {
                    subscriber.error(error);
                },
                complete() {
                    subscriber.complete();
                },
            });
        });
    };
}
```

這樣子就可以直接套用到 pipe 中，使用自己寫的 function 去作 filter 的功能
```javascript
this.route.queryParams.pipe(flattenQueryParams()).subscribe((res) => {
		this.currentPage = parseInt(res.page) || 1;
		this.itemsPerPage = parseInt(res.row) || 25;
});
```


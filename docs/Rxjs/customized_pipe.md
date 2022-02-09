# Customized Pipe

working 

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

```javascript
this.route.queryParams.pipe(flattenQueryParams()).subscribe((res) => {
		this.currentPage = parseInt(res.page) || 1;
		this.itemsPerPage = parseInt(res.row) || 25;
});
```


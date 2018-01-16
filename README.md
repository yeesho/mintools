# mintools
Some commonly used methods

## Use

Load is available in `npm` so you can install it by running:

```
  npm install --save mintools
```

You can use it in the following way:

```
  import Mintools from 'mintools'

  Mintools.method()
```

Or:

```
  import Method from 'mintools/method'

  Method()
```

## Methoads

- [toDou](./packages/toDou.js)
- [setTitle](./packages/setTitle.js)
- [cookie](./packages/cookie.js)
- [query](./packages/query.js)
- [validator](./packages/validator.js)
- [dateFormat](./packages/dateFormat.js)
- [toDecimal](./packages/toDecimal.js)
- [getStyle](./packages/getStyle.js)

#### toDou

```
  toDou(8) ------> '08'
  toDou(16) -------> '16'
```

#### setTitle

```
  const title = 'test'
  setTitle(title)
```

#### cookie

```
  const name = '_test'
  const value = 'test'
  const domain = '.domain'
  
  cookie.getCookie(name)
  cookie.setCookie(name, value, domain)
  cookie.delCookie(name, domain)
```

#### query

```
  window.location.href = 'https://www.google.com/search?biw=1680&bih=953&ei=X6dAWoLmKoOc8QXA2YiACg&q=js'

  query() ---> {biw: "1680", bih: "953", ei: "X6dAWoLmKoOc8QXA2YiACg", q: "js"}
  query('biw') ---> "1680"
  query(['biw', 'bih']) ---> {biw: "1680", bih: "953"}
```

#### validator

```
  isEmail('21354825@qq.com') ---> true
  isPhone('51536526232345') ---> false
  isCreditCard('qwerqwt25436') ---> false
```

#### dateFormat

```
  const date = new Date()
  dateFormat(date) ---> '2018-01-10 11:58:29'
  dateFormat(date, 'yyyy年M月d日') ---> '2018年1月10日'
```

#### toDecimal

```
  toDecimal(2) ---> 2
  toDecimal(2.2) ---> 2.2
  toDecimal(2.22) ---> 2.22
  toDecimal(2.222) ---> 2.22

  toDecimal(2, 2) ---> 2.00
  toDecimal(2.222, 2) ---> 2.22

  toDecimal(2, 3) ---> 2.000
  toDecimal(2.222222, 2) ---> 2.222
```

#### getStyle

```
  getStyle(ele, 'display') ---> 'block'
```

## License

MIT

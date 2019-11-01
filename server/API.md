# NEXT

Root Router: `/api`

> /os

- `result`

```jsonc

{
    "hostName": "chenhongzhoudeMacBook-Air.local",
    "arch": "x64",
    "cpu": "Intel(R) Core(TM) i5-5350U CPU @ 1.80GHz",
    "user": "kozo4",
    "platform": "darwin",
    "platform_type": "Darwin",
    "release": "19.0.0"
}

```

> /os/path

- `querystring`

```jsonc
{
  "type": "check",
  "pwd": "/Users/kozo4/cat'
}
```

- `result`

```jsonc
{
    "code": 200,
    "msg": "success",
    "check": "/Users/kozo4/cat" // pwd 错误会返回 false
}
```

> /os/port

- querystring

```jsonc
{
  "type": "check",
  "port": 2333 // 隐式转换后 `Number`
}
```

- result

```jsonc
{
  "code": 200,
  "msg": "success",
  "used": true
}
```

> /server/run/:port

- querystring

```jsonc
{
  "path": "/Users/kozo4/cat"
}
```

- result

```jsonc
{
    "code": 200,
    "msg": "success",
    "is": true,
    "go": "http://localhost:10086",
    "path": "/Users/kozo4/cat/Project/huluxia/web/www"
}
```

> /server/kill/:port

- result

```jsonc
{
    "code": 200,
    "msg": "sucess"
}
```
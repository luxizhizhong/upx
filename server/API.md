# NEXT

Root Router: `/api`

# 系统

> /os

- `result`

```json

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

```json
{
  "type": "check",
  "pwd": "/Users/kozo4/cat'
}
```

- `result`

```json
{
    "code": 200,
    "msg": "success",
    "check": "/Users/kozo4/cat" // pwd 错误会返回 false
}
```

> /os/port

- querystring

```json
{
  "type": "check",
  "port": 2333 // 隐式转换后 `Number`
}
```

- result

```json
{
  "code": 200,
  "msg": "success",
  "used": true
}
```
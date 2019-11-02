# NEXT

Root Router: `/api`

Postman link: https://www.getpostman.com/collections/7701e4071f622d62b3d6

> /os

获取系统信息

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

检查路径是否可用

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

检查端口是否可用

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

运行 `http-server`

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

杀死端口进程

- result

```jsonc
{
    "code": 200,
    "msg": "sucess"
}
```

> /store/http/add

创建一个 `http-server`

- querystring

```jsonc
{
  "path": "/dev",
  "port": 2333,
  "note": "note"
}
```

- result

```jsonc
{
  "code": 200,
  "msg": "success"
}
```

> /store/http/get/all

获取所有的 `http-server`

- result

```jsonc
{
  "code": 200,
  "lists": [
    {
      "path": "",
      "port": "",
      "note": "",
      "isStart": true,
      "id": "ck2h6kwm70001q0ey8lnoeje2"
    }
  ]
}
```

> /store/http/remove/all

删除所有的 `http-server`

- result

```jsonc
{
  "code": 200,
  "msg": "已经删除全部"
}
```

> /store/http/get/:id

获取单个 `http-server`

```jsonc
{
  "code": 200,
  "now": {
    "path": "",
    "port": "",
    "note": "",
    "isStart": true,
    "id": "ck2h6kwm70001q0ey8lnoeje2"
  }
}
```

> /store/http/change

修改 `http-server`

- querystring

```jsonc
{
  "index": 0,
  "key": "path",
  "value": "are you ok?"
}
```

- result

```jsonc
{
    "code": 200,
    "msg": "success",
    "key": "note"
}
```
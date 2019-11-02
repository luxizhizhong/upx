```console
 ______________________ 
< upload plate xclient >
 ---------------------- 
                       \                    ^    /^
                        \                  / \  // \
                         \   |\___/|      /   \//  .\
                          \  /O  O  \__  /    //  | \ \           *----*
                            /     /  \/_/    //   |  \  \          \   |
                            @___@`    \/_   //    |   \   \         \/\ \
                           0/0/|       \/_ //     |    \    \         \  \
                       0/0/0/0/|        \///      |     \     \       |  |
                    0/0/0/0/0/_|_ /   (  //       |      \     _\     |  /
                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\.-~       /   /
                             ,-}        _      *-.|.-~-.           .~    ~
            \     \__/        `/\      /                 ~-. _ .-~      /
             \____(oo)           *.   }            {                   /
             (    (--)          .----~-.\        \-`                 .~
             //__\\  \__ Ack!   ///.----..<        \             _ -~
            //    \\               ///-._ _ _ _ _ _ _{^ - - - - ~

```

## Developer

```bash

git clone https://github.com/luxizhizhong/upx
cd upx
cnpm run dep

# web端
cnpm run dev:client

# server端(nodemon)
cnpm run dev:serve

```

open browser: http://localhost:2334

![](https://i.loli.net/2019/10/31/ZycE3g82timxWnV.png)

## TODO

- [x] **http-server**
- [ ] 支持 `node.js` 项目[ ]
- [ ] 跨域代理 `cors`
- [ ] **支持 `ftp`**
- [ ] 本地 `json-server`

## changelog

》 2019-11-02

- 完成了 `http-server` 模块
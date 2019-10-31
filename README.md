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

`upx` 是一个由 `node.js` 编写的 `CLI`, 希望这个小玩意能够给你带来便捷🙂

## Developer

```
git clone https://github.com/luxizhizhong/upx6
cd upx

# 安装依赖(cnpm)
cnpm run dep

# web端
cnpm run dev:client

# server端(nodemon)
cnpm run dev:serve

```

open browser: http://localhost:2333

![](https://i.loli.net/2019/10/31/ZycE3g82timxWnV.png)

## TODO

- **http-server**
- 支持 `node.js` 项目
- **支持 `ftp`**
- 本地 `json-server`
const Router = require('@koa/router')
const createServer = require('../utils/createStaticServer')

const Middle = new Router()

Middle
  .get('/run/:port', async ctx=> {
    const result = {
      code: 200,
      msg: 'fail',
      is: false
    }
    let { port } = ctx.params
    let { path } = ctx.query
    port = +port
    path = path.trim()
    if (!isNaN(port)) {
      const App = await createServer(port, path)
      if (App) {
        // TODO: 返回的句柄该怎么关闭 App.close()
        // TODO: 尝试使用闭包解决回调
        result.msg = `success`
        result.is = true
      }
    }
    ctx.body = result
  })

module.exports = Middle
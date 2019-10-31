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
        result.msg = `success`
        result.is = true
        result.go = `http://localhost:${ port }`
        result.path = path
      } else result.debug = '端口被占用了'
    }
    ctx.body = result
  })

module.exports = Middle
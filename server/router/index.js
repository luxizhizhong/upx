const Router = require('@koa/router')

const Api = new Router({
  prefix: '/api'
})

Api.use( async ctx=> {
  ctx.body = {
    code: 404,
    msg: '未知错误'
  }
})

Api.use('/os')

module.exports = Api
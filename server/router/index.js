const path = require('path')
const Router = require('@koa/router')
const prefix = '/api'
const Api = new Router({ prefix })

const OS = require('./os')
const Server = require('./server')
const Store = require('./store')

Api
  .get('/', async ctx=> {
    ctx.body = '/docs'
  })
  .use('/os', OS.routes(), OS.allowedMethods())
  .use('/server', Server.routes(), Server.allowedMethods())
  .use('/store', Store.routes(), Store.allowedMethods())

Api.use( async (ctx, next)=> {
  ctx.body = {
    code: 404,
    msg: '未知错误'
  }
})

module.exports = Api
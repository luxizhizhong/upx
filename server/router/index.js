const Router = require('@koa/router')
const prefix = '/api'
const Api = new Router({ prefix })

const OS = require('./os')

Api
  .get('/', async ctx=> {
    ctx.body = '/doc'
  })
  .get('/os', OS)

Api.use( async (ctx, next)=> {
  ctx.body = {
    code: 404,
    msg: '未知错误'
  }
})

module.exports = Api
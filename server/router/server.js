const Router = require('@koa/router')
const createServer = require('../utils/createStaticServer')

const Middle = new Router()

Middle.get('/add', async ctx=> {

}).get('/stop', async ctx=> {
  
})

module.exports = Middle
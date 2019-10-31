const http = require('http')
const Koa = require('koa')
const static = require('koa-static')
const cors = require('@koa/cors')
const logger = require('koa-logger')

const checkUsedPort = require('./checkUsedPort')

const App = new Koa()

// middleware
App.use(logger())
App.use(cors())

/*
** @desc 创建一个`http-server`
** @param <Number> - port
** @param <String> - staticPath
** @return <Promise>
*/
module.exports = (port, staticPath)=> new Promise( async (rcv, rjt)=> {
  let isUsedPort = await checkUsedPort(port)
  isUsedPort = !isUsedPort
  App.use(static(staticPath))
  if (isUsedPort) {
    App.listen(port, ()=>{
      rcv(App)
      // App.close()
    })
  } else rcv(false)
})
#!/usr/bin/env node
// 创建一个 `http-server`
// 2019-11-01
const http = require('http')
const Koa = require('koa')
const static = require('koa-static')
const cors = require('@koa/cors')
const querystring = require('querystring')

const App = new Koa()
// middleware
App.use(cors())

const argv = process.argv
let [nodeExec, filePath, ...proArgs] = argv

;(async ()=> {
  const qs = proArgs.map(item=> querystring.decode(item))
  let port = qs[0].port
  let path = qs[1].path.trim()
  App.use(static(path))
  http.createServer(App.callback()).listen(port)
})()
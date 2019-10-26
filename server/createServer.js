const Koa = require('koa');
const app = new Koa();

const logger = require('koa-logger')
const cors = require('@koa/cors');
const json = require('koa-json')

// router
const Api = require('./router')

// middleware
app.use(json())
app.use(logger())
app.use(cors())
app.use(Api.routes(), Api.allowedMethods())

module.exports = app
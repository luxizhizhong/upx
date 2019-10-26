const Koa = require('koa');
const app = new Koa();

const logger = require('koa-logger')
const cors = require('@koa/cors');
const json = require('koa-json')

// router
const Api = require('./router')

app.use(Api.routes(), Api.allowedMethods())

// middleware
app.use(json())
app.use(logger())
app.use(cors())

module.exports = app
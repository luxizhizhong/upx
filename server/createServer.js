const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');

// router
const Api = require('./router')

app.use();

app.use(cors())

module.exports = app
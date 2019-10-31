const os = require('os')

const Router = require('@koa/router')
const Api = new Router()

const pathUtils = require('../utils/path')
const checkUsedPort = require('../utils/checkUsedPort')

const cpus = os.cpus()
let cpu = cpus[0].model
let user = os.userInfo().username

const OS = {
  hostName: os.hostname(),
  arch: os.arch(),
  cpu,
  user,
  platform: os.platform(),
  platform_type: os.type(),
  release: os.release(),
}

const success = `success`, fail = `fail`

Api
  .get('/', async ctx=> ctx.body = OS )
  .get('/path', async ctx=> {
    const { type, pwd } = ctx.query
    const result = {
      code: 200,
      msg: success,
      check: true
    }
    if (type == 'check' && pwd) {
      const flag = await pathUtils.getPath(pwd)
      result.check = flag
      result.msg = flag ? success : fail
    } else {
      result.msg = fail,
      result.check = false
    }
    ctx.body = result
  })
  .get('/port', async ctx=> {
    const result= {
      code: 200,
      msg: success,
      used: true
    }
    let { type, port } = ctx.query
    port = +port
    if (type == 'check' && port) {
      const isUsedPort = await checkUsedPort(port)
      result.used = isUsedPort
    } else result.msg = fail
    ctx.body = result
  })

module.exports = Api
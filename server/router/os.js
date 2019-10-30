const os = require('os')

const Router = require('@koa/router')
const Api = new Router()

const pathUtils = require('../../utils/path')

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

Api
  .get('/', async ctx=> ctx.body = OS )
  .get('/path', async ctx=> {
    let success = `success`, fail = 'fail'
    const result = {
      code: 200,
      msg: success,
      check: true
    }
    const { type, pwd } = ctx.query
    if (type == 'check' && pwd) {
      const flag = await pathUtils.getPath(pwd)
      result.check = flag
      result.msg = flag ? success : fail
    } else {
      result = {
        code: 500,
        msg: fail
      }
    }
    ctx.body = result
  })

module.exports = Api
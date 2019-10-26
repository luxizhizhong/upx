const os = require('os')

let cpus = os.cpus
cpus = cpus.length ? cpus[0].model : '杂牌大水牛'
const OS = {
  hostName: os.hostname(),
  arch: os.arch(),
  cpus,
  platform: os.platform(),
  platform_type: os.type(),
  release: os.release(),
  // userInfo: os.userInfo()
}

module.exports = async ctx=> {
  ctx.body = OS
}
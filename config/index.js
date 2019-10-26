
let isDev = true || process.env.NODE_ENV
let clientDevPort = 2334
let serverDevPort = 2333

module.exports = {
  config: {
    clientDevPort,
    serverDevPort,
    isDev
  },
  request: nextFlag=> {
    // @param <Boolean> - nextFlag
    // @return <function()>
    let rx
    if (nextFlag) {
      rx = require('./request/client')
    } else rx = require('./request/server')
    return rx
  }
}
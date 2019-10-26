
let isDev = true || process.env.NODE_ENV
let clientDevPort = 2334
let serverDevPort = 2333

module.exports = {
  config: {
    clientDevPort,
    serverDevPort,
    isDev
  }
}
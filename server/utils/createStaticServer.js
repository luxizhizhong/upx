const { fork } = require('child_process')
require('colors')
const clear = require('clear')
module.exports = async (port, path)=> {
  clear()
  let fileName = `${ __dirname }/pullChildServer.js`
  const jsServer = fork(
    fileName,
    [
      `port=${port}`,
      `path=${path}`
    ],
    {
      'stdio': 'ignore', // 父子进程间不建立通道
      'detached': true   // 让子进程能在父进程退出后继续运行
    }
  )
  jsServer.unref()
  return true
}
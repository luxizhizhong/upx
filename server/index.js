const clear = require('clear')
const sinsay = require("sinsay")
const createApp = require('./createServer')

require('colors')

let PORT = 2333

createApp.listen(false || PORT,()=> {
  clear()
  let local_url = `http://localhost:${ PORT }`.green
  let msg = `listen to ${ local_url }`.blue
  let result = sinsay(msg).red

  console.log(result)

})
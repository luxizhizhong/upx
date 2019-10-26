// 客户端发送请求
const { config } = require('..')
const { serverDevPort, isDev } = config
const Axios = require('axios')

let client_api_url = isDev ? '' : `http://localhost:${ serverDevPort }`
client_api_url += `/api`

const request = ({ url, data })=> new Promise((rcv, rjt)=> {
  Axios.get(url,{
    params: data
  }).then(r=> {
    rcv(r)
  }).catch(err=> {
    // @fix
  })
})

module.exports = request
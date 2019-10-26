// 客户端发送请求

let isDev = true
let serverDevPort = 2333
const Axios = require('axios')

let client_api_url = !isDev ? '' : `http://localhost:${ serverDevPort }`
client_api_url += `/api`

const request = ({ url, data = {} })=> new Promise((rcv, rjt)=> {
  url = client_api_url + url
  Axios.get(url,{
    params: data
  }).then(r=> {
    rcv(r.data)
  }).catch(err=> {
    // @fix
  })
})

export default request
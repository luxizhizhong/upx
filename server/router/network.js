// const network = require('network')

// network.get_public_ip((err, ip)=> {
//   if (!err) {
//     console.log('public_ip: ', ip)
//   }
// })

// 返回当前网络端
// @return []
// network.get_interfaces_list((err, list)=> {
//   if (!err) {
//     console.log(list)
//   }
// })

// 获取当前使用网络
// @return {}
// network.get_active_interface((err, info)=> {
//   console.log(err || info)
// })

// 获取局域网网关
// @return <string>
// network.get_gateway_ip((err, ip)=> {
//   if (!err) {
//     console.log('gateway_ip: ', ip)
//   } else {
//     throw new Error(err)
//   }
// })
/*
** 判断端口是否被占用
*/

let host = `127.0.0.1`
const tcpPortUsed = require('tcp-port-used')

/*
** @param <Number> - port
** @return <Promise(Boolean)>
*/
module.exports = async port=> await tcpPortUsed.check(port, host)
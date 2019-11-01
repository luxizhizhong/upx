/*
** @desc 杀死进程
*/

const kill = require('kill-port')
module.exports = async port=> await kill(+port)
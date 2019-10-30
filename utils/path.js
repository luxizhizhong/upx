/*
** 路径公共方法
*/

const path = require('path')
const pathType = require('path-type')
const { isFile, isDirectory } = pathType

/*
** @param <String> - cwd
** @return <Promise> - <String, Boolean>
*/
const getPath = async cwd=> {
  const isCheckFile = await isFile(cwd)
  cwd = isCheckFile ? path.dirname(cwd) : cwd
  const isDir = await isDirectory(cwd)
  return isDir ? cwd : false
}


module.exports = {
  getPath,
  isFile,
  isDir: isDirectory
}
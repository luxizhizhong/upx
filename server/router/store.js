const { atob } = require('abab')
const Router = require('@koa/router')
const { httpStore } = require('../store')
const Api = new Router

const Msg = {
  removeAll: '已经删除全部',
  remove: '已删除',
  not: '不存在'
}

let getKeyAll = `all`
const zeroCommonFn = async (ctx, flag)=> {
  const { id } = ctx.params
  let result = {
    code: 200
  }
  if (id == getKeyAll) {
    if (flag) {
      result.lists = await httpStore.getAll()
    } else {
      await httpStore.removeAll()
      result.msg = Msg.removeAll
    }
  } else {
    if (flag) {
      const now = await httpStore.get(id)
      if (!now) result.msg = Msg.not
      result.now = now
    } else {
      const isRemove = await httpStore.remove(id)
      result = {
        code: 200,
        remove: isRemove,
        msg: isRemove ? Msg.remove : Msg.not
      }
    }
  }
  ctx.body = result
}

Api
  .get('/http/get/:id', async ctx=> zeroCommonFn(ctx, true))
  .get('/http/remove/:id', async ctx=> zeroCommonFn(ctx, false))
  .get('/http/add', async ctx=> {
    let conf = ctx.query
    const now = await httpStore.add(conf)
    ctx.body = {
      code: 200,
      msg: 'success',
      now
    }
  })
  .get('/http/change', async ctx=> {
    let { index, key, value } = ctx.query
    index = +index
    await httpStore.change(index, {
      [key]: value
    })
    ctx.body = {
      code: 200,
      msg: 'success',
      key: key
    }
  })

module.exports = Api
const cuid = require('cuid')
const checkUsedPort = require('../utils/checkUsedPort')
const handleStore = {
  table: `http_middle_servers`,
  add: async function(App, conf) {
    const { path, port, note } = conf
    const now = {
      path,
      port,
      note,
      isStart: false,
      isPath: true,
      usedPort: false,
      id: cuid()
    }
    let fullStore = await this.getAll(App)
    await this.setSync(App, [ ...fullStore, now ])
    return now
  },
  change: async function(App, index, conf) {
    const wrap = await this.getAll(App)
    for (let dev in conf) {
      wrap[index][dev] = conf[dev]
    }
    await this.setSync(App, wrap)
  },
  get: async function(App, _id) {
    const wrap = await this.getAll(App)
    let dev = wrap.find(item=> item.id === _id)
    dev = dev || false
    return dev
  },
  getAll: async function(App) {
    let lists = await App.get(this.table)
    lists = lists || []
    // https://flaviocopes.com/javascript-async-await-array-map
    const anAsyncFunction = async item => {
      let port = item.port
      let isPy = true
      if (!port) {
        isPy = false
      } else {
        if (!isNaN(port)) {
          port = +port
          isPy = await checkUsedPort(port)
        } else isPy = false
      }
      item.isStart = isPy
      item.usedPort = false
      return item
    }
    const getData = async () => {
      return await Promise.all(lists.map(item => anAsyncFunction(item)))
    }
    const dev = await getData()
    return dev
  },
  setSync: async function(App, data){
    await App.set(this.table, data)
  },
  remove: async function(App, _id) {
    const store = await this.getAll(App)
    let isRemove = false
    store.length && (async ()=> {
      const index = store.findIndex(item=> item.id === _id)
      if (index >= 0) {
        store.splice(index, 1)
        await this.setSync(App, store)
        isRemove = true
      }
    })()
    return isRemove
  },
  removeAll: async function(App) {
    await this.setSync(App, [])
  }
}

module.exports = App=> ({

  add: async conf=> await handleStore.add(App, conf),

  change: async (index, conf)=> await handleStore.change(App, index, conf),

  remove: async id=> await handleStore.remove(App, id),

  removeAll: async ()=> await handleStore.removeAll(App),

  get: async id=> await handleStore.get(App, id),

  getAll: async ()=> await handleStore.getAll(App)

})
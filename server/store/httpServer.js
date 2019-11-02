const cuid = require('cuid')

const handleStore = {
  table: `http_middle_servers`,
  get: function(App, _id) {
    const wrap = this.getAll(App)
    let dev = wrap.find(item=> item.id === _id)
    dev = dev || false
    return dev
  },
  getAll: function(App) {
    return App.get(this.table) || []
  },
  setSync: function(App, data){
    App.set(this.table, data)
  },
  remove: function(App, _id) {
    const store = this.getAll(App)
    let isRemove = false
    store.length && (()=> {
      const index = store.findIndex(item=> item.id === _id)
      if (index >= 0) {
        store.splice(index, 1)
        this.setSync(App, store)
        isRemove = true
      }
    })()
    return isRemove
  },
  removeAll: function(App) {
    this.setSync(App, [])
  }
}

module.exports = App=> ({

  table: {
    path: String,
    port: Number,
    note: String,
    isStart: Boolean,
    id: String 
  },

  add: async conf=> {
    const { path, port, note } = conf
    const now = {
      path,
      port,
      note,
      isStart: true,
      id: cuid()
    }
    let fullStore = handleStore.getAll(App)
    handleStore.setSync(App, [ ...fullStore, now ])
    return now
  },

  remove: async id=> handleStore.remove(App, id),

  removeAll: async ()=> handleStore.removeAll(App),

  get: async id=> handleStore.get(App, id),

  getAll: async ()=> handleStore.getAll(App)

})
const cuid = require('cuid')

module.exports = App=> ({

  table: {
    path: String,
    port: Number,
    note: String,
    isStart: Boolean,
    id: String 
  },

  
  /*
  ** @param <Object> - conf
  ** @return <Promise>
  */
  add: async conf=> {
    const { path, port, note } = conf
  },

  /*
  ** @param <Stirng> - id
  ** @return <Promise>
  */
  remove: async id=> {

  },

  removeAll: async ()=> {

  }
})
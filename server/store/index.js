const conf = require('conf')
const App = new conf

const httpStore = (require('./httpServer'))(App)


// httpStore.add({
//   path: 'users/kozo4/cat',
//   port: 2334,
//   note: '今年下半年'
// })

module.exports = {
  httpStore
}
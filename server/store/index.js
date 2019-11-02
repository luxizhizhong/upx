const conf = require('conf')
const App = new conf

const httpStore = (require('./httpServer'))(App)

module.exports = {
  httpStore
}
const nedb = require('nedb')

const db = new nedb({
  filename: './save.db',
  autoload: true
})

module.exports = db
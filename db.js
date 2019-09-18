const mongodb = require('mongodb')

let connectString = 'mongodb+srv://todoAppUser:brandon9456@cluster0-chl2r.mongodb.net/OurApp?retryWrites=true&w=majority'

mongodb.connect(connectString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  module.exports = client.db()
  const app = require('./app')
  app.listen(3002)
})
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const dontenv = require("dotenv").config();

const app = express()
const PORT = process.env.PORT || 5000
const db = require('./models')

// bodyParser to translate urlform and json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Import routes and give the server access to them.
require('./controllers/api.js')(app)

// handlebars rout to static files - css, img
app.use(express.static('public'))

// Initiate database interface and start our server so that it can begin listening to client requests.
db.sequelize.sync()
  .then(function () {
    console.log('database sync okay')
    app.listen(PORT, function (err) {
      if (!err) {
        // Log (server-side) when our server has started
        console.log('Server listening on: http://localhost:' + PORT)
      } else {
        console.log(err)
      }
    })
  }).catch(function (err) {
    console.log(err, 'database synch failed')
  })


var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()

server.use(bodyParser.json())
server.use (express.static(path.join(__dirname, '../public')))

module.exports = server


// var hbs = require('express-handlebars')
// var index = require('./routes/index')


// Middleware
// app.use(express.static('public'))
// app.engine('hbs', hbs({extname: 'hbs'}))
// app.set('view engine', 'hbs')
// app.set('views', path.join(__dirname, 'views'))
// app.use(bodyParser.urlencoded({ extended: true }))

// Routes
// app.use('/', index)
//
// module.exports = (connection) => {
//   app.set('connection', connection)
//   return app
// }

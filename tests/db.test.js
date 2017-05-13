// Note: we use AVA here because it makes setting up the
// conditions for each test relatively simple. The same
// can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')

test('getUsers gets all users', function (t) {
  // One for each letter of the alphabet!
  var expected = 20
  return db.getUsers(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getUser gets a single user', function (t) {
  var expected = 'Bev Walter'
  return db.getUser(105, t.context.connection)
    .then(function (result) {
      var actual = result[4].name
      t.is(expected, actual)
    })
})

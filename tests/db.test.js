// Note: we use AVA here because it makes setting up the conditions for each test relatively simple.
// The same can be done with Tape using a bit more code.

var test = require('ava')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test)

var db = require('../db')



test('getMembers gets all members', function (t) {
  var expected = 20
  return db.getMembers(t.context.connection)
    .then(function (result) {
      var actual = result.length
      t.is(expected, actual)
    })
})

test('getMember gets a single user', function (t) {
  var expected = 'Bev Walter'
  return db.getMember(105, t.context.connection)
    .then(function (result) {
      var actual = result[4].name
      t.is(expected, actual)
    })
})

test('getClothingById will get one item of clothing', function (t) {
  var expected = 'pants_1'
  return db.getClothingById(5, t.context.connection)
    .then(function (result) {
      var actual = result[5].name
      t.is(expected, actual)
   })
})

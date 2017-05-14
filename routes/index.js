var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getMembers(req.app.get('connection'))
    .then(function (members) {
//      console.log(members)
      res.render('index', {members: members})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/members', function (req, res) {
  db.getMembers(req.app.get('connection'))
    .then(function (members) {
//      console.log(members)
      res.render('table', {members: members})
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
/*
router.get('/member/:id', function(req, res) {
    db.getMember(req.params.id, req.app.get('connection'))
        .then(function(member) {
//          console.log(member)
            res.render('table', { member: member })
        })
        .catch(function(err) {
            res.status(500).send('DATABASE ERROR: ' + err.message)
        })
})

router.get('/membershipForm', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (membershipForm) {
      res.render('form', { membershipForm: membershipForm })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/memberId', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (memberId) {
      res.render('profile', { member: member })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
*/

module.exports = router

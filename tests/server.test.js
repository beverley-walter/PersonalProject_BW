var test = require('ava')
var request = require('supertest')
var cheerio = require('cheerio')

var createServer = require('../server')

var configureDatabase = require('./helpers/database-config')
configureDatabase(test, createServer)

test('GET /', (t) => {
  return request(t.context.app)
    .get('/')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      t.is($('li').first().text(), 'Rebecca Hailstone, beverley@asteriskdesign.co.nz, 012 345 6789, 1 Tertiary Terrace , Tipperery', createdOn: '20/05/2017', ratingId: '1')
    })

    test('GET /', (t) => {
  return request(t.context.app)
    .get('/member/105')
    .expect(200)
    .then((res) => {
      const $ = cheerio.load(res.text)
      t.is($('body').first().text().trim(), 'Bev Walter')
    })

})

'use strict'

var express = require('express')
var mysql = require('mysql')
var crypto = require('crypto')
var config = require('./config.json')

var connection = mysql.createConnection(config.mysql)

var app = express()
app.use(express.static(__dirname + '/public/', { index: 'index.htm' }))

app.get('/get', function(req, res) {
  var md5 = req.query.md5
  console.log('get', md5)
  connection.query('SELECT * FROM md5 WHERE ?', { md5: md5 }, function(err, result) {
    if (err) throw new Error(err)
    res.send(result[0] && result[0].str)
  })
})

app.get('/set', function(req, res) {
  var str = req.query.str || ''
  console.log('set', str)
  var md5 = crypto.createHash('md5').update(str).digest('hex')
  connection.query('INSERT IGNORE INTO md5 set ?', { str: str, md5: md5 }, function(err, result) {
    if (err) throw new Error(err)
    res.send(md5)
  })
})

app.listen(config.port)
console.log('now listening to port', config.port)

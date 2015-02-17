/*
 * localhost rocks express example
 * 
 * To run this example try npm install express
 * from within the examples directory.
 *
 */

var localhost = require('../localhost.rocks.js').localhost;

var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('LOCALHOST ROCKS!')
})

app.listen(80)

console.log("Visit http://localhost.rocks in your browser while this is running.");
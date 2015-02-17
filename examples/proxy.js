/*
 * localhost rocks proxy example
 * 
 * To run this example try npm install ping 
 * from within the examples directory.
 *
 */

var localhost = require('../localhost.rocks.js').localhost;
console.log(localhost);

var http = require('http');
var setup = require('proxy');

var server = setup(http.createServer());
server.listen(80, function () {
  var port = server.address().port;
  console.log('HTTP(s) proxy server listening on port %d', port);
});
/*
 * localhost rocks traceroute example
 * 
 * To run this example try npm install traceroute
 * from within the examples directory.
 *
 */
traceroute = require('traceroute');
var localhost = require('../localhost.rocks.js').localhost;

traceroute.trace(localhost, function (err,hops) {
  if (!err) console.log(hops);
});
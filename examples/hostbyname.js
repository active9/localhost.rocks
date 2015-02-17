/*
 * localhost rocks hostbyname example
 * 
 * To run this example try npm install hostbyname
 * from within the examples directory.
 *
 */

var localhost = require('../localhost.rocks.js').localhost;
console.log(localhost);

var hostbyname = require("hostbyname");
var cb = function(err, results){
  console.log(results);
};

hostbyname.resolve(localhost, cb);
hostbyname.resolve(localhost, "0", cb);
hostbyname.resolve(localhost, "v4", cb);
hostbyname.resolve(localhost, "v6", cb);
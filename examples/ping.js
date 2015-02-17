/*
 * localhost rocks hello world example
 * 
 * To run this example try npm install ping 
 * from within the examples directory.
 *
 */

var ping = require('ping');
var localhost = require('../localhost.rocks.js').localhost;
console.log(localhost);

ping.sys.probe(localhost, function(isAlive){
        if (isAlive) {
		msg = "responded!";
	} else {
		msg = "no response";
	}
});
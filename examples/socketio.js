/*
 * localhost rocks socket.io example
 * 
 * To run this example try npm install socketio
 * from within the examples directory.
 *
 */

var localhost = require('../localhost.rocks.js').localhost;

var io = require('socket.io')();
io.on('connection', function(socket){});
io.listen(3000);

/*
 * NOTICE: This is not a fully funcitonal example.
 * A full example is outside the scope of this example.
 * For more information visit: https://www.npmjs.com/package/socket.io
 *
 */
/*
 * localhost rocks memcache example
 * 
 * To run this example try npm install memcache
 * from within the examples directory.
 * You also need a mysql instance running on the
 * same machine.
 *
 */

var localhost = require('../localhost.rocks.js').localhost;
console.log(localhost);

var memcache = require('./memcache');

var client = new memcache.Client(port, host);
client.port = 11211;
client.host = localhost;

client.on('connect', function(){
    // no arguments - we've connected
});

client.on('close', function(){
    // no arguments - connection has been closed
});

client.on('timeout', function(){
    // no arguments - socket timed out
});

client.on('error', function(e){
    // there was an error - exception is 1st argument
});

// connect to the memcache server after subscribing to some or all of these events
client.connect()

client.get('key', function(error, result){

    // all of the callbacks have two arguments.
    // 'result' may contain things which aren't great, but
    // aren't really errors, like 'NOT_STORED'

});

client.set('key', 'value', function(error, result){

    // lifetime is optional. the default is
    // to never expire (0)

}, lifetime);

client.delete('key', function(error, result){

    // delete a key from cache.
});

client.version(function(error, result)){

    // grab the server version
});

There are all the commands you would expect.

// all of the different "store" operations
// (lifetime & flags are both optional)
client.set(key, value, callback, lifetime, flags);
client.add(key, value, callback, lifetime, flags);
client.replace(key, value, callback, lifetime, flags);
client.append(key, value, callback, lifetime, flags);
client.prepend(key, value, callback, lifetime, flags);
client.cas(key, value, unique, callback, lifetime, flags);

// increment and decrement (named differently to the server commands - for now!)
// (value is optional, defaults to 1)
client.increment('key', value, callback);
client.decrement('key', value, callback);

// statistics. the success argument to the callback
// is a key=>value object
client.stats(callback);
client.stats('settings', callback);
client.stats('items', callback);
client.stats('mongeese', callback);

client.close();
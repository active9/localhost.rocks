/*
 * localhost rocks mysql example
 * 
 * To run this example try npm install mysql
 * from within the examples directory.
 * You also need a mysql instance running on the
 * same machine.
 *
 */

var localhost = require('../localhost.rocks.js').localhost;
console.log(localhost);

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : localhost,
  user     : 'me',
  password : 'secret'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
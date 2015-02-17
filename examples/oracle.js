/*
 * localhost rocks oracle example
 * 
 * To run this example try npm install oracle
 * from within the examples directory.
 * You also need a mysql instance running on the
 * same machine.
 *
 */

var localhost = require('../localhost.rocks.js').localhost;

var oracle = require('oracle');

var connectData = {
    hostname: localhost,
    port: 1521,
    database: "xe", // System ID (SID)
    user: "oracle",
    password: "oracle"
}

oracle.connect(connectData, function(err, connection) {
    if (err) { console.log("Error connecting to db:", err); return; }

    connection.execute("SELECT systimestamp FROM dual", [], function(err, results) {
        if (err) { console.log("Error executing query:", err); return; }

        console.log(results);
        connection.close(); // call only when query is finished executing
    });
});
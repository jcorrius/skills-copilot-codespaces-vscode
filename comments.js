// Create web server
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Create a connection to the database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'comments'
});

// Connect to the database
connection.connect();

// Create a table for comments
connection.query('CREATE TABLE IF NOT EXISTS comments (id INT AUTO_INCREMENT PRIMARY KEY, comment TEXT)', function(err) {
    if (err) throw err;
});
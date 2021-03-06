// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose');
var db = mongoose();

var express = require('./config/express');

var passport = require('./config/passport.js');

var app = express();

var passport = passport();

// Use the Express application instance to listen to the '3000' port
app.listen(9000);

// Log the server status to the console
console.log('Server running at http://localhost:3000/');

// Use the module.exports property to expose our Express application instance for external usage
module.exports = app;



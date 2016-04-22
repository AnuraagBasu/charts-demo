/**
 * Created by anuraagbasu on 21/04/16.
 */

var express = require('express');
var config = require('./config/environment');

var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);

console.log(process.env.NODE_ENV, config.env);

server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d', config.port);
});
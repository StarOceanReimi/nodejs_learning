var path = require('path');
var stylus = require('stylus');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname, '/public')))
app.use(stylus.middleware(path.join(__dirname, '/public')))
app.listen(Number(process.argv[2]))

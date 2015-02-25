var path = require('path');
var express = require('express');
var jade = require('jade');

var app = express();

app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'jade');

app.get('/home', function(req, res){
    res.render('welcome', { date : new Date().toDateString() })

});

app.listen(Number(process.argv[2]))

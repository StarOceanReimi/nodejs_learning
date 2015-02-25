var express = require('express');
var app = express();

app.get('/search', function(req, res){ 
    
    var json = JSON.stringify(req.query); 
    res.end(json);
});

app.listen(Number(process.argv[2]))

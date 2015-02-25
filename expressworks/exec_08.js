var express = require('express');
var fs = require('fs');
var app = express();
app.get('/books', function(req, res){ 
    fs.readFile(process.argv[3], function(err, filecontent){
        var json = JSON.parse(filecontent);
        res.json(json); 
    });
});

app.listen(Number(process.argv[2]))

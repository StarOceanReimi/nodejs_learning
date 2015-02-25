var express = require('express');
var crypto = require('crypto');
var app = express();

app.put('/message/:id', function(req, res){
    
    var id = req.params.id;
    var date = new Date().toDateString();
    var date_id = date+id;
    var ret_id = crypto.createHash('sha1').update(date_id).digest('hex');
    res.end(ret_id);
});

app.listen(Number(process.argv[2]))

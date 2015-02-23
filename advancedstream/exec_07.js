var http = require('http');
var through = require('through');

var httpServer = http.createServer(function(req, resp){
    if(req.method.toUpperCase() === 'POST') {
        req.pipe(through(function(data){
            this.queue(data.toString().toUpperCase());
        })).pipe(resp);    
    } else
        resp.end("Need a post request");
});

httpServer.listen(process.argv[2]);

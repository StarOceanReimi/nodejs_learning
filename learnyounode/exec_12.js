var http = require('http');
var map = require('through2-map');
var httpServer = http.createServer(function(req, resp){
    if(req.method.toUpperCase() !== "POST") {
        return resp.end("Please use http POST!\n");
        
    } 
    resp.writeHead(200, {'content-type':'text/plain'});
    req.pipe(map(function(chunk){
        return chunk.toString().toUpperCase();
    })).pipe(resp);
});
httpServer.listen(Number(process.argv[2]));

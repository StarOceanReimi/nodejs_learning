var http = require('http');
var fs = require('fs');
var port = Number(process.argv[2]);
var path = process.argv[3];
httpServer = http.createServer(function(req, resp){
    resp.writeHead(200, {'content-type':'text/plain'});
    var readStream = fs.createReadStream(path, {});
    readStream.pipe(resp);
    /*
    readStream.on('data', function(chunk){
        resp.write(chunk);
    });
    readStream.on('end', function(){
        resp.end();
    });*/
});
httpServer.listen(port);

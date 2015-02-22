var http = require('http');
var url = require('url');
function parsetime(date) {
    return {
        'hour'  : date.getHours(),
        'minute': date.getMinutes(),
        'second': date.getSeconds()
    }; 
}
function unixtime(date) {
    return {
        'unixtime' : date.getTime()
    };
}
var httpServer = http.createServer(function(req,resp){
    var parsedUrl = url.parse(req.url, true);
    var query = parsedUrl.query;
    var pathname = parsedUrl.pathname;
    var date = new Date(query.iso);
    var result;
    if(/^\/api\/parsetime/.test(req.url)) 
        result = parsetime(date);
    else if(/^\/api\/unixtime/.test(req.url))
        result = unixtime(date);
    if(result) {
        resp.writeHead(200, {'content-type':'application/json'});
        resp.end(JSON.stringify(result));
    } else {
        resp.writeHead(404);
        resp.end();
    }
});
httpServer.listen(Number(process.argv[2]));

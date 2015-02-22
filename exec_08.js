var http = require('http');
var bl = require('bl');
var callback = bl(function(err, chunk){
    if(err)
        return console.error(err);
    console.log(chunk.length);
    console.log(chunk.toString());
});
var url = process.argv[2];
http.get(url, function(resp){
    resp.pipe(callback);
});

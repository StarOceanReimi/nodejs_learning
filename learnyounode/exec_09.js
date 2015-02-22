var http = require('http');
var urls = process.argv.splice(2);
var result_map = {};
var result_queue = new Array(urls.length);
var write = function(url){
    return function(data) {
        result_map[url].push(data);
    };
};
urls.forEach(function(url, index){
    http.get(url, function(response){
        response.setEncoding('utf8');
        result_map[url] = [];
        response.on('error', console.error);
        response.on('data', write(url));
        response.on('end', function(){
            result_queue[index] = result_map[url].join("");
            for(var i=0; i<result_queue.length; i++) {
                if(!result_queue[i])
                    return;
            } 
            result_queue.forEach(function(data){
                console.log(data);
            });
        });
    });
});

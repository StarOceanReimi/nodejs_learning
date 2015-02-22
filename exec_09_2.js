//exec_09 better version

var http = require('http');
var bl = require('bl');
var urls = process.argv.splice(2);
var count = 0;
var results = [];
urls.forEach(function(url, index){
    http.get(url, function(resp){
        resp.pipe(bl(function(err, data){
            results[index] = data.toString();
            count++;
            if(count == urls.length)
                printResult();
        }));
    });
});

function printResult() {
    for(var i=0; i<count; i++)
        console.log(results[i]);
}


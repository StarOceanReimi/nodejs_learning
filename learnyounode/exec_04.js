var path = process.argv[2];
var fs = require('fs');
fs.readFile(path, function(err, data){
    linesNumber = data.toString().split("\n").length - 1;
    console.log(linesNumber);
});

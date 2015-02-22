var args = process.argv;
var path = Array.prototype.splice.call(args, 2)[0];
if(!path)
    throw "Please enter a path"
var fs = require('fs');
var fileBuffer = fs.readFileSync(path);
var fileString = fileBuffer.toString("utf-8");
var lines = fileString.split("\n");
console.log(lines.length-1);


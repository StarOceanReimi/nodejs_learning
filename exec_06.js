var fm = require('./f_module.js');
var args = process.argv
var dirName = args[2];
var extName = args[3];
var callback = function(err, data) {
    if(err) 
        return console.error("There was an error: "+err);
    data.forEach(function(name){
        console.log(name);
    });
};

fm(dirName, extName, callback);

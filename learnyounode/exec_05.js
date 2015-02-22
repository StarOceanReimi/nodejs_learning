var args = process.argv;
var dirName = args[2];
var filterName = args[3];

function filter(filename, filtername) {
    if(filename.indexOf('.') == -1)
        return false;

    if(filename.indexOf(filtername, filename.length-filtername.length) !== -1)
        return true;
    else
        return false;
}

var fs = require('fs');
fs.readdir(dirName, function(err, filenames){
    for(var i in filenames) {
        name = filenames[i];
        if(filter(name, filterName))
            console.log(name);
    }
});


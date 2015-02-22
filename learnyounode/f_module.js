var fs = require('fs');
var path = require('path');

var filter = function(name, filter){
    return path.extname(name) === '.' + filter;
};
module.exports = function(dirName, extName, callback) {
    fs.readdir(dirName, function(err, filenames) {
        if(err)
            return callback(err, []);
        var accpectedFiles = [];
        filenames.forEach(function(filename){
            if(filter(filename, extName)) {
                accpectedFiles.push(filename);
            }
        });
        return callback(null, accpectedFiles);
    });
}

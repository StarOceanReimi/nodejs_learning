var through = require('through');

var stream = through(write, end);

function write(data) {
    this.queue(data.toString().toUpperCase());
}
function end(){
    this.queue(null);
};
//process.stdin.pipe(stream).pipe(process.stdout);

process.stdin.pipe(stream).pipe(process.stdout);

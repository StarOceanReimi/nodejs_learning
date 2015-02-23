var split = require('split');
var through = require('through');

var count = 0;
function evenLineUpperCase(data) {
    if(++count % 2 == 0)
        data = data.toString().toUpperCase();
    else
        data = data.toString().toLowerCase();
    this.queue(data+"\n");
}
function end() {
    this.queue(null);
}
process.stdin.pipe(split())
             .pipe(through(evenLineUpperCase, end))
             .pipe(process.stdout);

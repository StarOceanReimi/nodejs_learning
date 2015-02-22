var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function(socket){
    var currentDate = strftime("%F %H:%M");
    socket.write(currentDate);
    socket.write("\n");
    socket.end();
});
server.listen(Number(process.argv[2]));

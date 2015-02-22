var args = process.argv;
args = Array.prototype.splice.call(args, 2);
sum = 0;
for(var index in args) {
    sum += parseInt(args[index]);
}
console.log(sum)


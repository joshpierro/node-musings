//process.stdout.write('hello world');

function printHelp(){
   console.log('this is the help')
}

var args = require('minimist')(process.argv.slice(2),{string:"name"});

if(args.help|| !args.name){
    printHelp();
    process.exit(1);
}
var name = args.name;
console.log('hello ' + name);
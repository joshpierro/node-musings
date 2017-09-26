//process.stdout.write('hello world');

function printHelp(){
   console.log('this is the help for ');
   console.log("usage:");
   console.log("--file={NAME} say hello to name");
}

var args = require('minimist')(process.argv.slice(2),{string:"file"});
console.log(args)
if(args.help ||  !args.file){
    printHelp();
    process.exit(1);
}
var sayHello = require("./hello-world");


var contents = sayHello.say(args.file);
console.log(contents.toString())
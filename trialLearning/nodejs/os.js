//OS MODULE EXAMPLES

const osModule = require('os');//built in module

var result = osModule.arch();//returns the architecture of the operating system as a string
console.log("Architecture of the CPU " + result);

var parResult = osModule.availableParallelism();//amount of parallelism as a number
console.log( "Amount of Parallelism " + parResult); 

var resultEOL = osModule.EOL;//end of line maker : seems to set space
console.log(resultEOL);

var resultCpus = osModule.cpus();//output an array containing information about each logical CPU core
console.log("Information about each logical CPU core");
console.log(resultCpus);

console.log("Free Memory available in bytes : " + osModule.freemem())
// var freeMemResult = osModule.freemem();//returns the amount of free system memory in bytes as a number
// console.log(freeMemResult);


//template string methods as of ES6
console.log(`Total Memory available in  bytes : ${osModule.totalmem()}`);
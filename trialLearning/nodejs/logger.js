/*(function (exports, require, module, __filename, __dirname) {//IIFE(Immediately invoke function expression)
})*/
var url = "http://mylogger.io/log";
console.log(__filename);
console.log(__dirname);
function log(message){
    // Send an HTTP request
    console.log(message);
}
// console.log(module);
module.exports.logModule = log;
module.exports.urlEndPoint = url;//implementation detail



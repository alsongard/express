
const logger = require("./logger.js");//load the module(function) that is exported in the logger.js file
// console.log(module);

// console.log(logger);
logger.logModule("message to be printed");
urlSite = logger.urlEndPoint;
console.log(urlSite);

// path module provides utilities for working with file and directory paths
var pathModule = require("path");//built in  module
var result = pathModule.parse(__filename);
console.log(result);

const LoggerClass = require("./classLogger.js");
const loggerObject  = new LoggerClass();

loggerObject.on("Message Logged from classLoger", (arg)=>{
    console.log("Listener called after event setup", arg)
});
loggerObject.log("message");

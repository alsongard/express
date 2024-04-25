const EventEmmiter = require("events");

var url="http://google.com";
class Logger extends EventEmmiter{
    log(message){
        console.log(message);
        //raise event
        this.emit("Message Logged from classLoger", {id : 1, url : "http://google.com"});
    }
}
module.exports = Logger;
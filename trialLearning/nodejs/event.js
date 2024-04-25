const EventEmmiter = require('events');
const { url } = require('inspector');
const emitter = new EventEmmiter();
 

//Register a listener
emitter.on("messageLogged", function(arg){//e, eventArg 
    console.log("Listener called", arg);
})

//Raise an event
emitter.emit('messageLogged', {id : 1, url:"http://google.com"});


//register a listener
emitter.on("logger", function(arg){
    console.log("Logger called", arg);
})
//Raise event logger
emitter.emit("logger", {name : "Gard Alson Safari", id : 37 })
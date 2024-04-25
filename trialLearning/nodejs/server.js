//setting up a server
const http = require("http");
const server = http.createServer();
//setting listener
server.on("connection", (socket)=>{
    console.log("New connection...");
});


server.listen(3000);
console.log("Listening on port 3000...");
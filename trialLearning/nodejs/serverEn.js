const http  = require("http");
const server = http.createServer(function(req,res){
    if (req.url === "/"){
        res.write("Hello Worlds");
        res.end();
    }
    if (req.url === "/api/courses"){
        res.write(JSON.stringify([1,3,4]));
        res.end();
    }
});

server.listen(3000)
console.log("listening on port 3000..")


//next is express 
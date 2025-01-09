"use strict";

const PORT = 8080;
const server = require("./modules/createHttpServer.js")();
const httpServer = require("./modules/httpServer.js");
server.on("request", httpServer);
server.on('timeout', (msg)=>{
    // console.log("Timeout check the message argument dumb ass")
});
server.listen(PORT); 


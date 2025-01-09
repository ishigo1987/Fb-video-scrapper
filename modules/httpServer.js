"use strict";

const controller = new AbortController();
const signal = controller.signal;
const responseHeader = require("./responseHeaders.js");
const postRequest = require("./postRequest.js");

module.exports = (req, res)=>{
    responseHeader(res);    
    // Right there the maximal request size is 50 MB === 52428800 Octets 
    // This limit is only for the string request
    
    const maximalRequestSize = 52428800;
    const chunks = [];

    req.on("data", (chunk)=>{
        chunks.push(chunk);

        if (chunks.toString('utf8').length > maximalRequestSize){

            // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
            // I put this line on comment to avoid an error of type response already sent
            // res.end(JSON.stringify({ Message: "Request limit reached" }));
            controller.abort();
            return req.client.destroy();

        }
    },{signal});
    
    req.on("end", async ()=>{

         if(req.method === "OPTIONS"){
                const prefligthHeaders = require("./prefligthRequest.js")();
                res.writeHead(200, prefligthHeaders);
                return res.end();
         }

         if(req.method === "POST"){

                const requestResult = await postRequest(chunks);
                if(requestResult?.Message === "RequestOk"){
                    res.writeHead(200, { 'Content-Type': 'text/json' });
                    return res.end(JSON.stringify(requestResult));
                }
                res.writeHead(500, { 'Content-Type': 'text/json' });
                return res.end(JSON.stringify(requestResult));
         }

    });

    req.on('error', (err) => {

        // This prints the error message and stack trace to `stderr`.   
        res.writeHead(400, { 'Content-Type': 'text/json' });
        return res.end(JSON.stringify({Message: "Bad request, try again"}));
    });

}
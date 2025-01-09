"use strict";

module.exports = (chunks)=>{ 

     return new Promise(async (resolve)=>{
            const { StringDecoder } = require('node:string_decoder');
            const buffer = Buffer.concat(chunks); 
            const decoder = new StringDecoder('utf8');
            const request = JSON.parse(decoder.write(buffer));
            const requestReturn = await require(`./${request?.requestName}.js`)(request?.data);
            return resolve(requestReturn);

     });
    
};
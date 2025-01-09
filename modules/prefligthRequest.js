"use strict";

module.exports = ()=>{
     
    const headers = {};

    // Need to replace this line by the domain name
    headers["Access-Control-Allow-Origin"] = "http://127.0.0.1:5500"; // Need to be replace by the domain name
    headers["Access-Control-Allow-Methods"] = "POST, GET, OPTIONS";
    headers["Access-Control-Allow-Credentials"] = true; // But will be put to false for production
    headers["Access-Control-Max-Age"] = '86400'; // 24 hours
    headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization";
   
    return headers;

}
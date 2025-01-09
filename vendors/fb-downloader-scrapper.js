"use strict";

module.exports = (fbUrl)=>{ 
    return new Promise((resolve)=>{
            const getFbVideoInfo = require("fb-downloader-scrapper");
            getFbVideoInfo(fbUrl)
            .then((result)=>{
                return resolve(result);
            }).catch((err)=>{
                return resolve("Error with scrapping");
            });
    });

}
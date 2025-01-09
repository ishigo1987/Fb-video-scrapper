"use strict";

module.exports = (data)=>{
       
      return new Promise(async (resolve)=>{
            const fbResult = await require("../vendors/fb-downloader-scrapper.js")(data?.facebookUrl);
            if(fbResult === "Error with scrapping"){
                    return resolve({
                         status:500,
                         Message: "ScrappingError"
                    });
            }

            return resolve({
                   Message: "RequestOk",
                   status: 200,
                   Data: fbResult
            });
          
      });
}
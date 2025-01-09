import fetchData from "../services/fetch-data.mjs";

export default function getDownloadLink(link){
    
      return new Promise(async (resolve)=>{
            
            if(link === ""){
                  return resolve({Message: "NoLink"});
            }
            // Can change in the future, be careful
            if(link.startsWith("https://www.facebook.com") === false && link.startsWith("https://fb.watch") === false){
                  return resolve({Message: "WrongLink"});
            }

            const dataToSend = {
                   requestName: "get-video-links",
                   data:{
                        facebookUrl: link
                   }
            }

            const getData = await fetchData(dataToSend, null);
            return resolve(getData);
      });
}
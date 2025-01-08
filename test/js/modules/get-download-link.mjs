
export default function getDownloadLink(link){
    // https://www.facebook.com/share/v/15qyFaycY2/
      return new Promise((resolve)=>{
            
            if(link === ""){
                  return resolve({Message: "NoLink"});
            }
            // Can change in the future, be careful
            if(link.startsWith("https://www.facebook.com") === false){
                  return resolve({Message: "WrongLink"});
            }
      });
}
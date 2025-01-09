import config from "../config.mjs";
/** 
   * This helper is used to retrieve and send data to the server
   * @param {options} object
   * @param {requestData} object
   * @return {promise} object
*/

export default function fetchData(requestData, options){ 

    return new Promise((resolve)=>{

        const url = config?.baseUrl;
        options = options ?? {

            method: "POST",
            body:JSON.stringify(requestData),
            timeout: 16000,
            credentials: "same-origin",
            headers: {
              "Content-Type": "text/json",
            }
        };

        return fetch(url, options).then((response)=>{ 
            return response.json();

        }).then((result)=>{
            return resolve(result);

        }).catch((error)=>{  
            return resolve(error);

        });

     });

}

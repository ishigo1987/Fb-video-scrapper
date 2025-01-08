import getDownloadLink from "../modules/get-download-link.mjs";
import formatResponse from "../helpers/format-response.mjs";
import modal from "../helpers-view/modal.mjs";

export default function eventGetDownloadLink(){
      
       document.querySelector("#get-download-link").addEventListener("click", async ()=>{
             
              const videoLink = document.querySelector("#url-video").value;
              const result = await getDownloadLink(videoLink);
              const dialog = await modal("Messages", formatResponse(result?.Message), "Fermer");
              dialog.showModal();
       })
}
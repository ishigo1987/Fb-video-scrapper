import getDownloadLink from "../modules/get-download-link.mjs";
import formatResponse from "../helpers/format-response.mjs";
import modal from "../helpers-view/modal.mjs";

export default function eventGetDownloadLink(){
      
       document.querySelector("#get-download-link").addEventListener("click", async function(){
             
              this.textContent = "Opération en cours..."
              const videoLink = document.querySelector("#url-video").value;
              const result = await getDownloadLink(videoLink);
              let dialog;
              this.textContent = "Obtenir le lien de téléchargement";
              if(result?.status === 200){
                     const videoInfo = `
                          <p><strong>Titre</strong>: ${result?.Data?.title}</p>
                          <p><strong>Url initiale</strong>: ${result?.Data?.url}</p>
                          <p><strong>Version SD</strong>: ${result?.Data?.sd}</p>
                          <p><strong>Version HD</strong>: ${result?.Data?.hd}</p>
                          <p><strong>Vignette</strong>: ${result?.Data?.thumbnail}</p>
                     `
                     dialog = await modal("Informations sur la vidéo", videoInfo);
                     return dialog.showModal();
              }
              
              dialog = await modal("Messages", formatResponse(result?.Message));
              return dialog.showModal();

             
       })
}
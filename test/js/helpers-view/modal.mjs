import render from "../helpers/render.mjs"

export default function modal(title, message, buttonText = "Fermer"){  

      return new Promise(async (resolve)=>{
           
            const modal = `
                <dialog>
                    <span>${title}</span>
                    <p>${message}</p>
                    <button id="close-modale">${buttonText}</button>
                </dialog>
            `;
            await render(document.querySelector("body"), modal, "inAdjHtml");
            document.querySelector("#close-modale").addEventListener("click", function(){
                this.parentElement.close();
                return this.parentElement.remove();
            });
            return resolve(document.querySelector("dialog")); 
      })

}
import render from "../helpers/render.mjs"

export default function modal(title, message, buttonText){  

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
                return this.parentElement.close();
            });
            return resolve(document.querySelector("dialog")); 
      })

}
/** 
   * Fonction qui met a jour un noeud de DOM
   * @param {domNode} domNode
   * @param {string} htmlElements
   * @param {string} typeOfRender
   * @return {Promise}
 */
export default function render(domNode, htmlElements, typeOfRender = "replaceChildren"){

    return new Promise((resolve)=>{

            if(domNode === null){

                return resolve("Le noeud de DOM ne peut pas être mis à jour.");
            }
    
    
            // https://developer.mozilla.org/fr/docs/Web/API/Window/requestAnimationFrame

            requestAnimationFrame(()=>{

                    if(typeOfRender === "replaceChildren"){

                        domNode.replaceChildren(htmlElements);


                    }else{

                        domNode.insertAdjacentHTML("beforeend", htmlElements);

                    }


                    return resolve("noeud de DOM ajouté");

            }, domNode);

    });
}

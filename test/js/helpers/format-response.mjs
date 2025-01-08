export default function formatResponse(message){
      
      // We can use a switch case too
      if(message === "NoLink"){
          return "Veuillez entrer un lien de téléchargement.";
      }
      if(message === "WrongLink"){
          return "Veuillez entrer un lien de téléchargement pour facebook uniquement.";
      }
}
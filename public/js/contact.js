// On récupère l'objet portant l'id bouton-envoyer (input submit) et on le stocke dans la variable formValid
//let formValid = document.getElementById("contact_get");
formValid.addEventListener("click",function(event){
    validSomething(event, nom, nomValid, errorNom, "nom");
    validSomething(event, prenom, prenomValid, errorPrenom, "prenom");
    validSomething(event, mail, mailValid, errorMail, "mail");
    validSomething(event, Mobile, MobileValid, errorMobile, "mobile");
})
// ---- On teste le nom -------
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

//-------- On teste le prenom ---------------------
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

// ---------On teste le mail -----------
let mailValid = /^[a-z0-9._-]+@[a-z0-9._-]+com|[a-z0-9._-]+@[a-z0-9._-]+fr$/;

// --------------- On teste le Mobile ---------
let MobileValid = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;


function validSomething(event, element, nomValid, output, prefix){
    //si le champs est vide alors il ecrira: prenom manquant en bleu
    if(element.validity.valueMissing){
        event.preventDefault();
        output.textContent = prefix + " manquant";
        output.style.color = "red";
    }
    // si le format de données est incorrect
     else if (nomValid.test(element.value)=== false){
        //stop l'envoie du formulaire 
        event.preventDefault();
        output.textContent = "format incorrect";
        output.style.color = "red";
    }
}






// On récupère l'objet portant l'id bouton-envoyer (input submit) et on le stocke dans la variable formValid
let formValid = document.getElementById("contact_get");


// ---- On teste le nom -------

// On récupère l'objet portant l'id errorNom (span) et on le stocke dans la variable errorNom
// let errorNom = document.getElementById("errorNom");
// On récupère l'objet portant l'id nom (input text) et on le stocke dans la variable nom
var nom = document.getElementById("nom");
//On déclare un variable rexexp pour tester la validité du nom
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

//On abonne le bouton input submit sur l'évènement click à appeler la fonction validationNom
formValid.addEventListener("click", validationNom);

function validationNom(event){
   
   

    //si le champs est vide alors il ecrira: prenom manquant en bleu
    if(nom.validity.valueMissing){
        event.preventDefault();
     
        errorNom.textContent = "Nom manquant";
        errorNom.style.color = "blue";
       
    }
    // si le format de données est incorrect
     else if (nomValid.test(nom.value)=== false){
     
        //stop l'envoie du formulaire 
        event.preventDefault();
        errorNom.textContent = "Format incorrect";
        errorNom.style.color = "red";
    }
    else{
        
        errorNom.textContent = "";
    }
}


// ------------------------------------------ On teste le prenom ---------------------------

let errorPrenom = document.getElementById("errorPrenom");
let prenom = document.getElementById("prenom");
//On déclare un variable rexexp pour tester la validité du prénom
    //1code veut dire:commence par une lettre non accentuée en majuscule ou minuscule soit par un caractères suivants: éèîÏ
    //2 second prénom:commence par une apostrophe, un tiret ou un espace suivie d'un \s,et se poursuit du 2 prénom. en soi c'est le même que a gauche.
    //le point d'interrogation est entouré au préalable par des parenthèses.
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

formValid.addEventListener ("click", validationPrenom);

function validationPrenom(event){
     if(prenom.validity.valueMissing){
         event.preventDefault();
         errorPrenom.textContent = "Prénom manquant";
         errorPrenom.style.color = "blue";
     }
     else if (prenomValid.test(prenom.value)== false){
         event.preventDefault();
         errorPrenom.textContent = "Format incorrect";
         errorPrenom.style.color = "red";
     }
     else{
        console.log("->valeur ok");
        errorPrenom.textContent = "";
    }
 }




// ---- --------------------------On teste le mail ----------------------------------------------

let errorMail = document.getElementById("error_Mail");
let mail = document.getElementById("e_mail");
let mailValid = /^[a-z0-9._-]+@[a-z0-9._-]+com|[a-z0-9._-]+@[a-z0-9._-]+fr$/;

formValid.addEventListener ("click", validationMail);

function validationMail(event){
     // si le test du regex est faux il mettra error.
    if(mail.validity.valueMissing){
        event.preventDefault();
        errorMail.textContent = "Mail manquant";
        errorMail.style.color = "blue";
        
    }//si le test du regex est faux il mettra error.
    else if (mailValid.test(mail.value)== false){
    
        event.preventDefault();
        errorMail.textContent = "Format incorrect";
        errorMail.style.color = "red";
    }
    else{
        
        errorMail.textContent = "";
    }
}



// ------------------------------ On teste le Mobile --------------------------------------------
let errorMobile = document.getElementById("errorMobile");
let Mobile = document.getElementById("Mobile");
let MobileValid = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

formValid.addEventListener ("click", validationMobile);

function validationMobile(event){
    if(Mobile.validity.valueMissing){
        event.preventDefault();
        errorMobile.textContent = "Mobile manquant";
        errorMobile.style.color = "blue";
    }
    else if (MobileValid.test(Mobile.value)== false){
        event.preventDefault();
        errorMobile.textContent = "Format incorrect";
        errorMobile.style.color = "red";
    }
    else{
        console.log("->valeur ok");
        errorMobile.textContent = "";
    }
}

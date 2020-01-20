// ---- On teste le nom -------//
let formValidCreez = document.getElementById("boutonEnvoyerCreez");

let errorNomCreez = document.getElementById("errorNomCreez");
let nomCreez = document.getElementById("nomCreez");
let nomValidCreez = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

//On abonne le bouton input submit sur l'évènement click à appeler la fonction validationNom
formValidCreez.addEventListener("click", validationNomCreez);

function validationNomCreez(event){
    //console.log("nom :"+nomCreez.value);
    //console.log("valueMissing :"+nomCreez.validity.valueMissing);
    //console.log("Test regex :"+nomValidCreez.test(nomCreez.value));

    //si le champs est vide alors il ecrira: prenom manquant en bleu
    if(nomCreez.validity.valueMissing){
        
        event.preventDefault();
        errorNomCreez.textContent = "nom manquant";
        errorNomCreez.style.color = "blue";
    }
    //si le format de données est incorrect
    else if (nomValidCreez.test(nomCreez.value)== false){
        //console.log("->valeur incorrect");
        //stop l'envoie du formulaire 
        event.preventDefault();
        errorNomCreez.textContent = "Format incorrect";
        errorNomCreez.style.color = "red";
    }
    else{
       // console.log("->valeur ok");
        errorNomCreez.textContent = "";
    }
}
// ------------on test le prenom-------------------


let errorPrenomCreez = document.getElementById("errorPrenomCreez");
let prenomCreez = document.getElementById("prenomCreez");
let prenomValidCreez = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

//On abonne le bouton input submit sur l'évènement click à appeler la fonction validationNom
formValidCreez.addEventListener("click", validationPrenomCreez);

function validationPrenomCreez(event){
        //si le champs est vide alors il ecrira: prenom manquant en bleu
     if(prenomCreez.validity.valueMissing){
         event.preventDefault();
         errorPrenomCreez.textContent = "prénom manquant";
         errorPrenomCreez.style.color = "blue";
     }
        //si le format de données est incorrect
     else if (prenomValidCreez.test(prenomCreez.value)== false){
         event.preventDefault();
         errorPrenomCreez.textContent = "Format incorrect";
         errorPrenomCreez.style.color = "red";
     }
     else{
        errorPrenomCreez.textContent = "";
    }
 }
 // -------------------------------

 //-----------on test le mail-------

 let errorMailCreez = document.getElementById("errorMailCreez");
let mailCreez = document.getElementById("emailCreez");
let mailValidCreez = /^[a-z0-9._-]+@[a-z0-9._-]+com|[a-z0-9._-]+@[a-z0-9._-]+fr$/;

formValidCreez.addEventListener("click", validationMailCreez);

function validationMailCreez(event){
    if(mailCreez.validity.valueMissing){
        event.preventDefault();
        errorMailCreez.textContent = "Mail manquant";
        errorMailCreez.style.color = "blue";
    }
    else if (mailValidCreez.test(mailCreez.value)== false){
        event.preventDefault();
        errorMailCreez.textContent = "Format incorrect";
        errorMailCreez.style.color = "red";
    }
    else{
        errorMailCreez.textContent = "";
    }
}
//-----------------------------------------

// ---- On teste le Mobile ------------------
let errorMobileCreez = document.getElementById("errorMobileCreez");
let MobileCreez = document.getElementById("mobileCreez");
let MobileValidCreez = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

formValidCreez.addEventListener("click", validationMobileCreez);

function validationMobileCreez(event){
    if(MobileCreez.validity.valueMissing){
        event.preventDefault();
        errorMobileCreez.textContent = "Mobile manquant";
        errorMobileCreez.style.color = "blue";
    }
    else if (MobileValidCreez.test(MobileCreez.value)== false){
        event.preventDefault();
        errorMobileCreez.textContent = "Format incorrect";
        errorMobileCreez.style.color = "red";
    }
    else{
        errorMobileCreez.textContent = "";
    }
}
//-----------------------------------------

////-----on teste le password-------------
let errorPassCreez = document.getElementById("errorMotDePasseCreez");
let PasswordCreez = document.getElementById("motDePasseCreez");
let PassValidCreez = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);

formValidCreez.addEventListener("click", validationPasswordCreez);

function validationPasswordCreez(event){
    if(PasswordCreez.validity.valueMissing){
        event.preventDefault();
        errorPassCreez.textContent = "Mot passe manquant";
        errorPassCreez.style.color = "blue";
    }
    else if (PassValidCreez.test(PasswordCreez.value)== false){
        event.preventDefault();
        errorPassCreez.textContent = "Format incorrect";
        errorPassCreez.style.color = "red";
    }
    else{
        errorPassCreez.textContent = "";
    }
}




////-----on teste DePasseConfirm-------------
let errorPassConfirm = document.getElementById("errorMotDePasseConfirm");
let PasswordConfirm = document.getElementById("motDePasseConfirm");
let PassValidConfirm = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);

formValidCreez.addEventListener("click", validationPasswordConfirm);

function validationPasswordConfirm(event){
    if(PasswordConfirm.validity.valueMissing){
        event.preventDefault();
        errorPassConfirm.textContent = "Mot passe manquant";
        errorPassConfirm.style.color = "blue";
    }
    else if (PassValidConfirm.test(PasswordConfirm.value)== false){
        event.preventDefault();
        errorPassConfirm.textContent = "Format incorrect";
        errorPassConfirm.style.color = "red";
    }
    else{
        errorPassConfirm.textContent = "";
    }
}

//-----------------------------------------.

//---------on teste la date de naissance---------
let errorDateCreez = document.getElementById("errorDateCreez");
let DateDeNaissanceCreez = document.getElementById("dateCreez");
let DateValidCreez = (/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/);

formValidCreez.addEventListener("click",validationDateDeNaissanceCreez);

function validationDateDeNaissanceCreez(event){
                              //valeur manquante    
    if(DateDeNaissanceCreez.validity.valueMissing){
        event.preventDefault();
        errorDateCreez.textContent = "Date manquante";
        errorDateCreez.style.color = "blue";
    }//   si la valeur de date de naissance ne respecte pas le regex dateValid
    else if (DateValidCreez.test(DateDeNaissanceCreez.value)==false){
        event.preventDefault();//coupe l'envoie du formulaire
        errorDateCreez.textContent = "Format incorrect";
        errorDateCreez.style.color = "red";
    }
    else{
        errorDateCreez.textContent="";
    }
}

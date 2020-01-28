let formValidCreez = document.getElementById("boutonEnvoyerCreez");
formValidCreez.addEventListener("click",function(event){
    
    validSomething(event, prenomCreez, prenomValidCreez, errorPrenomCreez, "prénom");
    validSomething(event, nomCreez, nomValidCreez, errorNomCreez, "nom");
    validSomething(event, emailCreez, mailValidCreez, errorMailCreez, "email");
    validSomething(event, mobileCreez, MobileValidCreez, errorMobileCreez, "mobile");
    validSomething(event, motDePasseCreez, PassValidCreez, errorMotDePasseCreez, "mot de passe");
    validSomething(event, motDePasseConfirm, PassValidConfirm, errorMotDePasseConfirm, "mot de passe");
    validSomething(event, dateCreez, DateValidCreez, errorDateCreez, "date")
})
// -----on test le prenom---------
let prenomValidCreez = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

// ---- On teste le nom ----------
let nomValidCreez = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

//-----------on test le mail-------
let mailValidCreez = /^[a-z0-9._-]+@[a-z0-9._-]+com|[a-z0-9._-]+@[a-z0-9._-]+fr$/;

// ---- On teste le Mobile --------
let MobileValidCreez = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;

//-----on teste le password--------
let PassValidCreez = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);

//-----on teste De PasseConfirm----
let PassValidConfirm = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);

//-----on teste la date de naissance---------
let DateValidCreez = (/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/);



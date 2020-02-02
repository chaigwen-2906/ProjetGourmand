// On récupère l'objet portant l'id bouton-envoyer (input submit) et on le stocke dans la variable formValid
let formValid = document.getElementById("contact_get");
formValid.addEventListener("click",function(event){
    validSomething(event, nom, nomValid, errorNom, "nom");
    validSomething(event, prenom, prenomValid, errorPrenom, "prénom");
    validSomething(event, e_mail, mailValid, error_Mail, "mail");
    validSomething(event, Mobile, MobileValid, errorMobile, "mobile");
    
    envoieMessage();
})
// ---- On teste le nom -------
let nomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

//-------- On teste le prenom ---------------------
let prenomValid = /^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/ ;

// ---------On teste le mail -----------
let mailValid = /^[a-z0-9._-]+@[a-z0-9._-]+com|[a-z0-9._-]+@[a-z0-9._-]+fr$/;

// --------------- On teste le Mobile ---------
let MobileValid = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;



function envoieMessage() { // methode post j'envoie un message
    let apiUrl = " https://slack.com/api/chat.postMessage"; // se trouve dans api slack
    let channel = "#bot";
    let token = creds.token;
    let prenon = document.getElementById("prenom").value; //pour mettre les deux
    let text = document.getElementById("message").value;
    let nom = document.getElementById("nom").value;
    let adresse = document.getElementById("adresse").value;
    let e_mail = document.getElementById("e_mail").value;
    //console.log(token);

    $.ajax({
        //url de la requete
        url: apiUrl, 
        //methode d'attaque
        type: "Post", 
        //paramètre de données en entrée
        data: {
            "token":token,
            "channel": channel,
            "text":"Mon adresse"+ " " + e_mail + "\n" + "je m'appel " + prenon + " " + nom + "\n"
            + "et j'habite " + adresse + " " + text,// on peut aussi en mettre plusieurs(text + " " + text1)
        }, 
        //type de données attendu en sortie
        dataType: "text", 
        //Gestion du cas d'erreur
        error: function (error) {
            alert("Nous sommes désolé, une erreur s'est produite");
           // console.log("error: " + error);
        },
        //Gestion du cas succes
        success: function (data) {
            alert("Votre message a bien été envoyé");
          //  console.log("resultat" + data);
        },
    });
}


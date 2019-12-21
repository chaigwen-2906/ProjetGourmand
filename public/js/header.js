/*-------------------------------------------barre de cookies-------------------------------------------------------*/

let BtnCookieAccepter = document.getElementById("BtnCookieAccepter");

BtnCookieAccepter.addEventListener("click",function(){
    sessionStorage.setItem('AcceptCookie', 'ok');
    masquerBandeauCookies();
});
// masque le bandeau 
function masquerBandeauCookies(){
    let divBandeauCookies = document.getElementById("cookies");
    divBandeauCookies.style.display = "none";
}
//On teste si une variable de session acceptCookies existe
if(sessionStorage.getItem('AcceptCookie'))
{
    if(sessionStorage.getItem('AcceptCookie') == 'ok')
    {
        masquerBandeauCookies();
    }
}


/* ------------------------------------------Gestion du menu class Ative--------------------------------- */

function menuActive(indexActive){

    //On récupère le conteneur du menu
    let conteneurMenu = document.getElementById("conteneurMenu");

    //On récupère dans un tableau les éléments li qui porte la classe nav-item
    let tabElementLi = conteneurMenu.getElementsByClassName("nav-item");

    //On ajoute la classe active sur l'élément dont l'index est indexActive
    tabElementLi[indexActive].className += " active";
}



/*----------------------------------------------- Gestion du panier------------------------------------------------- */

//On récupère l'élément image qui porte l'id boutonPanier
let btnPanier = document.getElementById("boutonPanier");

//On abonne l'image boutonPanier à l'évènement click
btnPanier.addEventListener("click",function() {AffichePanier();});

//On décrit la fonction AffichePanier
function AffichePanier(){
    alert("Bientôt votre panier !");
}

/*-------------------------------------------connecter boite modal---------------------------------------------------*/

let bloc_connexion = document.querySelector("#bloc_connexion");
let bloc_deconnexion = document.querySelector("#bloc_deconnexion");

//On teste si une variable de session ConnectOk existe
if(sessionStorage.getItem('ConnectOk')){
    //On test si la variable de session ConnectOk est égale à true 
    if(sessionStorage.getItem('ConnectOk') == "OK")
    {
        //L'utilisateur est connecté
        bloc_deconnexion.style.display = "block";
        bloc_connexion.style.display = "none";
    }
    else{
        //L'utilisateur n'est pas connecté
        bloc_deconnexion.style.display = "none";
        bloc_connexion.style.display = "flex";
    }
}
else{
    //L'utilisateur n'est pas connecté
    bloc_deconnexion.style.display = "none";
    bloc_connexion.style.display = "flex";
}

//on récupére le btn du formulaire
let modalValid = document.getElementById("modal_get");

//j'appel la fonction validFormSeconnecter lorsque l'utilisateur  click sur le btn
modalValid.addEventListener("click",validFormSeconnecter);

function validFormSeconnecter(){

    //on crée la variable testForm et on lui donne la valeur true
    let testForm = true;
     //-----------on test le mail-------

    let errorMailConnecte = document.getElementById("errorMailConnecte");
    let mailConnecte = document.getElementById("mail_modal");
    let mailValidConnecte = /^[a-z0-9._-]+@[a-z0-9._-]+com|[a-z0-9._-]+@[a-z0-9._-]+fr$/;

    if(mailConnecte.validity.valueMissing){
        event.preventDefault();
        errorMailConnecte.textContent = "Mail manquant";
        errorMailConnecte.style.color = "blue";
        testForm = false;
    }
    else if (mailValidConnecte.test(mailConnecte.value)== false){
        event.preventDefault();
        errorMailConnecte.textContent = "Format incorrect";
        errorMailConnecte.style.color = "green";
        testForm = false;
    }
    else{
        
        errorMailConnecte.textContent = "";
    }
        //---------------on teste le password-------------

    let errorPass = document.getElementById("errorMotDePasse");
    let Password = document.getElementById("motDePasse");
    let PassValid = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);

    if(Password.validity.valueMissing){
        event.preventDefault();
        errorPass.textContent = "Mot passe manquant";
        errorPass.style.color = "blue";
        testForm = false;
    }
    else if (PassValid.test(Password.value)== false){
     
        event.preventDefault();
        errorPass.textContent = "Format incorrect";
        errorPass.style.color = "green";
        testForm = false;
    }
    else{
        errorPass.textContent = "";
    }

    if(testForm == true)
    {
        //On déclare un variable de session
        sessionStorage.setItem('ConnectOk', "OK");
    }       
}


let btnSedeconnecter =document.querySelector("btnSeDeconnecter");
btnSeDeconnecter.addEventListener("click", Deconnexion);

function Deconnexion(){
    bloc_connexion.style.display = "flex";
    bloc_deconnexion.style.display = "none";
    sessionStorage.setItem('ConnectOk', "pasOK");
}







/*----------------------------------------------------gestion du retour en haut -------------------------------------*/
let btnHaut = document.getElementById("retourHaut");

btnHaut.addEventListener("click",function(){
    retourneEnHaut();
});
function retourneEnHaut(){
    //scroll 0.0 veut dire: horizon && vertical
    window.scrollTo(0,0);
}

/* Affichage du bouton retour en haut*/

btnHaut.style.display = "none";
/*Lorsque qu'un scrool est réalisé sur la fenetre, on appelle la fonction AfficheBtnHaut */
window.onscroll = function() {AfficheBtnHaut(btnHaut)};

function AfficheBtnHaut(btnHaut) {
    if (document.documentElement.scrollTop > 250) {
        btnHaut.style.display = "block";
    }
    else{
        btnHaut.style.display = "none";
    }
}
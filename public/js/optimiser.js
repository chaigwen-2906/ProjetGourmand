/*header*/let BtnCookieAccepter=document.getElementById("BtnCookieAccepter");BtnCookieAccepter.addEventListener("click",function(){sessionStorage.setItem('AcceptCookie','ok');masquerBandeauCookies()});function masquerBandeauCookies(){let divBandeauCookies=document.getElementById("cookies");divBandeauCookies.style.display="none"}
if(sessionStorage.getItem('AcceptCookie'))
{if(sessionStorage.getItem('AcceptCookie')=='ok')
{masquerBandeauCookies()}}
function menuActive(indexActive){let conteneurMenu=document.getElementById("conteneurMenu");let tabElementLi=conteneurMenu.getElementsByClassName("nav-item");tabElementLi[indexActive].className+=" active"}
let btnPanier=document.getElementById("boutonPanier");btnPanier.addEventListener("click",function(){AffichePanier()});function AffichePanier(){alert("Bientôt votre panier !")}
let bloc_connexion=document.querySelector("#bloc_connexion");let bloc_deconnexion=document.querySelector("#bloc_deconnexion");if(sessionStorage.getItem('ConnectOk')){if(sessionStorage.getItem('ConnectOk')=="OK")
{bloc_deconnexion.style.display="block";bloc_connexion.style.display="none"}
else{bloc_deconnexion.style.display="none";bloc_connexion.style.display="flex"}}
else{bloc_deconnexion.style.display="none";bloc_connexion.style.display="flex"}
let modalValid=document.getElementById("modal_get");modalValid.addEventListener("click",validFormSeconnecter);function validFormSeconnecter(){let testForm=!0;let errorMailConnecte=document.getElementById("errorMailConnecte");let mailConnecte=document.getElementById("mail_modal");let mailValidConnecte=/^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$/;if(mailConnecte.validity.valueMissing){event.preventDefault();errorMailConnecte.textContent="Mail manquant";errorMailConnecte.style.color="blue";testForm=!1}
else if(mailValidConnecte.test(mailConnecte.value)==!1){event.preventDefault();errorMailConnecte.textContent="Format incorrect";errorMailConnecte.style.color="green";testForm=!1}
else{errorMailConnecte.textContent=""}
let errorPass=document.getElementById("errorMotDePasse");let Password=document.getElementById("motDePasse");let PassValid=(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);if(Password.validity.valueMissing){event.preventDefault();errorPass.textContent="Mot passe manquant";errorPass.style.color="blue";testForm=!1}
else if(PassValid.test(Password.value)==!1){event.preventDefault();errorPass.textContent="Format incorrect";errorPass.style.color="green";testForm=!1}
else{errorPass.textContent=""}
if(testForm==!0)
{sessionStorage.setItem('ConnectOk',"OK")}}
let btnSedeconnecter=document.querySelector("btnSeDeconnecter");btnSeDeconnecter.addEventListener("click",Deconnexion);function Deconnexion(){bloc_connexion.style.display="flex";bloc_deconnexion.style.display="none";sessionStorage.setItem('ConnectOk',"pasOK")}
let btnHaut=document.getElementById("retourHaut");btnHaut.addEventListener("click",function(){retourneEnHaut()});function retourneEnHaut(){window.scrollTo(0,0)}
btnHaut.style.display="none";window.onscroll=function(){AfficheBtnHaut(btnHaut)};function AfficheBtnHaut(btnHaut){if(document.documentElement.scrollTop>250){btnHaut.style.display="block"}
else{btnHaut.style.display="none"}}
/*index*/let tabImgSlider=["public/images/slider/entreprise.jpg","public/images/slider/epicerie-rayons.jpg","public/images/slider/baieVerveine.jpg","public/images/slider/masala.jpg","public/images/slider/poivres.jpg","public/images/slider/torsades-aux-epices.jpg","public/images/slider/fruit-en-poudre.jpg"];let numImgSlider=0;let imgSlider=document.getElementById("imgSlider");let gauche=document.getElementById("gauche");let droite=document.getElementById("droite");imgSlider.src=tabImgSlider[numImgSlider];setInterval("nextImage()",4000);gauche.addEventListener('click',function(){previousImage()});droite.addEventListener('click',function(){nextImage()});function nextImage()
{numImgSlider=numImgSlider+1;if(numImgSlider==7){numImgSlider=0}
imgSlider.src=tabImgSlider[numImgSlider]}
function previousImage()
{numImgSlider=numImgSlider-1;if(numImgSlider==-1){numImgSlider=6}
imgSlider.src=tabImgSlider[numImgSlider]}
/*contact*/let formValidContact=document.getElementById("contact_get");var nom=document.getElementById("nom");let nomValid=/^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;formValidContact.addEventListener("click",validationNom);function validationNom(event){if(nom.validity.valueMissing){event.preventDefault();errorNom.textContent="Nom manquant";errorNom.style.color="blue"}
else if(nomValid.test(nom.value)===!1){event.preventDefault();errorNom.textContent="Format incorrect";errorNom.style.color="red"}
else{errorNom.textContent=""}}
let errorPrenom=document.getElementById("errorPrenom");let prenom=document.getElementById("prenom");let prenomValid=/^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;formValid.addEventListener("click",validationPrenom);function validationPrenom(event){if(prenom.validity.valueMissing){event.preventDefault();errorPrenom.textContent="Prénom manquant";errorPrenom.style.color="blue"}
else if(prenomValid.test(prenom.value)==!1){event.preventDefault();errorPrenom.textContent="Format incorrect";errorPrenom.style.color="red"}
else{console.log("->valeur ok");errorPrenom.textContent=""}}
let errorMail=document.getElementById("error_Mail");let mail=document.getElementById("e_mail");let mailValid=/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;formValid.addEventListener("click",validationMail);function validationMail(event){if(mail.validity.valueMissing){event.preventDefault();errorMail.textContent="Mail manquant";errorMail.style.color="blue"}
else if(mailValid.test(mail.value)==!1){event.preventDefault();errorMail.textContent="Format incorrect";errorMail.style.color="red"}
else{errorMail.textContent=""}}
let errorMobile=document.getElementById("errorMobile");let Mobile=document.getElementById("Mobile");let MobileValid=/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;formValid.addEventListener("click",validationMobile);function validationMobile(event){if(Mobile.validity.valueMissing){event.preventDefault();errorMobile.textContent="Mobile manquant";errorMobile.style.color="blue"}
else if(MobileValid.test(Mobile.value)==!1){event.preventDefault();errorMobile.textContent="Format incorrect";errorMobile.style.color="red"}
else{console.log("->valeur ok");errorMobile.textContent=""}}
/*creerCompte*/let formValidCreez=document.getElementById("boutonEnvoyerCreez");let errorNomCreez=document.getElementById("errorNomCreez");let nomCreez=document.getElementById("nomCreez");let nomValidCreez=/^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;formValidCreez.addEventListener("click",validationNomCreez);function validationNomCreez(event){if(nomCreez.validity.valueMissing){event.preventDefault();errorNomCreez.textContent="nom manquant";errorNomCreez.style.color="blue"}
else if(nomValidCreez.test(nomCreez.value)==!1){event.preventDefault();errorNomCreez.textContent="Format incorrect";errorNomCreez.style.color="green"}
else{errorNomCreez.textContent=""}}
let errorPrenomCreez=document.getElementById("errorPrenomCreez");let prenomCreez=document.getElementById("prenomCreez");let prenomValidCreez=/^[a-zA-ZéèîïÉÈÎÏ]{2,}[a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;formValidCreez.addEventListener("click",validationPrenomCreez);function validationPrenomCreez(event){if(prenomCreez.validity.valueMissing){event.preventDefault();errorPrenomCreez.textContent="prénom manquant";errorPrenomCreez.style.color="blue"}
else if(prenomValidCreez.test(prenomCreez.value)==!1){event.preventDefault();errorPrenomCreez.textContent="Format incorrect";errorPrenomCreez.style.color="green"}
else{errorPrenomCreez.textContent=""}}
let errorMailCreez=document.getElementById("errorMailCreez");let mailCreez=document.getElementById("emailCreez");let mailValidCreez=/^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;formValidCreez.addEventListener("click",validationMailCreez);function validationMailCreez(event){if(mailCreez.validity.valueMissing){event.preventDefault();errorMailCreez.textContent="Mail manquant";errorMailCreez.style.color="blue"}
else if(mailValidCreez.test(mailCreez.value)==!1){event.preventDefault();errorMailCreez.textContent="Format incorrect";errorMailCreez.style.color="red"}
else{errorMailCreez.textContent=""}}
let errorMobileCreez=document.getElementById("errorMobileCreez");let MobileCreez=document.getElementById("mobileCreez");let MobileValidCreez=/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;formValidCreez.addEventListener("click",validationMobileCreez);function validationMobileCreez(event){if(MobileCreez.validity.valueMissing){event.preventDefault();errorMobileCreez.textContent="Mobile manquant";errorMobileCreez.style.color="blue"}
else if(MobileValidCreez.test(MobileCreez.value)==!1){event.preventDefault();errorMobileCreez.textContent="Format incorrect";errorMobileCreez.style.color="green"}
else{errorMobileCreez.textContent=""}}
let errorPassCreez=document.getElementById("errorMotDePasseCreez");let PasswordCreez=document.getElementById("motDePasseCreez");let PassValidCreez=(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);formValidCreez.addEventListener("click",validationPasswordCreez);function validationPasswordCreez(event){if(PasswordCreez.validity.valueMissing){event.preventDefault();errorPassCreez.textContent="Mot passe manquant";errorPassCreez.style.color="blue"}
else if(PassValidCreez.test(PasswordCreez.value)==!1){event.preventDefault();errorPassCreez.textContent="Format incorrect";errorPassCreez.style.color="green"}
else{errorPassCreez.textContent=""}}
let errorPassConfirm=document.getElementById("errorMotDePasseConfirm");let PasswordConfirm=document.getElementById("motDePasseConfirm");let PassValidConfirm=(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[éèîï&ÉÈÎÏ])([a-zA-Z0-9éèîï&ÉÈÎÏ]{8,})$/);formValidCreez.addEventListener("click",validationPasswordConfirm);function validationPasswordConfirm(event){if(PasswordConfirm.validity.valueMissing){event.preventDefault();errorPassConfirm.textContent="Mot passe manquant";errorPassConfirm.style.color="blue"}
else if(PassValidConfirm.test(PasswordConfirm.value)==!1){event.preventDefault();errorPassConfirm.textContent="Format incorrect";errorPassConfirm.style.color="green"}
else{errorPassConfirm.textContent=""}}
let errorDateCreez=document.getElementById("errorDateCreez");let DateDeNaissanceCreez=document.getElementById("dateCreez");let DateValidCreez=(/^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/);formValidCreez.addEventListener("click",validationDateDeNaissanceCreez);function validationDateDeNaissanceCreez(event){if(DateDeNaissanceCreez.validity.valueMissing){event.preventDefault();errorDateCreez.textContent="Date manquante";errorDateCreez.style.color="blue"}
else if(DateValidCreez.test(DateDeNaissanceCreez.value)==!1){event.preventDefault();errorDateCreez.textContent="Format incorrect";errorDateCreez.style.color="green"}
else{errorDateCreez.textContent=""}}
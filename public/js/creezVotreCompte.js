$(function() {
    $( "#dateCreez" ).datepicker();
    $( "#dateCreez" ).datepicker( "option", "showAnim", "clip" );
    $( "#dateCreez" ).datepicker( "option", "duration", "slow" );
});


let formValidCreez = document.getElementById("boutonEnvoyerCreez");

formValidCreez.addEventListener("click",function(event){
   
    validSomething(event, prenomCreez, prenomValidCreez, errorPrenomCreez, "prénom");
    validSomething(event, nomCreez, nomValidCreez, errorNomCreez, "nom");
    validSomething(event, emailCreez, mailValidCreez, errorMailCreez, "email");
    validSomething(event, mobileCreez, MobileValidCreez, errorMobileCreez, "mobile");
    validSomething(event, motDePasseCreez, PassValidCreez, errorMotDePasseCreez, "mot de passe");
    validSomething(event, motDePasseConfirm, PassValidConfirm, errorMotDePasseConfirm, "mot de passe");
    validSomething(event, dateCreez, DateValidCreez, errorDateCreez, "date");
   
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




/*saisie de l'adresse avec 5 dans l'historique */
function search(){
    let adresse = document.getElementById("adresse").value

    if(adresse != "")
    {
        //On génère l'autocomplétion sur le champ adresse
        $("#adresse").autocomplete({
            //on adapte la source d'autocompletion
            source: function (request, response) {
                //On effectue la requete AJAX vers l'API adresse
                $.ajax({
                    //url d'appel
                    url: 'https://api-adresse.data.gouv.fr/search/?', 
                    //paramètre en entré de la fonction search de l'API adresse
                    data: { q: adresse}, 
                    //type de donnée attendu en sortie
                    dataType: "json", 
                    //En cas de succès que fait-on?
                    success: function (data) { 
                        // on parcours les features de notre réponse
                        response($.map(data.features, function (item) {
                            //Pour chaque feature on récupère la propriété  properties.label
                            console.log(item.properties.label); 
                            //on retourne l'élément dans la liste d'autocompletion
                            return { label: item.properties.label, value: item.properties.label}; 
                        }));
                    }
                });
            }
        });


        /*fetch('https://api-adresse.data.gouv.fr/search/?q='+ adresse)
        .then(response => response.json())
        .then(function(response){

            let tableauResultat = new Array(0);

            for (let i=0; i<6; i++){

                //On récupère la valeur
                let uneAdresse = response.features[i].properties.label;
                //J'ajoute la valeur au tableau tableauResultat
                tableauResultat.push(uneAdresse);
               
                $( "#adresse" ).autocomplete({
                    minLength: 2,
                    source: tableauResultat
                });
            }
        })*/
    }  
}


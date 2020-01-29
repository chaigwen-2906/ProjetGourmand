function envoieMessage() { // methode post j'envoie un message


    let apiUrl = " https://slack.com/api/chat.postMessage"; // se trouve dans api slack
    //let token = "xoxb-927071157766-924428894820-Z8tY90fDbVaZ3vlosFc6jRIj"; //token = identifiant secret de slack
    let channel = "#bot";
    let token = creds.token;
    let prenon = document.getElementById("prenom").value; //pour mettre les deux
    let text = document.getElementById("message").value;
    let nom = document.getElementById("nom").value;
    let adresse = document.getElementById("adresse").value;
    let e_mail = document.getElementById("e_mail").value;
    

    $.ajax({
        data: {
            "token":token,
            "channel": channel,
            "text":"Mon adresse"+ " " + e_mail + "\n" + "je m'appel " + prenon + " " + nom + "\n"
            + "et j'habite " + adresse + " " + text,// on peut aussi en mettre plusieurs(text + " " + text1)
        },

        dataType: "text",
        type: "Post",
        url: apiUrl,
        error: function (error) {
            console.log("error: " + error);
        },
        success: function (data) {
            console.log("resultat" + data);
        },
    });
}
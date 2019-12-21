//initialise le tableau img
let tabImgSlider = ["public/images/slider/entreprise.jpg",
    "public/images/slider/epicerie-rayons.jpg",
    "public/images/slider/baieVerveine.jpg",
    "public/images/slider/masala.jpg",
    "public/images/slider/poivres.jpg",
    "public/images/slider/torsades-aux-epices.jpg",
    "public/images/slider/fruit-en-poudre.jpg"];
let numImgSlider = 0;
let imgSlider = document.getElementById("imgSlider");
let gauche = document.getElementById("gauche");
let droite = document.getElementById("droite");

//on initialise le slider sur la première image
imgSlider.src=tabImgSlider[numImgSlider];

//tourne tt seul
setInterval("nextImage()", 4000);

// abonne element clickable a gauche
gauche.addEventListener('click', function() {
    previousImage();
});
 // abonne element clickable a droite
droite.addEventListener('click', function() {
    nextImage();
});


function nextImage()
{
    //incremente le num
    numImgSlider = numImgSlider+1;
    if (numImgSlider==7){
        numImgSlider=0;
    }
    //console.log(numImgSlider);
     //on modifie le src de l'imgSlider
    imgSlider.src=tabImgSlider[numImgSlider];
    //console.log(tabImgSlider[numImgSlider]);
}


function previousImage()
{
    //decremente le num
    numImgSlider = numImgSlider-1;
    if (numImgSlider==-1){
        numImgSlider=6;
    }
   
     imgSlider.src=tabImgSlider[numImgSlider];
}

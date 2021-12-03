document.addEventListener("DOMContentLoaded", function(event){
    console.log("fichier script.js loaded");

    // Pour chacune de mes barres de progression .progress-bar
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach( progressBar =>{
        console.log(progressBar.getAttribute('aria-valuenow'));
        // Faire varier la propriété width de 0 à la valeur de l'attribut aria-valuenow
        progressBar.style.width = progressBar.getAttribute('aria-valuenow')+"%";

    })

    // Gestion de la "Télécommande" de mon carousel
    const btnFirst = document.querySelector("#btnFirst");
    btnFirst.addEventListener("click", function(event) {
        var carousel = bootstrap.Carousel.getInstance(document.getElementById('carouselExampleIndicators'));
        carousel.to(0);
    })

    // Autre syntaxe avec une fonction fléchée
    const btnFirstAlt = document.querySelector("#btnFirst");
    btnFirstAlt.addEventListener("click", event => {
        var carousel = bootstrap.Carousel.getInstance(document.getElementById('carouselExampleIndicators'));
        carousel.to(0);
    })
    // Bouton Précédent
    const btnPrev = document.querySelector("#btnPrev");
    btnPrev.addEventListener("click", function(event) {
        var carousel = bootstrap.Carousel.getInstance(document.getElementById('carouselExampleIndicators'));
        carousel.prev();
    })
    // Bouton Précéden
    const btnPause = document.querySelector("#btnPause");
    btnPause.addEventListener("click", function(event) {
        var carousel = bootstrap.Carousel.getInstance(document.getElementById('carouselExampleIndicators'));
        carousel.pause();
    })
    const btnNext = document.querySelector("#btnNext");
    btnNext.addEventListener("click", function(event) {
        var carousel = bootstrap.Carousel.getInstance(document.querySelector('#carouselExampleIndicators'));
        carousel.next();
    })
    const btnLast = document.querySelector("#btnLast");
    btnLast.addEventListener("click", function(event) {
        var carousel = bootstrap.Carousel.getInstance(document.getElementById('carouselExampleIndicators'));
        carousel.to(document.querySelectorAll('.carousel-item').length - 1) ;
    })

    

});
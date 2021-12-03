document.addEventListener("DOMContentLoaded", function(event) {
    console.log("fichier script . js loaded");

    // Pour chacune de mes barres de progression, faire varier la proprété width de 0 à la valeur de l'attribut aria-valuenow

    
    

      const progressBars = window.document.querySelectorAll('.progress-bar');

     progressBars.forEach( progressBar => {
         console.log(progressBar.getAttribute('aria-valuenow'));
        // faire varier la propriété width de 0 à la valeur de l'attribut aria-valuenow
         progressBar.style.width = progressBar.getAttribute('aria-valuenow') + '%';
     })
      



    //  gestion de la "télécommande" de mon caroussel

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

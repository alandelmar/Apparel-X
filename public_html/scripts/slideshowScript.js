var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    // Creating an array through getting element by a class name
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 5000); // Change this to every 5 seconds
}    
        
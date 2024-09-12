//This is for toggling the menu bar 
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function (){
    links.classList.toggle('show-links');
})

// Slide show codes
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Show slides function for manual control
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("proSlide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Automated slideshow
function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("proSlide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(autoShowSlides, 5000); // Change image every 5 seconds
}
autoShowSlides();




// This is code for tab functionalities
document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const id = this.dataset.id;

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            this.classList.add('active');
            document.getElementById(id).classList.add('active');
        });
    });
});

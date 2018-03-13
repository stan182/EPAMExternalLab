let slideIndex = 1
showSlides(slideIndex)

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let prev = document.getElementsByClassName('preview');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < prev.length; i++) {
        prev[i].classList.remove('active')
    }
    slides[slideIndex - 1].style.display = 'block'
    prev[slideIndex - 1].classList.add('active')
}
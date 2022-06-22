/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Всплывающее окно
const navItem = document.getElementById('drop-list');
let list = document.getElementsByClassName('pop-up')[0];

list.style.display = 'none';

navItem.addEventListener('mouseover', ev => list.style.display = '');
navItem.addEventListener('mouseout', ev => list.style.display = 'none');

// таблица с персоналом


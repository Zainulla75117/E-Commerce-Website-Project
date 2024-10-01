let slideIndex = 0;

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, i) => {
        slide.style.display = i === slideIndex ? 'flex' : 'none';
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === slideIndex);
    });
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slideIndex = i;
        showSlides(slideIndex);
    });
});

showSlides(slideIndex);

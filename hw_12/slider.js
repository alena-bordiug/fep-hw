let currentSlideIndex = 0;
let allSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  currentSlideIndex = index;

  slides.forEach((slide, i) => {
    slide.classList.remove('d-block', 'd-none');

    i === currentSlideIndex
      ? slide.classList.add('d-block')
      : slide.classList.add('d-none');
  });

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  prevBtn.classList.toggle('d-none', currentSlideIndex === 0);
  nextBtn.classList.toggle('d-none', currentSlideIndex === allSlides - 1);
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

document.getElementById('prev-btn').addEventListener('click', prevSlide);
document.getElementById('next-btn').addEventListener('click', nextSlide);

showSlide(currentSlideIndex);

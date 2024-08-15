let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slider-wrapper .slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  const offset = -currentSlideIndex * 100;
  document.querySelector(
    ".slider-wrapper"
  ).style.transform = `translateX(${offset}%)`;

  updateDots();
}

function currentSlide(index) {
  showSlide(index);
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlideIndex);
  });
}

setInterval(() => {
  showSlide(currentSlideIndex + 1);
}, 5000);

updateDots();

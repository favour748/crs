// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

document.querySelector(".next").addEventListener("click", () => {
  changeSlide(1);
});

document.querySelector(".prev").addEventListener("click", () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides[currentSlide].classList.add("active");
}

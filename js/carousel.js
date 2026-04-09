let currentSlide = 0;
const totalSlides = 3;
let autoplayInterval;
const AUTOPLAY_DELAY = 7000;

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  startAutoplay();
});

function initCarousel() {
  const videos = document.querySelectorAll('.carousel-video');
  // Start first video
  if (videos[0]) {
    videos[0].muted = true;
    videos[0].currentTime = 0;
    videos[0].play().catch(e => console.log('Autoplay prevented:', e));
  }
}

function goToSlide(slideIndex) {
  stopAutoplay();
  _switchToSlide(slideIndex);
  setTimeout(() => startAutoplay(), 3000);
}

function _switchToSlide(slideIndex) {
  const slides = document.querySelectorAll('.carousel-slide');
  const videos = document.querySelectorAll('.carousel-video');
  const dots = document.querySelectorAll('.pagination-dot');
  if (!slides.length) return;

  // Hide current slide and pause its video
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  if (videos[currentSlide]) {
    videos[currentSlide].pause();
  }

  // Show new slide and restart its video from beginning
  currentSlide = slideIndex;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
  if (videos[currentSlide]) {
    videos[currentSlide].muted = true;
    videos[currentSlide].currentTime = 0;
    videos[currentSlide].play().catch(e => console.log('Autoplay prevented:', e));
  }
}

function nextSlide() {
  const nextIndex = (currentSlide + 1) % totalSlides;
  goToSlide(nextIndex);
}

function prevSlide() {
  const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
  goToSlide(prevIndex);
}

function startAutoplay() {
  stopAutoplay();
  autoplayInterval = setInterval(() => {
    const nextIndex = (currentSlide + 1) % totalSlides;
    _switchToSlide(nextIndex);
  }, AUTOPLAY_DELAY);
}

function stopAutoplay() {
  if (autoplayInterval) clearInterval(autoplayInterval);
}

window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
window.goToSlide = goToSlide;
window.scrollToProducts = function (handle) {
  const p = document.getElementById('products');
  if (p) p.scrollIntoView({ behavior: 'smooth' });
}

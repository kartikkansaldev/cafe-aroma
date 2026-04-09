let currentSlide = 0;
const totalSlides = 3;
let autoplayTimer;

// Per-slide durations in milliseconds (how long each slide shows before switching)
const SLIDE_DELAYS = [7000, 6000, 7000];

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  startAutoplay();
});

function initCarousel() {
  const videos = document.querySelectorAll('.carousel-video');
  if (videos[0]) {
    videos[0].muted = true;
    videos[0].currentTime = 0;
    videos[0].play().catch(e => console.log('Autoplay prevented:', e));
  }
}

function _switchToSlide(slideIndex) {
  const slides = document.querySelectorAll('.carousel-slide');
  const videos = document.querySelectorAll('.carousel-video');
  const dots = document.querySelectorAll('.pagination-dot');
  if (!slides.length) return;

  // Hide current slide and pause its video
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  if (videos[currentSlide]) videos[currentSlide].pause();

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

function startAutoplay() {
  stopAutoplay();
  function scheduleNext() {
    const delay = SLIDE_DELAYS[currentSlide];
    autoplayTimer = setTimeout(() => {
      const nextIndex = (currentSlide + 1) % totalSlides;
      _switchToSlide(nextIndex);
      scheduleNext();
    }, delay);
  }
  scheduleNext();
}

function stopAutoplay() {
  if (autoplayTimer) clearTimeout(autoplayTimer);
}

function goToSlide(slideIndex) {
  stopAutoplay();
  _switchToSlide(slideIndex);
  // Resume autoplay after 3s from user interaction
  setTimeout(() => startAutoplay(), 3000);
}

function nextSlide() {
  goToSlide((currentSlide + 1) % totalSlides);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + totalSlides) % totalSlides);
}

window.prevSlide = prevSlide;
window.nextSlide = nextSlide;
window.goToSlide = goToSlide;
window.scrollToProducts = function (handle) {
  const p = document.getElementById('products');
  if (p) p.scrollIntoView({ behavior: 'smooth' });
}

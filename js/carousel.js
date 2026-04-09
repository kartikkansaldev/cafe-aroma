let currentSlide = 0;
const totalSlides = 3;
let autoplayTimer;

// Per-slide durations in milliseconds
const SLIDE_DELAYS = [7000, 6000, 7000];

document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  startAutoplay();
});

function initCarousel() {
  // Start ALL videos playing immediately in the background.
  // This ensures they are fully buffered and running — eliminating
  // any seek/re-buffer freeze when a slide becomes visible.
  const videos = document.querySelectorAll('.carousel-video');
  videos.forEach((video, index) => {
    video.muted = true;
    video.play().catch(e => console.log('Autoplay prevented:', e));
  });
}

function _switchToSlide(slideIndex) {
  const slides = document.querySelectorAll('.carousel-slide');
  const videos = document.querySelectorAll('.carousel-video');
  const dots = document.querySelectorAll('.pagination-dot');
  if (!slides.length) return;

  // Fade out current slide (video keeps playing in background)
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');

  // Seek the incoming video to start, then fade it in.
  // Because the video is already playing & buffered, the seek is instantaneous.
  currentSlide = slideIndex;
  const incomingVideo = videos[currentSlide];
  if (incomingVideo) {
    incomingVideo.currentTime = 0;
  }
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
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

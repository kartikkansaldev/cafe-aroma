import { readFileSync, writeFileSync } from 'fs';
const html = readFileSync('index.html', 'utf8');

const testimonialHTML = `
  <!-- TESTIMONIALS -->
  <section class="testimonials-section">
    <h2 class="testimonials-title">What Our Customer Says</h2>
    <div class="testimonials-carousel">
      <button class="testimonial-nav testimonial-prev" onclick="testimonialPrev()">&#8592;</button>
      <div class="testimonials-track-wrap">
        <div class="testimonials-track" id="testimonials-track">
          <div class="testimonial-card">
            <div class="testimonial-avatar"><img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Shalima Hayden"></div>
            <p class="testimonial-text">I Have Tested Caffeine Coffee Many Times. Really Amazing To Me. The Combination Was Very Good. One Thing Is To Serve Extraordinary Coffee With Caffeine. I Will Order From Caffeine For Any Of My Coffee Needs.</p>
            <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="testimonial-name">Shalima Hayden</p>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-avatar"><img src="https://randomuser.me/api/portraits/men/32.jpg" alt="James Brewer"></div>
            <p class="testimonial-text">Every morning starts with Cafe Aroma. The dark espresso blend is unmatched — bold, smooth, and rich. Absolutely love the experience and the quality they deliver every single time.</p>
            <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="testimonial-name">James Brewer</p>
          </div>
          <div class="testimonial-card">
            <div class="testimonial-avatar"><img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya Mehta"></div>
            <p class="testimonial-text">The French Vanilla blend is divine. It smells heavenly, brews perfectly, and tastes like a dream. Cafe Aroma has become a staple in my home. Highly recommend to all coffee lovers!</p>
            <div class="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p class="testimonial-name">Priya Mehta</p>
          </div>
        </div>
      </div>
      <button class="testimonial-nav testimonial-next" onclick="testimonialNext()">&#8594;</button>
    </div>
  </section>
  <style>
    .testimonials-section { background: #EDE0D4; padding: 80px 40px; text-align: center; }
    .testimonials-title { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 700; color: #2C1810; margin-bottom: 48px; letter-spacing: -0.01em; }
    .testimonials-carousel { display: flex; align-items: center; justify-content: center; gap: 20px; max-width: 900px; margin: 0 auto; }
    .testimonials-track-wrap { overflow: hidden; flex: 1; }
    .testimonials-track { display: flex; transition: transform 0.5s cubic-bezier(0.4,0,0.2,1); }
    .testimonial-card { min-width: 100%; background: #2C1810; border-radius: 12px; padding: 60px 40px 40px; color: #FFF; text-align: center; box-sizing: border-box; position: relative; margin-top: 40px; }
    .testimonial-avatar { width: 80px; height: 80px; border-radius: 50%; overflow: hidden; position: absolute; top: -40px; left: 50%; transform: translateX(-50%); border: 4px solid #EDE0D4; }
    .testimonial-avatar img { width: 100%; height: 100%; object-fit: cover; }
    .testimonial-text { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.8; color: rgba(255,255,255,0.9); margin: 0 auto 20px; max-width: 600px; }
    .testimonial-stars { color: #D4A574; font-size: 22px; letter-spacing: 4px; margin-bottom: 8px; }
    .testimonial-name { font-family: 'Inter', sans-serif; font-weight: 700; font-size: 15px; color: #FFF; }
    .testimonial-nav { width: 48px; height: 48px; background: #2C1810; color: #FFF; border: none; border-radius: 6px; font-size: 20px; cursor: pointer; flex-shrink: 0; transition: background 0.3s; }
    .testimonial-nav:hover { background: #4a2c1a; }
  </style>
  <script>
    let testimonialIdx = 0;
    const testimonialCount = 3;
    function updateTestimonial() { document.getElementById('testimonials-track').style.transform = 'translateX(-' + (testimonialIdx * 100) + '%)'; }
    function testimonialNext() { testimonialIdx = (testimonialIdx + 1) % testimonialCount; updateTestimonial(); }
    function testimonialPrev() { testimonialIdx = (testimonialIdx - 1 + testimonialCount) % testimonialCount; updateTestimonial(); }
  </script>
`;

// insert right after the closing </section> of the hero and before THE ROAST
const marker = '<!-- THE ROAST -->';
const idx = html.indexOf(marker);
if (idx !== -1) {
  const updated = html.slice(0, idx) + testimonialHTML + '\n  ' + html.slice(idx);
  writeFileSync('index.html', updated);
  console.log('Testimonials inserted successfully');
} else {
  console.log('Marker not found');
}

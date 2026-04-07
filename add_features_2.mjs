import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');

const featuresHtml = `
  <!-- COFFEE HEAVEN SECTION -->
  <section class="feature-section" id="coffee-heaven">
    <div class="feature-split">
      <div class="feature-image-container">
        <svg class="shape-behind" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M50 5 L95 80 L5 80 Z" fill="none" stroke="#1a0f0a" stroke-width="0.3"></path>
          <path d="M50 95 L95 20 L5 20 Z" fill="none" stroke="#1a0f0a" stroke-width="0.3"></path>
        </svg>
        <div class="feature-image-wrapper tilt-left">
          <img src="images/photo1.jpeg" alt="Pouring latte art">
        </div>
      </div>
      <div class="feature-text">
        <h2 class="feature-title">Coffee Heaven</h2>
        <p class="feature-desc">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
        <button class="btn-dark" onclick="window.location.href='collections.html'">View All &rarr;</button>
      </div>
    </div>
  </section>

  <!-- JEAN'S COFFEE SECTION -->
  <section class="feature-section" id="jeans-coffee">
    <div class="feature-split reverse">
      <div class="feature-image-container">
        <svg class="shape-behind" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M10 20 L90 20 L50 90 Z" fill="none" stroke="#1a0f0a" stroke-width="0.4"></path>
        </svg>
        <div class="feature-image-wrapper tilt-right">
          <img src="images/photo2.jpeg" alt="Iced coffee and latte">
        </div>
      </div>
      <div class="feature-text">
        <h2 class="feature-title">Jean's Coffee</h2>
        <p class="feature-desc">Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s.</p>
        <button class="btn-grey" onclick="window.location.href='collections.html'">View All &rarr;</button>
      </div>
    </div>
  </section>
`;

if (html.includes('<!-- TESTIMONIALS -->')) {
  html = html.replace('<!-- TESTIMONIALS -->', featuresHtml + '\n  <!-- TESTIMONIALS -->');
  
  if (!html.includes('href="css/features.css"')) {
    html = html.replace('<link rel="stylesheet" href="css/footer.css">', '<link rel="stylesheet" href="css/footer.css">\n  <link rel="stylesheet" href="css/features.css">');
  }
  
  writeFileSync('index.html', html);
  console.log('Successfully injected features HTML');
} else {
  console.log('Failed to find TESTIMONIALS tag');
}

import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');

// Update dynamic nav: simply replace the precise string
html = html.replace(" || currentSection.tagName.toLowerCase() === 'footer'", "");

// Replace old footer with Apple-style footer
const appleFooter = `  <!-- BIG FOOTER -->
  <footer class="big-footer" id="site-footer">
    <div class="footer-directory">
      <div class="footer-col">
        <h4>Shop and Learn</h4>
        <a href="#">Dark Espresso</a>
        <a href="#">French Vanilla</a>
        <a href="#">Hazelnut Brew</a>
        <a href="#">Limited Editions</a>
        <a href="#">Coffee Equipment</a>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <a href="#">Cafe Aroma Subscriptions</a>
        <a href="#">Wholesale Partners</a>
        <a href="#">Gift Cards</a>
      </div>
      <div class="footer-col">
        <h4>About Us</h4>
        <a href="#">Our Story</a>
        <a href="#">Ethical Sourcing</a>
        <a href="#">Sustainability</a>
        <a href="#">Careers</a>
      </div>
      <div class="footer-col">
        <h4>Support</h4>
        <a href="#">Contact Us</a>
        <a href="#">Shipping Policy</a>
        <a href="#">Returns & Exchanges</a>
        <a href="#">FAQs</a>
      </div>
    </div>
    
    <div class="footer-basement">
      <p class="shop-ways">More ways to shop: <a href="#">Find an Aroma Cafe</a> or <a href="#">other retailer</a> near you.</p>
      <div class="basement-divider"></div>
      <div class="basement-bottom">
        <p class="copyright">Copyright © 2026 Cafe Aroma Inc. All rights reserved.</p>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Sales Policy</a>
          <a href="#">Legal</a>
          <a href="#">Site Map</a>
        </div>
        <div class="locale">United States</div>
      </div>
    </div>
  </footer>`;

const startIdx = html.indexOf('<!-- BIG FOOTER -->');
const endIdx = html.indexOf('</footer>', startIdx) + 9;
if (startIdx !== -1) {
  html = html.slice(0, startIdx) + appleFooter + html.slice(endIdx);
  writeFileSync('index.html', html);
  console.log('Footer and nav updated');
} else {
  console.log('Footer not found');
}

import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');

html = html.replace('background: rgba(255,255,255,0.95); backdrop-filter: blur(12px);', '');

const navScript = `
  <!-- dynamic navbar -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const nav = document.querySelector('.nav-container');
      nav.style.transition = 'background 0.4s ease, backdrop-filter 0.4s ease';
      
      const sections = document.querySelectorAll('section, footer');
      
      window.addEventListener('scroll', () => {
        if (window.scrollY < 10) {
          nav.style.background = 'transparent';
          nav.style.backdropFilter = 'none';
          return;
        }
        
        let currentSection = null;
        const navHeight = nav.offsetHeight || 80;
        
        for (let sec of sections) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= navHeight + 10 && rect.bottom > navHeight) {
            currentSection = sec;
            break;
          }
        }
        
        if (currentSection) {
          if (currentSection.id === 'hero-carousel') {
             nav.style.background = 'transparent';
             nav.style.backdropFilter = 'none';
          } else if (currentSection.classList.contains('premium-video-section') || currentSection.tagName.toLowerCase() === 'footer') {
             nav.style.background = 'rgba(20, 10, 5, 0.85)';
             nav.style.backdropFilter = 'blur(10px)';
          } else {
             const bgColor = window.getComputedStyle(currentSection).backgroundColor;
             nav.style.background = bgColor !== 'rgba(0, 0, 0, 0)' ? bgColor : '#FFF';
             nav.style.backdropFilter = 'none';
          }
        }
      });
      window.dispatchEvent(new Event('scroll'));
    });
  </script>
`;

if (!html.includes('dynamic navbar')) {
  html = html.replace('</body>', navScript + '\n</body>');
  writeFileSync('index.html', html);
  console.log('Done');
} else {
  console.log('Already exists');
}

import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');

// The current script block in index.html for dynamic nav looks like this:
/*
        if (currentSection) {
          if (currentSection.id === 'hero-carousel') {
             nav.style.background = 'transparent';
             nav.style.backdropFilter = 'none';
          } else if (currentSection.classList.contains('premium-video-section')) {
             nav.style.background = 'rgba(20, 10, 5, 0.85)';
             nav.style.backdropFilter = 'blur(10px)';
          } else {
*/

const searchStr = `if (currentSection.id === 'hero-carousel') {`;
const replaceStr = `if (currentSection.id === 'hero-carousel' || currentSection.classList.contains('premium-video-section')) {`;

const oldPremiumStr = `} else if (currentSection.classList.contains('premium-video-section')) {
             nav.style.background = 'rgba(20, 10, 5, 0.85)';
             nav.style.backdropFilter = 'blur(10px)';`;

html = html.replace(searchStr, replaceStr);
html = html.replace(oldPremiumStr, `} else if (false) {`); // disable the old branch

writeFileSync('index.html', html);
console.log('Done');

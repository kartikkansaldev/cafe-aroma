import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');

// Remove the inline style from video2 to let CSS handle it universally
html = html.replace('class="premium-video-section" style="height: 60vh;"', 'class="premium-video-section"');

writeFileSync('index.html', html);
console.log('Inline style removed');

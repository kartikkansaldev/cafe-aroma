import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');

// Replace the video in "The Perfect Grind" Section
// The old video was 'videos/coffee-grinding.mp4'
html = html.replace('src="videos/coffee-grinding.mp4"', 'src="videos/video2.mp4"');

writeFileSync('index.html', html);
console.log(html.includes('videos/video2.mp4') ? 'Done' : 'Not found');

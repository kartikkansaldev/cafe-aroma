import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');

// Replace the video in the Masterfully Roasted Section
html = html.replace('src="videos/coffee-roasting.mp4"', 'src="videos/video1.mp4"');

writeFileSync('index.html', html);
console.log(html.includes('videos/video1.mp4') ? 'Done' : 'Not found');

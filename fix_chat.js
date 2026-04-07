import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('index.html', 'utf8');
const chatStyle = '<style>#shopify-chat,shopify-chat,.shopify-chat-button{display:none!important}</style>\n  ';
const swiper = 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
const idx = html.indexOf(swiper);
if (idx !== -1) {
  const insertAt = html.lastIndexOf('<script', idx);
  html = html.slice(0, insertAt) + chatStyle + html.slice(insertAt);
  writeFileSync('index.html', html);
  console.log('Done');
} else {
  console.log('NOT FOUND');
}

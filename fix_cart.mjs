import { readFileSync, writeFileSync } from 'fs';
const html = readFileSync('index.html', 'utf8');
// Fix cart button color from white to dark brown
const updated = html.replace('cursor:pointer; color:#FFF;', 'cursor:pointer; color:#2C1810;');
writeFileSync('index.html', updated);
console.log(updated.includes('#2C1810') ? 'Done' : 'Not replaced');

import { readFileSync, writeFileSync } from 'fs';
let html = readFileSync('blog.html', 'utf8');

const newCard = `
        <a href="article.html?handle=chemistry-of-roast" class="blog-card">
            <div class="blog-card__image"><img src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600" alt="Coffee beans roasting"></div>
            <div class="blog-card__content">
                <span class="blog-card__category">Artisan Craft</span>
                <h2 class="blog-card__title">Chemistry of the Roast</h2>
                <span class="blog-card__link">Read Article &rarr;</span>
            </div>
        </a>
`;

if (html.includes('Sourcing with Mind')) {
  // Try to insert it before the closing grid div
  html = html.replace('        </a>\n    </div>', '        </a>\n' + newCard + '    </div>');
  writeFileSync('blog.html', html);
  console.log('Added 3rd blog card');
} else {
  console.log('Not found');
}

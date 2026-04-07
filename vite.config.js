import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/cafe-aroma/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        collections: resolve(__dirname, 'collections.html'),
        blog: resolve(__dirname, 'blog.html'),
        product: resolve(__dirname, 'product.html'),
        article: resolve(__dirname, 'article.html'),
      },
    },
  },
});

// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://greenscapessj.com',
  // Construction division hidden Nov 2026 — the old URL was live/indexed, so
  // send visitors home instead of 404ing. Remove this redirect to restore.
  redirects: {
    '/construction': '/',
  },
  integrations: [
    vue(),
    sitemap({
      lastmod: new Date(),
      filter: (page) => !page.includes('/robots.txt') && !page.includes('/construction'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
});

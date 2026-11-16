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
    optimizeDeps: {
      // FAQ.vue hydrates on scroll (client:visible), so Vite only discovers
      // lucide-vue-next late and re-optimizes mid-session, leaving the page
      // requesting a stale bundle (504 "Outdated Optimize Dep") and the FAQ
      // never hydrates in dev. Pre-bundling it up front avoids that.
      include: ['lucide-vue-next'],
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    }
  }
});

import { defineConfig } from 'astro/config';

// Defaults to the custom domain. Until DNS points at GitHub Pages, the deploy
// workflow sets SITE_URL and BASE_PATH to serve from ai-a13x.github.io/alexainsworth.com/.
export default defineConfig({
  site: process.env.SITE_URL || 'https://alexainsworth.com',
  base: process.env.BASE_PATH || '/',
});

// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace with your real site URL (custom domain or final Pages URL).
  site: 'https://flipkers.github.io/blog',
  // Required for a GitHub Pages project site served from /blog.
  base: '/blog',
  integrations: [sitemap()],
});

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sonaria.ltd',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});

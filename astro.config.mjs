import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://minasmongrel.xyz/',
  output: 'hybrid',
  adapter: netlify(),
  integrations: [mdx(), sitemap(), react()],
  experimental: {
    assets: true
  },
  markdown: {
    RemarkPlugins: [remarkGfm]
  }
});
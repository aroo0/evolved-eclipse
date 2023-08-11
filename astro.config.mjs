import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import a11yEmoji from '@fec/remark-a11y-emoji';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import nodejs from '@astrojs/node';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://unrivaled-empanada-3b13a7.netlify.app/',
  output: 'hybrid',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [mdx(), sitemap(), react()],
  experimental: {
    assets: true
  },
  markdown: {
    RemarkPlugins: [remarkGfm, a11yEmoji]
  }
});
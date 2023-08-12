import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://minasmongrel.xyz/',
  output: 'server',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), react()],
  experimental: {
    assets: true
  },
  markdown: {
    RemarkPlugins: [remarkGfm]
  }
});
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkGfm from 'remark-gfm';
import a11yEmoji from '@fec/remark-a11y-emoji';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap()],
	experimental: {
		assets: true
	   },
	markdown: {
		RemarkPlugins: [remarkGfm, a11yEmoji]
	}
});

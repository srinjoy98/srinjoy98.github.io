// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Served from the custom domain set in GitHub → Settings → Pages, so base stays '/'.
export default defineConfig({
  site: 'https://srinjoysrimani.com',
  base: '/',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});

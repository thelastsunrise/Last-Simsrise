// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), db()]
});
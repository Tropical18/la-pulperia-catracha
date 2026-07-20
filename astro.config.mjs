// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://tropical18.github.io",
  base: "/la-pulperia-catracha",
  vite: {
    plugins: [tailwindcss()]
  }
});
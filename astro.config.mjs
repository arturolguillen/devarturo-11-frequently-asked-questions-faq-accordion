// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  fonts: [
      {
          name: "Plus Jakarta Sans",
          cssVariable: "--font-plus-jakarta-sans",
          provider: fontProviders.google(),
          weights: [400, 500, 600, 700],
      }
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
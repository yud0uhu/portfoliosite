import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
  output: "server",
  adapter: cloudflare(),
});

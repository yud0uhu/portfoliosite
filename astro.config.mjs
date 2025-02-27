import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
// https://astro.build/config
export default defineConfig({
  integrations: [
    (await import("astro-compress")).default({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: true,
        },
      },
      Image: true,
      JavaScript: true,
      SVG: true,
    }),
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});

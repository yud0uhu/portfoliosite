import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import svelte from "@astrojs/svelte";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
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
      Path: ["./dist", "./Compress"],
    }),
    svelte(),
  ],
  output: "server",
  adapter: cloudflare(),
});

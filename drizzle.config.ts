import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/13b42693b20d6a33fcfae6b11a6f2955a407dad70d9bc46d672753efd2cce036.sqlite",
  },
});

import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "hybrid",

  adapter: node({
    mode: "middleware",
  }),

  integrations: [tailwind()],
});
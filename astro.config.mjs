import { defineConfig } from "astro/config";

// lib to add robot.txt
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://abbasbengkel.vercel.app/",
  integrations: [tailwind(), robotsTxt(), sitemap()]
});
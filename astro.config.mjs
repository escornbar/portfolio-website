import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), tailwind()],
    site: "https://escornbar.github.io",
    base: "/portfolio-website",
});

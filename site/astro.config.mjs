import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://styles-md.vercel.app",
  output: "static",
  // No adapter, no server. The build emits plain files.
  build: { format: "directory" },
});

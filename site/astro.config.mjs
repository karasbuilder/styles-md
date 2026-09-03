import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://style.karasdev.com",
  output: "static",
  // No adapter, no server. The build emits plain files.
  build: { format: "directory" },
});

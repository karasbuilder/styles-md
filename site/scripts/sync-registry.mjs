// Copies the built style registry into public/ so the deployed site doubles as
// the CDN the CLI fetches from. No server, no API, just files.
import { cpSync, existsSync, rmSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "..", "..", "styles");
const target = join(here, "..", "public", "styles");

if (!existsSync(join(source, "index.json"))) {
  console.error("styles/index.json missing. Run `pnpm run build:tokens` from the repo root first");
  process.exit(1);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(dirname(target), { recursive: true });
cpSync(source, target, { recursive: true });
console.log(`synced registry → ${target}`);

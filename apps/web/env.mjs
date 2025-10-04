// apps/web/next.config.ts
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This ensures Next.js loads the root .env file
process.env.ENV_ROOT = join(__dirname, "../..");

/** @type {import('next').NextConfig} */
const config = {
  // ... your config
};

export default config;
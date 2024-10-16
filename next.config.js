/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  // Enable static export mode
  output: 'export',

  // You can add more Next.js configuration options here if needed
};

export default config;

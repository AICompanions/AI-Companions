/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  typescript: { ignoreBuildErrors: true }, // ⬅️ ignore TS
  eslint: { ignoreDuringBuilds: true }, // ⬅️ ignore ESLint
};
module.exports = nextConfig;

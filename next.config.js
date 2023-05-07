/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    urlImports: ["https://cdn.jsdelivr.net/npm/"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.sandboxstud.io"],
  },
  env: {
    CLOUDFLARE_STORAGE: "https://images.sandboxstud.io",
  },
};

module.exports = nextConfig;

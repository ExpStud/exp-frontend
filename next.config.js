/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.expstud.io"],
  },
  env: {
    CLOUDFLARE_STORAGE: "https://images.expstud.io",
  },
};

module.exports = nextConfig;

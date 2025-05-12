/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.sandboxstud.io",
        pathname: "/**", // Allow all paths under this domain
      },
    ],
  },
  env: {
    CLOUDFLARE_STORAGE: "https://images.sandboxstud.io",
  },
};

module.exports = nextConfig;

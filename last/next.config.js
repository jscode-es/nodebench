/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  devIndicators: {
    autoPrerender: false,
  },
}

module.exports = nextConfig

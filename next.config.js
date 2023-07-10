/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'turn17media-main.s3.amazonaws.com'
      }
    ]
  }
}

module.exports = nextConfig

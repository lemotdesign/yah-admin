/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['yah.digital', 'avatars.githubusercontent.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
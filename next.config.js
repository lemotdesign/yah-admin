/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  images: {
    domains: ['yah.digital'],
    unoptimized: true
  }
}

module.exports = nextConfig
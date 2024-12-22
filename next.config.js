/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/portfolio_webapp',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

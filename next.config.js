const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg', 'webp'],
});

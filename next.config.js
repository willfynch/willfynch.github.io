/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    domains: ['assets.tina.io'],
  },
  webpack: 
    (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    }
}

module.exports = nextConfig


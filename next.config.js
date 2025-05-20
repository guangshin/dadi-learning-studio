/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'dadi-learning.cdn.plasmic.app',
      'dadi-learning.com',
      'site-assets.plasmic.app',
      'dadi-learning.vercel.app',
      'dadi-learning.plasmic.app',
      'plasmic.app',
      'plasmic.s3-accelerate.amazonaws.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Disable static image optimization in development
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Handle favicon
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800, immutable',
          },
        ],
      },
    ];
  },
  // Add custom webpack configuration to handle image paths
  webpack: (config, { isServer }) => {
    // Add the @ alias for the project root
    const path = require('path');
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias['@'] = path.resolve(__dirname);

    // Add a rule to handle the image paths
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|svg)$/i,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;

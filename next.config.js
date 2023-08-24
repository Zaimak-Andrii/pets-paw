/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn1.theimageapi.com',
        pathname: '/file/theimageapi-staging/**',
      },
      { protocol: 'https', hostname: '**' },
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const BASE_URL = '/kartly'

const nextConfig = {
  basePath: BASE_URL,
  env: {
    ROOT: __dirname,
    BASE_URL,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
  async redirects() {
    if (BASE_URL) {
      return [
        {
          source: "/",
          destination: BASE_URL,
          basePath: false,
          permanent: false,
        },
      ];
    }
    return [];
  },
}

module.exports = nextConfig

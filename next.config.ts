import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'merakiui.com',
        port: '',
        pathname: '/images/components/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable optimizeCss for better CSS bundling (optional)
    optimizeCss: true,
  },
};

export default nextConfig;

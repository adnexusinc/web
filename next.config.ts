import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable Turbopack for development
  experimental: {
    // Enable Turbopack persistent caching for faster rebuilds
    turbopackPersistentCaching: true,

    // Enable Turbopack production build (beta feature)
    turbo: {
      // Turbopack configuration options
      root: process.cwd(),
    },
  },

  // Output configuration
  output: 'standalone',

  // Disable x-powered-by header
  poweredByHeader: false,

  // Enable React strict mode
  reactStrictMode: true,

  // Compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;

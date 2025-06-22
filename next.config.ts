import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/stadtchor-wsw',
  assetPrefix: '/stadtchor-wsw',
  images: { unoptimized: true }, 
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

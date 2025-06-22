import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/stadtchor-wsw' : '',
  assetPrefix: isProd ? '/stadtchor-wsw/' : '',
  images: { unoptimized: true }, 
  /* config options here */
    eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

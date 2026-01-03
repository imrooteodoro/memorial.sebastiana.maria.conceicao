import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/memorial.sebastiana.maria-conceicao',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
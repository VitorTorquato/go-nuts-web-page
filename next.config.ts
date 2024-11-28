import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "www.bettycrocker.co.uk",
      },
    ],
  },
};

export default nextConfig;

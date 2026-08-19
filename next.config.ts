import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "khq.com.au",
      },
    ],
  },
};

export default nextConfig;

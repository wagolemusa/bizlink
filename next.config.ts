import type { NextConfig } from "next";
const { nextui} = require("@nextui-org/react")

const nextConfig: NextConfig = {
  
  /* config options here */

  images: {
      remotePatterns: [
        {
          hostname:"media.beehiiv.com"
        },
      {
        hostname: "img.clerk.com"
      }
      ]
  }
};

export default nextConfig;

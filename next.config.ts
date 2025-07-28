import type { NextConfig } from "next";
const { nextui} = require("@nextui-org/react")

const nextConfig: NextConfig = {
  plugins: [nextui()]
  /* config options here */
};

export default nextConfig;

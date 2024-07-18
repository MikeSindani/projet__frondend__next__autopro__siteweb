/** @type {import('next').NextConfig} */
// next.config.js
import withVideos from "next-videos";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    domains: ["localhost", "votredomaine.com"],
  },
};

const config = {
  ...nextConfig,
  ...withVideos(),
};

export default config

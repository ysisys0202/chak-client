/** @type {import('next').NextConfig} */

import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  images: {
    domains: ["image.aladin.co.kr", "shopping-phinf.pstatic.net"],
  },
  experimental: {
    authInterrupts: true,
  },
};

export default withVanillaExtract(nextConfig);

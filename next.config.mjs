/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
  },
};
export default nextConfig;

/** @type {import('next').NextConfig} */
const isGitHubPages = process.env.GITHUB_ACTIONS;

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/portfolio-website-saichand" : "",
  assetPrefix: isGitHubPages ? "/portfolio-website-saichand/" : "",
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/db", "@workspace/ui"],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        "@prisma/client": "commonjs @prisma/client",
      });
    }
    return config;
  },
  experimental: {
    outputFileTracingIncludes: {
      "/api/**/*": ["../../packages/db/generated/prisma/**/*"],
    },
  },
};

export default nextConfig;

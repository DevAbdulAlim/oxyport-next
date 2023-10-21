/** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;
module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:5000/:path*", // Proxy to Backend
      },
    ];
  },
};

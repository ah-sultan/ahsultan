/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "w7.pngwing.com",
      },
      {
        protocol: 'https',
        hostname: "i.postimg.cc",
      },
    ],
  },
};

export default nextConfig;

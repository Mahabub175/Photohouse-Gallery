/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "i.ibb.co",
      "flagcdn.com",
      "images.unsplash.com",
      "localhost",
      "api.photohousemagazine.com",
      "vitasoftserver.vitasoftsolutions.com",
    ],
  },
  swcMinify: true,
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'i.ibb.co',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
    domains: ["i.ibb.co", "flagcdn.com"],
  },
  swcMinify: true,
}

module.exports = nextConfig

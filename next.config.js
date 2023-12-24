/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: "https://amorfatiseon.github.io",
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"standalone",
  images: {
    domains: [
      "tailwindui.com",
      "res.cloudinary.com"
    ]
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
  //for github pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
  
  // Compression and optimization
  compress: true,
}

module.exports = nextConfig
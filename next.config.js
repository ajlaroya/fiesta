/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['links.papareact.com', 'images.unsplash.com']
  },
  experimental: {
    appDir: true,
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiYWpsYXJveWEiLCJhIjoiY2xkYmhxaHhjMDBvcDN2czh2ZWYzNnBmYiJ9.PLoILfRaS2DbaOlwvBYMcw'
  }
}

module.exports = nextConfig

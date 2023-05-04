/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // future: {webpack5: true},
  images: {
    domains: ['links.papareact.com','freepik.com','media.licdn.com','lh3.googleusercontent.com']
  },
  //rewrites: {
  //  source: '/api/:path*',
  //  destination: 'http://localhost:5000/:path*' // Proxy to Backend
  //}
}


module.exports = nextConfig

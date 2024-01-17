/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
}

module.exports = 
{    
    eslint: {
      ignoreDuringBuilds: true,
    },
    nextConfig
}

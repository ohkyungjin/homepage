/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  basePath: '', // 저장소 이름으로 설정하거나 비워두세요
  assetPrefix: '',
  trailingSlash: true,
};

module.exports = nextConfig; 
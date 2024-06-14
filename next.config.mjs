/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'storage.yandexcloud.net',
      port: ''
    }, {
      protocol: 'https',
      hostname: 'xn--e1aogg7a.xn--p1ai',
      port: ''
    }]
  }
};

export default nextConfig;

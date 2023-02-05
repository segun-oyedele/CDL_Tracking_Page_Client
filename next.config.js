/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const prodPath = '/Xcelerator/trackingclient';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? prodPath : '/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'akamai',
    path: isProd ? prodPath : '/',
  },
  env: {
    linksPath: isProd ? prodPath : '',
    REACT_APP_GOOGLE_MAPS_API_KEY: 'AIzaSyBFbOeEx0KCTfOZP9z6Hw_jLyesmN3yl4E',
    isProd
  }
}

module.exports = nextConfig

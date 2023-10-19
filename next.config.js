/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
    // ignoreDuringBuilds: true,
  },
  distDir: process.env.BUILD_DIR || '.next',
  reactStrictMode: true,
  swcMinify: true,

  //accepted domains to load images from
  images: {
    domains: [
      'res.cloudinary.com',
      's3-ap-southeast-1.amazonaws.com',
      'instagram.fdps2-1.fna.fbcdn.net',
      'terareach.s3.ap-southeast-1.amazonaws.com',
      'qoruz-v2-test.s3.ap-southeast-1.amazonaws.com',
      'instagram.fhan3-5.fna.fbcdn.net',
      'img.youtube.com',
      'd1ks0pavw8unez.cloudfront.net',
    ],
  },

  // SVGR
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: [
  //       {
  //         loader: '@svgr/webpack',
  //         options: {
  //           typescript: true,
  //           icon: true,
  //         },
  //       },
  //     ],
  //   });

  //   return config;
  // },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

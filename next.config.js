/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true
};

const withMDX = require('@next/mdx')();

module.exports = withMDX(nextConfig);

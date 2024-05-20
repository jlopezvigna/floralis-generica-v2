/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    output: 'export',
    images: { unoptimized: true },
    trailingSlash: false,
};

module.exports = nextConfig;

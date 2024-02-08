import WP from './config/webpack.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    trailingSlash: true,
    webpack: (config, { webpack }) => WP(config, webpack),
};

export default nextConfig;

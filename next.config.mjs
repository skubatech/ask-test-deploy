import WP from './config/webpack.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    assetPrefix: '/ask-test-deploy/',
    webpack: (config, { webpack }) => WP(config, webpack),
};

export default nextConfig;

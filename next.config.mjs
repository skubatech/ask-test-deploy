import WP from './config/webpack.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    assetPrefix: ".",
    webpack: (config, { webpack }) => WP(config, webpack),
};

export default nextConfig;

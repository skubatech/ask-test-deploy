import WP from './config/webpack.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    basePath: "/ask-test-deploy",
    output: "export",
    webpack: (config, { webpack }) => WP(config, webpack),
};

export default nextConfig;

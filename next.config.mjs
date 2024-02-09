import WP from './config/webpack.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/ask-test-deploy",
    output: "export",
    reactStrictMode: true,
    webpack: (config, { webpack }) => WP(config, webpack),
};

export default nextConfig;

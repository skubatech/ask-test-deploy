import WP from './config/webpack.js'
const repo = 'ask-test-deploy'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`
/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    output: "export",
    reactStrictMode: true,
    webpack: (config, { webpack }) => WP(config, webpack),
};

export default nextConfig;

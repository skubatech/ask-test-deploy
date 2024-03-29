import WP from './config/webpack.js'
/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/ask-test-deploy',
    basePath: '/ask-test-deploy',
    output: "export",
    reactStrictMode: true,
    images: {
        domains: [
            "skubatech.github.io"
        ]
    },
    webpack: (config, { webpack }) => WP(config, webpack),
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    reactStrictMode: false,
    pageExtensions: ["tsx", "mdx"],
    experimental: {
        mdxRs: true,
    },
    images: {
        unoptimized: true,
    },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);

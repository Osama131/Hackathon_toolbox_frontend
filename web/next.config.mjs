import nextra from 'nextra';
// import { withMDX } from '@next/mdx';
// import { NextConfig } from 'next'
/** @type {import('next').NextConfig} */

const nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    output: 'standalone',
    // Optionally, add any other Next.js config below
    // image sources
    images: {
        remotePatterns: [
            // { protocol: 'https', hostname: 'docs.github.com' },
            // { protocol: 'https', hostname: 'wac-cdn.atlassian.com' },
            // { protocol: 'https', hostname: 'i.stack.imgur.com' },
            // { protocol: 'https', hostname: 'upload.wikimedia.org' }
        ],
    },
    basePath: process.env.BASE_PATH,
};

const withNextra = nextra({
    // theme: './pages-remote-mdx/theme',
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
})

export default withNextra(nextConfig)

// export default withMDX(nextConfig)

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
// export default nextConfig;

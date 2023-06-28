/** @type {import('next').NextConfig} */

const { withRuntimeEnv } = require('@cuww/runtime-env/dist/next');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd'],
}

module.exports = withRuntimeEnv(nextConfig)

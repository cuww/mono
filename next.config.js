/** @type {import('next').NextConfig} */

const { withRuntimeEnv } = require('./packages/runtime-env/webpack');

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['antd'],
}

module.exports = withRuntimeEnv(nextConfig)

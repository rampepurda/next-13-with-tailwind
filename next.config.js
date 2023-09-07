/** @type {import('next').NextConfig} */
require('dotenv').config({ path: process.env.ENV_FILE_PATH })

const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

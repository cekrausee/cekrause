import type { NextConfig } from 'next'

export default {
  env: {
    APP_URL: process.env.APP_URL,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    GITHUB_USERNAME: process.env.GITHUB_USERNAME
  },
  reactStrictMode: false
} satisfies NextConfig

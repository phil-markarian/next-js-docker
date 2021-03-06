/** @type {import('next').NextConfig} */
// https://www.npmjs.com/package/dotenv
require('dotenv').config()

module.exports = {
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    
    return config
  },
  reactStrictMode: true,
}

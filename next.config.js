// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY,
        CONTENTFUL_PREVIEW_KEY: process.env.CONTENTFUL_PREVIEW_KEY,
      },
  }
   
  module.exports = nextConfig
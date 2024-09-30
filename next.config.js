// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
        CONTENTFUL_API_KEY: process.env.CONTENTFUL_API_KEY,
        CONTENTFUL_PREVIEW_KEY: process.env.CONTENTFUL_PREVIEW_KEY,
      },
  }
   
  module.exports = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: "frame-ancestors 'self' https://preview.contentful.com https://app.contentful.com", // Add both Contentful domains
            },
            {
              key: "X-Frame-Options",
              value: "ALLOW-FROM https://preview.contentful.com", // Allow framing from the Contentful preview domain
            },
          ],
        },
      ];
    },
  };  
  
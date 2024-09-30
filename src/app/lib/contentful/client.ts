import * as contentful from "contentful";

const SPACE_ID: string = process.env.CONTENTFUL_SPACE_ID || "";
const ACCESS_TOKEN: string = process.env.CONTENTFUL_API_KEY || "";
const PREVIEW_TOKEN: string = process.env.CONTENTFUL_PREVIEW_KEY || "";
const ENVIRONMENT: string = process.env.CONTENTFUL_ENV || "";

 const deliveryClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT,
});

 const previewClient = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: SPACE_ID,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: PREVIEW_TOKEN,
  environment: ENVIRONMENT,
  host: "preview.contentful.com",
});

export const client = (preview = false ) => {
  if (preview) {
    return previewClient;
  }

  return deliveryClient;
};
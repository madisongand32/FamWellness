import { createClient } from "contentful";

const ContentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_API_KEY as string
});
export default ContentfulClient
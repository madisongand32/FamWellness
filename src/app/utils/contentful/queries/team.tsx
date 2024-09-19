import ContentfulClient from "../client";




// Define the GraphQL query
const GET_TEAM_PAGE = `
  query GetTeamPage {
    ourTeamPageCollection(limit: 1) {
        items {
            bannerImage {
                url
            }
            headline
        }
    }
  }
`;

// Create the function to fetch data
const getTeamPage = async () => {
    const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}`,
          },
          body: JSON.stringify({ query: GET_TEAM_PAGE }),
        }
    );

    if (!response.ok) {
        throw new Error(`GraphQL Error (Code: ${response.status}): ${response.statusText}`);
    }
    
    const { data, errors } = await response.json();

    if (errors) {
       console.error(errors);
        throw new Error('Failed to fetch team data from Contentful');
    }
  
    // Return the first home page entry
    return data.ourTeamPageCollection.items[0];
};

export default getTeamPage;


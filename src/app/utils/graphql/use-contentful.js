// Create the function to fetch data
const useContentful = async (queryName, isDraftMode) => {
  try {
      const response = await fetch(
          `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
          {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${isDraftMode ? process.env.CONTENTFUL_PREVIEW_TOKEN : process.env.CONTENTFUL_API_KEY}`,
              },
              body: JSON.stringify({ query: queryName }),
          }
      );

      // Check for response errors
      if (!response.ok) {
          const errorText = await response.text();
          console.error('Fetch error:', errorText);
          throw new Error(`Failed to fetch GraphQL data from Contentful: ${response.status} ${response.statusText}`);
      }

      const { data, errors } = await response.json();

      if (errors) {
          console.error(errors);
          throw new Error('Failed to fetch GraphQL data from Contentful');
      }

      // Return the first home page entry
      return data.ourTeamPageCollection.items[0];
  } catch (error) {
      console.error('Error in useContentful:', error);
      throw error; // Re-throw to handle further up the chain
  }
};

export default useContentful;

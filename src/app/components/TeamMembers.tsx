import useContentful  from '../utils/graphql/use-contentful';
import { TeamPageEntry } from '../types/contentful/pages/team';

const GET_TEAM_PAGE = `
  query GetTeamPage {
    ourTeamPageCollection(limit: 1) {
        items {
            bannerImage {
                url
                title
            }
            headline
        }
    }
  }
`;

export default async function TeamMembersComp() {
    const data: TeamPageEntry = await useContentful(GET_TEAM_PAGE);
    const {bannerImage, headline, descriptionText, teamGrid} = data;

    // if (!data) return <span>Loading...</span>

      return (
        <>
            <h1>Team Members Comp</h1>
            {headline}
            <ul>
                {/* {data?.teamMemberCollection?.items?.map((member) => (
                    <li key={member._id}>
                        {member.name} - <a href={member.bookUrl}>Book</a>
                        {member.profilePicture && (
                            <img src={member.profilePicture.url} alt={member.name} />
                        )}
                    </li>
                ))} */}
                
            </ul>
            {/* {data ? (
                <ul>
                {data.teamMembersCollection.items.map((member) => (
                    <li key={member.name}>
                    {member.name} - {member.role}
                    </li>
                ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )} */}
        </>
      );
}
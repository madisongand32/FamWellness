// export const getStaticPaths = async () => {
//     const res = await fetch('https://cdn.contentful.com/spaces/7keje1cj0b48/entries?access_token=rp09WT3huAC109s5xvFR42mjavqqgYvjvrJ7XKGl-_o');
//     const data = await res.json();

//     const paths = data.map(member => {
//         return {
//             params: {id: member.id.toString()}
//         }
//     })

//     return {
//         paths,
//         fallback: false,
//     }
// }

// export const getStaticProps = async (context) => {
//     const id = context.params.id;
//     const res = fetch(`https://cdn.contentful.com/spaces/7keje1cj0b48/entries?access_token=rp09WT3huAC109s5xvFR42mjavqqgYvjvrJ7XKGl-_o` + id);
//     const data = (await res).json();

//     return {
//         props: { member: data}
//     }
// }

const TeamMember = () => {
    return (
        <>
            <h1>Team Member</h1>
            {/* <p>{member.name}</p> */}
        </>
    )
}

export default TeamMember;
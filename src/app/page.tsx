import Image from "next/image";
import type { Metadata } from 'next'
import TeamMembersComp from "./components/TeamMembers";


export const metadata: Metadata = {
  title: 'Family Friendly Wellness | Home',
  description: 'Fam Friendly Homepage',
}


export default function Home() {
  const shouldRender = true;

  return (
    <>
      <div>home</div>
      {shouldRender && <TeamMembersComp />}
    </>
  );
}

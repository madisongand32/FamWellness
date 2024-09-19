import Image from "next/image";
import { createClient } from 'contentful';
import { useRouter } from 'next/router'
import Head from "next/head";
import { notFound } from 'next/navigation'
import { AppProps } from 'next/app';
import Link from "next/link";
import { useState, useEffect } from "react";
import getTeamPage from "../utils/contentful/queries/team";
import TeamPageEntry from "../types/contentful/pages/team";


export default async function Team() {
  // Fetch the data from Contentful using GraphQL
  const entry: TeamPageEntry = await getTeamPage();
  const {bannerImage, headline, descriptionText, teamGrid} = entry;

  return (
    <>
      <Head>
        <title>Our Team</title>
        <meta name="keywords" content="fam friendly wellness"/>
      </Head>
      <h1>{headline} it worked!! omg!</h1>
      {/* <Link href={'/team/' + TeamMember.id} key={TeamMember.id}></Link> */}
      {/* <TeamMember 
        name={name}
        startDate={startDate}
        bio={bio}
        bookUrl={bookUrl}
        profilePic={profilePic}
      /> */}
    </>
  );
}

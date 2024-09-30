import Image from "next/image";
import { createClient } from 'contentful';
import { useRouter } from 'next/router'
import Head from "next/head";
import { notFound } from 'next/navigation'
import { AppProps } from 'next/app';
import Link from "next/link";
import { useState, useEffect } from "react";
import { TeamPageEntry } from "../types/contentful/pages/team";
import useContentful from "../utils/graphql/use-contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';
import { draftMode } from 'next/headers';

const GET_TEAM_PAGE = `
  query GetTeamPage {
    ourTeamPageCollection {
      items {
        _id
        bannerImage {
          url
          title
        }
        headline
        descriptionText {
          json
        }
        teamList: teamGridCollection(limit: 10) { 
          items {
            sys {
              id
            }
            ... on TeamMember {
              name
              startDate
              profilePicture {
                url
                description
              }
              bio {
                json
              }
            }
          }
        }
      }
    }
  }
`;

export default async function Team() {
  // Fetch the data from Contentful using GraphQL
  const isDraftMode = draftMode().isEnabled;
  const data: TeamPageEntry = await useContentful(GET_TEAM_PAGE, isDraftMode);
  const {id, bannerImage, headline, descriptionText, teamGrid} = data;


  if (!data) {
    return <div>Content not found</div>;
  }
  return (
    <div>
      <Head>
        <title>Our Team</title>
        <meta name="keywords" content="fam friendly wellness"/>
      </Head>
      <div>
        <div className="banner-img h-[60vh]">
          <img className="w-full h-full" src={bannerImage.url} alt={bannerImage.title}/>
        </div>
        <div className="page-body text-center py-5 px-10">
          <h1>{headline}</h1>
          {documentToReactComponents(descriptionText.json)}
        </div>
        <h1>{headline} it worked</h1>
        {/* <Link href={'/team/' + TeamMember.id} key={TeamMember.id}></Link> */}
        {/* <TeamMember 
          name={name}
          startDate={startDate}
          bio={bio}
          bookUrl={bookUrl}
          profilePic={profilePic}
        /> */}
      </div>
    </div>
  );
}

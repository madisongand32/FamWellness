import { Document } from '@contentful/rich-text-types';

// type SeoImage = {
//     url: string;
//     description: string;
// };
  
export type TeamPageEntry = {
    id: string;
    bannerImage: {
        url: string;
        title: string;
    }
    headline: string;
    descriptionText: {
        json: Document;
    }
    teamGrid: string;
}

export type TeamMember = {
    _id: string;
    name: string;
    startDate: string;
    profilePicture: string;
    bookUrl: string;
}

export type TeamMembers = {
    items: TeamMember[];
};
  
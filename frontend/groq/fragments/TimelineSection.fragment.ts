import { SanityImageWithCaption } from '@interfaces/sanity/image';
import { SanityPortableText } from '@interfaces/sanity/PortableText';
import groq from 'groq';
import { SanitySkill } from './SkillsSection.fragment';

export interface SanityTimelineCard {
  _id: string;
  title: string;
  organisation: string;
  startDate: Date;
  endDate: Date;
  description: SanityPortableText;
  logo?: SanityImageWithCaption;
  keyTechnologies?: SanitySkill[];
}

export interface SanityTimelineSection {
  _key: string;
  _type: 'timelineSection';
  title: string;
  collapseBeforeYear?: number;
  timelineCards: SanityTimelineCard[];
}

export const sanityTimelineCardFields = groq`
    _id,
    title,
    organisation,
    startDate,
    endDate,
    description,
    logo,
    keyTechnologies,
`;
export const sanityTimelineSectionFields = groq`
    _key,
    _type,
    title,
    collapseBeforeYear,
    timelineCards[]-> {
        ${sanityTimelineCardFields}
    }

`;

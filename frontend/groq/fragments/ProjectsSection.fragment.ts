import { SanityCTA } from '@interfaces/sanity/cta';
import { SanityImageWithCaption } from '@interfaces/sanity/image';
import { SanityPortableText } from '@interfaces/sanity/PortableText';
import groq from 'groq';
import { SanitySkillsList, sanitySkillsListFields } from './SkillsSection.fragment';

export interface SanityProjectCard {
  _id: string;
  title: string;
  description: SanityPortableText;
  techStack: SanitySkillsList[];
  primaryCTA: SanityCTA;
  secondaryCTAs?: SanityCTA[];
  images: SanityImageWithCaption[];
}

export interface SanityProjectsSection {
  _key: string;
  _type: 'projectsSection';
  title: string;
  projectCards: SanityProjectCard[];
}

export const sanityProjectCardFields = groq`
    _id,
    title,
    description,
    techStack[] {
        ${sanitySkillsListFields}
    },
    primaryCTA,
    secondaryCTAs,
    images,
`;
export const sanityProjectsSectionFields = groq`
    _key,
    _type,
    title,
    projectCards[]-> {
        ${sanityProjectCardFields}
    },
`;

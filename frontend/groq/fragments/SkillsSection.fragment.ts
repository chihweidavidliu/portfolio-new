import { SanityImageWithCaption } from '@interfaces/sanity/image';
import groq from 'groq';

export interface SanitySkill {
  _id: string;
  title: string;
  icon?: SanityImageWithCaption;
}

export interface SanitySkillsList {
  title: string;
  skills: SanitySkill[];
}

export interface SanitySkillCard {
  _id: string;
  title: string;
  sections: { title: string; skills: SanitySkillsList[] }[];
}

export interface SanitySkillsSection {
  _key: string;
  _type: 'skillsSection';
  title: string;
  skillCards: SanitySkillCard[];
}

export const sanitySkillFields = groq`
  _id,
  title,
  icon
`;

export const sanitySkillsListFields = groq`
    title,
    skills[]-> {
      ${sanitySkillFields}
    },
`;
export const sanitySkillCardFields = groq`
  _id,
  title,
  sections[] {
    ${sanitySkillsListFields}
  }
`;
export const sanitySkillsSectionFields = groq`
    _key,
    _type,
    title,
    skillCards[]-> {
      ${sanitySkillCardFields}
    },
`;

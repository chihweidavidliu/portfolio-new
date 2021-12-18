import { SanityHeroImage, SanityImageWithCaption } from '@interfaces/sanity/image';
import { SanityPortableText } from '@interfaces/sanity/PortableText';
import groq from 'groq';

export enum SocialNetwork {
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
}

export interface SanityAboutSection {
  _key: string;
  _type: 'aboutSection';
  title: string;
  description: SanityPortableText;
  socialLinks: SocialNetwork[];
  socialLinksDescription: string;
  profileImage: SanityImageWithCaption;
}

export const sanityAboutSectionFields = groq`
    _key,
    _type,
    title,
    description,
    socialLinksDescription,
    socialLinks,
    profileImage,
`;

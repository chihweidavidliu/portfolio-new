import { SanityImageWithCaption } from '@interfaces/sanity/image';
import groq from 'groq';

export interface SanityHeroSection {
  _key: string;
  _type: 'heroSection';
  title: string;
  subtitle: string;
  centerImage: SanityImageWithCaption;
  leftImage: SanityImageWithCaption;
  rightImage: SanityImageWithCaption;
}

export const sanityHeroSectionFields = groq`
    _key,
    _type,
    title,
    subtitle,
    centerImage,
    leftImage,
    rightImage
`;

import { SanityImage } from '@interfaces/sanity/image';
import groq from 'groq';

export interface SanityHeroSection {
  _key: string;
  _type: 'heroSection';
  title: string;
  subtitle: string;
  centerImage: SanityImage;
  leftImage: SanityImage;
  rightImage: SanityImage;
}

export const sanityHeroSectionFields = groq`
    _key,
    _type,
    title,
    subtitle,
    centerImage->,
    leftImage->,
    rightImage->
`;

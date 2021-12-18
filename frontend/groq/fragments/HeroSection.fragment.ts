import { SanityHeroImage } from '@interfaces/sanity/image';
import groq from 'groq';

export interface SanityHeroSection {
  _key: string;
  _type: 'heroSection';
  title: string;
  subtitle: string;
  centerImage: SanityHeroImage;
  leftImage: SanityHeroImage;
  rightImage: SanityHeroImage;
}

export const sanityHeroSectionFields = groq`
    _key,
    _type,
    title,
    subtitle,
    centerImage,
    leftImage,
    rightImage,
`;

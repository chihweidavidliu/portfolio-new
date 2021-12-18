import SanityFetcher from '@interfaces/SanityFetcher';
import groq from 'groq';
import { SanityHeroSection, sanityHeroSectionFields } from './fragments/HeroSection';

export type SanityHomepageSection = SanityHeroSection;

export interface HomepageQuery {
  sections: SanityHomepageSection[];
}
export const HOMEPAGE_QUERY = groq`
    *[_type == 'homepage'][0] {
        ...,
        sections[] {
            ${sanityHeroSectionFields}
        }
    }
`;

export class HomepageFetcher extends SanityFetcher {
  async fetch(): Promise<HomepageQuery> {
    const response = await this.client.fetch(HOMEPAGE_QUERY);
    return response;
  }
}

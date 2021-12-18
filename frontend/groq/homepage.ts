import SanityFetcher from '@interfaces/SanityFetcher';
import groq from 'groq';
import { SanityAboutSection, sanityAboutSectionFields } from './fragments/AboutSection.fragment';
import { SanityHeroSection, sanityHeroSectionFields } from './fragments/HeroSection.fragment';
import { SanitySkillsSection, sanitySkillsSectionFields } from './fragments/SkillsSection.fragment';

export type SanityHomepageSection = SanityHeroSection | SanityAboutSection | SanitySkillsSection;

export interface HomepageQuery {
  sections: SanityHomepageSection[];
}

export const HOMEPAGE_QUERY = groq`
    *[_type == 'homepage'][0] {
        ...,
        sections[] {
            ${sanityHeroSectionFields}
            ${sanitySkillsSectionFields}
            ${sanityAboutSectionFields}
        }
    }
`;

export class HomepageFetcher extends SanityFetcher {
  async fetch(): Promise<HomepageQuery> {
    const response = await this.client.fetch(HOMEPAGE_QUERY);
    return response;
  }
}

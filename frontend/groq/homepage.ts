import SanityFetcher from '@interfaces/SanityFetcher';
import groq from 'groq';
import { SanityAboutSection, sanityAboutSectionFields } from './fragments/AboutSection.fragment';
import { SanityHeroSection, sanityHeroSectionFields } from './fragments/HeroSection.fragment';
import { SanityProjectsSection, sanityProjectsSectionFields } from './fragments/ProjectsSection.fragment';
import { SanitySkillsSection, sanitySkillsSectionFields } from './fragments/SkillsSection.fragment';
import { SanityTimelineSection, sanityTimelineSectionFields } from './fragments/TimelineSection.fragment';

export type SanityHomepageSection =
  | SanityHeroSection
  | SanityAboutSection
  | SanitySkillsSection
  | SanityProjectsSection
  | SanityTimelineSection;

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
            ${sanityProjectsSectionFields}
            ${sanityTimelineSectionFields}
        }
    }
`;

export class HomepageFetcher extends SanityFetcher {
  async fetch(): Promise<HomepageQuery> {
    const response = await this.client.fetch(HOMEPAGE_QUERY);
    return response;
  }
}

import { SanityHomepageSection } from '@groq/homepage';
import Hero from './Hero';
import SkillsSection from './SkillsSection';

interface HomepageSectionProps {
  section: SanityHomepageSection;
}

const HomepageSection = ({ section }: HomepageSectionProps) => {
  switch (section._type) {
    case 'heroSection':
      return <Hero hero={section} key={section._key} />;
    case 'skillsSection':
      return <SkillsSection section={section} />;
    default:
      return null;
  }
};

export default HomepageSection;

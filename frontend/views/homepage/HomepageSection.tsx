import { SanityHomepageSection } from '@groq/homepage';
import AboutSection from './AboutSection';
import Hero from './Hero';
import SkillsSection from './SkillsSection';

interface HomepageSectionProps {
  section: SanityHomepageSection;
}

const HomepageSection = ({ section }: HomepageSectionProps) => {
  switch (section._type) {
    case 'heroSection':
      return <Hero hero={section} />;
    case 'aboutSection':
      console.log('section', section);
      return <AboutSection section={section} />;
    case 'skillsSection':
      return <SkillsSection section={section} />;
    default:
      return null;
  }
};

export default HomepageSection;

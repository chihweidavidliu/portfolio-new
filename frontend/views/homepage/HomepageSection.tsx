import { SanityHomepageSection } from '@groq/homepage';
import AboutSection from './AboutSection';
import Hero from './Hero';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';

interface HomepageSectionProps {
  section: SanityHomepageSection;
  nextSectionId?: string;
}

const HomepageSection = ({ section, nextSectionId }: HomepageSectionProps) => {
  switch (section._type) {
    case 'heroSection':
      return <Hero hero={section} nextSectionId={nextSectionId} />;
    case 'aboutSection':
      return <AboutSection section={section} />;
    case 'skillsSection':
      return <SkillsSection section={section} />;
    case 'projectsSection':
      console.log('section', section);
      return <ProjectsSection section={section} />;
    default:
      return null;
  }
};

export default HomepageSection;

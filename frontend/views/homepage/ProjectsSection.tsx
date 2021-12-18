import { Grid } from '@chakra-ui/layout';
import { SanityProjectsSection } from '@groq/fragments/ProjectsSection.fragment';
import PageSection from '../../components/PageSection';
import PortfolioCard from '../../components/PortfolioCard';

interface ProjectsSectionProps {
  section: SanityProjectsSection;
}

const ProjectsSection = ({ section }: ProjectsSectionProps) => {
  const { projectCards } = section;
  return (
    <PageSection title="Portfolio">
      {() => (
        <Grid
          gridGap="7"
          gridTemplateColumns={{
            base: '1fr',
            lg: '1fr 1fr',
          }}
          width="100%"
          justifyItems="center"
          gridAutoRows="max-content"
        >
          {projectCards.map((projectCard) => {
            return <PortfolioCard key={projectCard._id} project={projectCard} />;
          })}
        </Grid>
      )}
    </PageSection>
  );
};

export default ProjectsSection;

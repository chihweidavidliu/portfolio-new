import { Grid } from '@chakra-ui/layout';
import PageSection from '../../frontend/components/PageSection';
import PortfolioCard from '../../frontend/components/PortfolioCard';
import { projects } from '../../frontend/data/projects';

const ProjectsSection = () => {
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
          {projects.map((project) => {
            return <PortfolioCard key={project.id} project={project} />;
          })}
        </Grid>
      )}
    </PageSection>
  );
};

export default ProjectsSection;

import { Grid } from '@chakra-ui/layout';
import PageSection from '../../components/PageSection';
import PortfolioCard from '../../components/PortfolioCard';
import { projects } from '../../data/projects';

const ProjectsSection = () => {
  return (
    <PageSection title="Portfolio">
      {() => (
        <Grid
          gridGap="7"
          gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr))"
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

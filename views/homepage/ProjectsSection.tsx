import { Grid } from '@chakra-ui/layout'
import PageSection from '../../components/PageSection'
import PortfolioCard from '../../components/PortfolioCard'
import { projects } from '../../data/projects'

const ProjectsSection = () => {
  return (
    <PageSection title="Portfolio">
      <Grid
        gridGap="7"
        gridTemplateColumns={{ base: 'repeat(auto-fill, minmax(500px, 1fr))', sm: '1fr' }}
        width="100%"
        gridAutoRows="max-content"
      >
        {projects.map((project) => {
          return <PortfolioCard key={project.id} project={project} />
        })}
      </Grid>
    </PageSection>
  )
}

export default ProjectsSection

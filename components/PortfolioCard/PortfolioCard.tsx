import { Image } from '@chakra-ui/image'
import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/layout'
import { primaryColor } from '../../theme'
import { IPortfolioProject } from '../../types/PortfolioProject'
import Card from '../Card'
import TechStackList from '../TechStackList'

interface PortfolioCardProps {
  project: IPortfolioProject
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Grid height="100%" gridTemplateRows="max-content 1fr">
      <Heading as="h3" size="md" fontWeight="semibold" color="gray.600" textAlign="center" mb="5" mt="2">
        {project.title}
      </Heading>

      <Card>
        <Image src={project.images[0].source} alt={project.images[0].caption} borderRadius="md" width="100%" />

        <Grid gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))" gridGap="8" mt="8">
          <Box>
            <Heading as="h4" size="sm" color={primaryColor(500)} mb="2">
              About
            </Heading>
            <Text>{project.description}</Text>
          </Box>

          <Box>
            <Heading as="h4" size="sm" color={primaryColor(500)} mb="2">
              Tech Stack
            </Heading>
            <Stack spacing="5">
              {project.techStack?.frontEnd && <TechStackList title="Front End" items={project.techStack.frontEnd} />}
              {project.techStack?.backEnd && <TechStackList title="Front End" items={project.techStack.backEnd} />}
            </Stack>
          </Box>
        </Grid>
      </Card>
    </Grid>
  )
}

export default PortfolioCard

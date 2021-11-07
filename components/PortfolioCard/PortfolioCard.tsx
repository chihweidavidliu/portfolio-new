import { Image } from '@chakra-ui/image'
import { Box, Divider, Grid, Heading, Stack, Text } from '@chakra-ui/layout'
import { primaryColor } from '../../theme'
import { IPortfolioProject } from '../../types/PortfolioProject'
import Card from '../Card'

interface PortfolioCardProps {
  project: IPortfolioProject
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Box>
      <Heading as="h3" size="md" fontWeight="semibold" color="gray.500" textAlign="center" mb="5">
        {project.title}
      </Heading>

      <Card>
        <Image src={project.images[0].source} alt={project.images[0].caption} borderRadius="md" />
        {/* 
      <Stack spacing="5" divider={<Divider />}>
        {PortfolioCard.categories.map((category) => {
          return (
            <Box key={category.categoryName}>
              <Heading as="h4" size="sm" fontWeight="semibold" color={primaryColor(500)}>
                {category.categoryName}
              </Heading>

              <Grid templateColumns="repeat(2, 1fr)" gridGap="2" marginTop="3">
                {category.skills.map((skill, index) => (
                  <Text key={skill + index} fontWeight="thin">
                    {skill}
                  </Text>
                ))}
              </Grid>
            </Box>
          )
        })}
      </Stack> */}
      </Card>
    </Box>
  )
}

export default PortfolioCard

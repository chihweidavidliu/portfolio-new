import { Image } from '@chakra-ui/image'
import { Badge, Box, Divider, Flex, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/layout'
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

        <Grid gridTemplateColumns="1fr 1fr" gridGap="5" mt="7">
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
              {project.techStack?.frontEnd && (
                <Box>
                  <Text color={primaryColor(500)} mb="2">
                    Front End
                  </Text>
                  <Flex gridGap="2" flexWrap="wrap">
                    {project.techStack?.frontEnd?.map((item) => {
                      return (
                        <Badge key={item} padding="1" size="sm" borderRadius="md" colorScheme="gray">
                          {item}
                        </Badge>
                      )
                    })}
                  </Flex>
                </Box>
              )}

              {project.techStack?.backEnd && (
                <Box>
                  <Text color={primaryColor(500)} mb="2">
                    Back End
                  </Text>
                  <Flex gridGap="2" flexWrap="wrap">
                    {project.techStack?.backEnd?.map((item) => {
                      return (
                        <Badge key={item} padding="1" size="sm" borderRadius="md" colorScheme="gray">
                          {item}
                        </Badge>
                      )
                    })}
                  </Flex>
                </Box>
              )}
            </Stack>
          </Box>
        </Grid>
      </Card>
    </Box>
  )
}

export default PortfolioCard

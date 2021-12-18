import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { primaryColor } from '@theme';
import Card from '../Card';
import TechStackList from '../TechStackList';
import { SanityProjectCard } from '@groq/fragments/ProjectsSection.fragment';
import { BlockContent, urlFor } from 'sanity';

const Subheading: FC = ({ children }) => {
  return (
    <Heading as="h4" size="sm" color={primaryColor(500)} mb="2">
      {children}
    </Heading>
  );
};

interface PortfolioCardProps {
  project: SanityProjectCard;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Card animate title={project.title} id={project._id}>
      <Box display="grid" gridTemplateRows="max-content 1fr max-content" gridGap="12" height="100%">
        <Image
          src={urlFor(project.images[0].asset._ref).url() || ''}
          alt={project.images[0]?.metadata.caption}
          borderRadius="md"
          width="100%"
        />
        <Grid
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          textAlign={{ base: 'center', md: 'left' }}
          gridGap="8"
        >
          <Box>
            <Subheading>About</Subheading>
            <BlockContent blocks={project.description} />
          </Box>

          <Box>
            <Subheading>Tech Stack</Subheading>
            <Stack spacing="5">
              {project?.techStack.map((stack) => {
                return (
                  <TechStackList
                    title={stack.title}
                    items={stack.skills.map((skill) => skill.title)}
                    key={stack.title}
                  />
                );
              })}
            </Stack>
          </Box>
        </Grid>

        <Grid gridGap="3">
          {project.secondaryCTAs?.map((cta) => (
            <Button
              as="a"
              href={cta.url}
              key={cta.url}
              color={primaryColor(500)}
              bgColor="gray.200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta.title}
            </Button>
          ))}

          {project.primaryCTA && (
            <Button
              as="a"
              href={project.primaryCTA.url}
              key={project.primaryCTA.url}
              bgColor={primaryColor(500)}
              _hover={{
                bgColor: primaryColor(600),
              }}
              color="white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.primaryCTA.title}
            </Button>
          )}
        </Grid>
      </Box>
    </Card>
  );
};

export default PortfolioCard;

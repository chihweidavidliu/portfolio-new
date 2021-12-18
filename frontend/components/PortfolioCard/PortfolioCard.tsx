import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, Grid, Heading, Stack, Text } from '@chakra-ui/layout';
import { FC } from 'react';
import { primaryColor } from '../../theme';
import { IPortfolioProject } from '../../types/PortfolioProject';
import Card from '../Card';
import TechStackList from '../TechStackList';

const Subheading: FC = ({ children }) => {
  return (
    <Heading as="h4" size="sm" color={primaryColor(500)} mb="2">
      {children}
    </Heading>
  );
};

interface PortfolioCardProps {
  project: IPortfolioProject;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Card animate title={project.title} id={project.title}>
      <Box display="grid" gridTemplateRows="max-content 1fr max-content" gridGap="12" height="100%">
        <Image src={project.images[0].source} alt={project.images[0].caption} borderRadius="md" width="100%" />
        <Grid
          gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
          textAlign={{ base: 'center', md: 'left' }}
          gridGap="8"
        >
          <Box>
            <Subheading>About</Subheading>
            <Text>{project.description}</Text>
          </Box>

          <Box>
            <Subheading>Tech Stack</Subheading>
            <Stack spacing="5">
              {project.techStack?.frontEnd && <TechStackList title="Front End" items={project.techStack.frontEnd} />}
              {project.techStack?.backEnd && <TechStackList title="Front End" items={project.techStack.backEnd} />}
            </Stack>
          </Box>
        </Grid>

        <Grid gridGap="3">
          {project.githubLinks.map((link) => (
            <Button
              as="a"
              href={link.url}
              key={link.url}
              color={primaryColor(500)}
              bgColor="gray.200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Button>
          ))}

          {project.liveSiteLink && (
            <Button
              as="a"
              href={project.liveSiteLink.url}
              key={project.liveSiteLink.url}
              bgColor={primaryColor(500)}
              _hover={{
                bgColor: primaryColor(600),
              }}
              color="white"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.liveSiteLink.label}
            </Button>
          )}
        </Grid>
      </Box>
    </Card>
  );
};

export default PortfolioCard;

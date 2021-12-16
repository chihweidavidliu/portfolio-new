import { Grid, Text, Box, Image, HStack } from '@chakra-ui/react';
import PageSection from '../../components/PageSection';
import SocialLink from '../../components/SocialLink';

const IMAGE_SRC =
  'https://avatars3.githubusercontent.com/u/40054735?s=460&u=bc4a2fdebed23da2de159078dec770b5ea99ad3c&v=4';
const AboutSection = () => {
  return (
    <PageSection title="About" id="about-section">
      {() => {
        return (
          <Grid
            maxWidth="container.md"
            margin="0 auto"
            gridTemplateColumns={{ base: '1fr', md: '1fr max-content' }}
            justifyItems="center"
            gridGap="20px"
          >
            <Grid gridGap={4}>
              <Text>
                I’m a self-taught full-stack web developer who creates beautiful, powerful web apps using a range of
                modern technologies.
              </Text>
              <Text>Follow my projects on Github and Linkedin:</Text>
              <HStack>
                <SocialLink socialNetwork="github" />
                <SocialLink socialNetwork="linkedin" />
              </HStack>
            </Grid>
            <Box>
              <Image src={IMAGE_SRC} alt="profile-photo" height={150} width={150} borderRadius="50%" />
            </Box>
          </Grid>
        );
      }}
    </PageSection>
  );
};

export default AboutSection;

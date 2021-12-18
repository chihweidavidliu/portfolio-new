import { Grid, Text, Box, Image, HStack } from '@chakra-ui/react';
import PageSection from '@components/PageSection';
import SocialLink from '@components/SocialLink';
import { SanityAboutSection } from '@groq/fragments/AboutSection.fragment';
import { BlockContent, urlFor } from 'sanity';

interface AboutSectionProps {
  section: SanityAboutSection;
}

const AboutSection = ({ section }: AboutSectionProps) => {
  const { _key, title, description, socialLinks, socialLinksDescription, profileImage } = section;

  return (
    <PageSection title={title || 'About'} id={_key}>
      {() => {
        return (
          <Grid
            maxWidth="container.md"
            margin="0 auto"
            gridTemplateColumns={{ base: '1fr', md: '1fr max-content' }}
            justifyItems="center"
            gridGap="20px"
            padding="10px"
          >
            <Grid gridGap={4}>
              <BlockContent blocks={description} />

              <Text>{socialLinksDescription}</Text>
              <HStack>
                {socialLinks?.map((socialLink) => (
                  <SocialLink socialNetwork={socialLink} key={socialLink} />
                ))}
              </HStack>
            </Grid>
            <Box>
              <Image
                src={urlFor(profileImage.asset._ref).width(150).height(150).url() || ''}
                alt="profile-photo"
                height={150}
                width={150}
                borderRadius="50%"
              />
            </Box>
          </Grid>
        );
      }}
    </PageSection>
  );
};

export default AboutSection;

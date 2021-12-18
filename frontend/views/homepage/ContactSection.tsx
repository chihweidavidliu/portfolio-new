import { Grid, Text } from '@chakra-ui/react';
import PageSection from '@components/PageSection';
import SocialLink from '@components/SocialLink';
import { SocialNetwork } from '@groq/fragments/AboutSection.fragment';

const ContactSection = () => {
  return (
    <PageSection title="Contact" id="contact-section">
      {() => {
        return (
          <Grid textAlign="center" justifyItems="center" gridGap={4} margin="90px 0px">
            <Text>Link my work? Contact me on Linkedin</Text>
            <SocialLink socialNetwork={SocialNetwork.LINKEDIN} />
          </Grid>
        );
      }}
    </PageSection>
  );
};

export default ContactSection;

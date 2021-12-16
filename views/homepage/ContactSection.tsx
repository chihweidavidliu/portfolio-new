import { Grid, Text } from '@chakra-ui/react';
import PageSection from '../../components/PageSection';
import SocialLink from '../../components/SocialLink';

const IMAGE_SRC =
  'https://avatars3.githubusercontent.com/u/40054735?s=460&u=bc4a2fdebed23da2de159078dec770b5ea99ad3c&v=4';
const ContactSection = () => {
  return (
    <PageSection title="Contact" id="contact-section">
      {() => {
        return (
          <Grid textAlign="center" justifyItems="center" gridGap={4} margin="90px 0px">
            <Text>Link my work? Contact me on Linkedin</Text>
            <SocialLink socialNetwork="linkedin" />
          </Grid>
        );
      }}
    </PageSection>
  );
};

export default ContactSection;

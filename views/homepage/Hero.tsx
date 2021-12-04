import { Flex, Grid, Heading } from '@chakra-ui/layout';

const HERO_IMAGE_URL =
  "url('https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')";

const Hero = () => {
  return (
    <Flex
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundImage={HERO_IMAGE_URL}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Grid>
        <Heading color="white" fontSize="clamp(40px, 5vw, 70px)" textShadow="2px 2px 30px #2D3748">
          Hi, I'm David
        </Heading>
      </Grid>
    </Flex>
  );
};

export default Hero;

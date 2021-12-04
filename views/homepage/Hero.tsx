import { Image } from '@chakra-ui/image';
import Link from 'next/link';
import { Flex, Grid, Heading, Box } from '@chakra-ui/layout';

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
      <Grid gridGap="50px">
        <Heading
          as="h1"
          color="white"
          fontSize="clamp(40px, 5vw, 70px)"
          textShadow="2px 2px 30px #2D3748"
          textAlign="center"
        >
          Hi, I'm David <br />
          <Box as="span" fontSize="clamp(20px, 5vw, 25px)" fontWeight="semibold">
            A full stack web developer based in London
          </Box>
        </Heading>

        <Grid gridTemplateColumns="repeat(auto-fit, minmax(50px, 1fr))">
          <a href="#TaskMaster">
            <Image
              boxShadow="md"
              width="100%"
              maxWidth="800px"
              alt="Taskmaster App Dashboard"
              src={
                'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202957/portfolio/taskmaster/taskmaster-thumbnail_vamjxs.png'
              }
            />
          </a>

          <a href="#MyInternship">
            <Image
              boxShadow="md"
              width="100%"
              maxWidth="800px"
              alt="MyInternship App Dashboard"
              src={
                'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-thumbnail_nvtgiz.png'
              }
            />
          </a>

          <a href="#Lingualink">
            <Image
              boxShadow="md"
              width="100%"
              maxWidth="800px"
              alt="Lingualink App Dashboard"
              src={
                'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-student-detail_mzbai1.png'
              }
            />
          </a>
        </Grid>
      </Grid>
    </Flex>
  );
};

export default Hero;

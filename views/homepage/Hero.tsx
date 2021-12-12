import { Image } from '@chakra-ui/image';
import { Flex, Grid, Heading, Box } from '@chakra-ui/layout';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '../../components/Timeline/BaseTimelineCard';

const HERO_IMAGE_URL =
  "url('https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')";

interface HeroImageProps {
  href: string;
  src: string;
  alt: string;
  position: 'left' | 'center' | 'right';
  interSectionRatio: number;
}

const HeroImage = ({ href, src, alt, position, interSectionRatio }: HeroImageProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getAnimationVariants = (position: HeroImageProps['position']) => {
    return {
      visible: { opacity: 1, transition: { duration: 0.7 } },
      hidden: { opacity: 0 },
    };
  };

  const getPosition = (position: HeroImageProps['position'], intersectionRatio: number) => {
    const weighting = 1 - intersectionRatio;

    switch (position) {
      case 'left':
        return {
          perspective: 800 * intersectionRatio,
          transform: `translateX(-${weighting * 100}%) rotate(${weighting * 40}deg) scale(${intersectionRatio})`,
          opacity: intersectionRatio,
        };
      case 'right':
        return {
          transform: `translateX(${weighting * 100}%) rotate(-${weighting * 40}deg) scale(${intersectionRatio})`,
          opacity: intersectionRatio,
        };
      case 'center':
        return {
          perspective: 400,
          transform: `translateY(-${weighting * 100}%) scale(${intersectionRatio})`,
          opacity: intersectionRatio,
        };
      default:
        return {};
    }
  };

  return (
    <MotionBox
      animate={controls}
      variants={getAnimationVariants(position)}
      ref={ref}
      initial="hidden"
      style={{
        transition: 'all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s',
        ...getPosition(position, interSectionRatio),
      }}
    >
      <a href={href}>
        <Image boxShadow="md" width="100%" maxWidth="800px" alt={alt} src={src} />
      </a>
    </MotionBox>
  );
};

const THRESHOLD = [
  0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1,
]; // Store multiple thresholds in a constant

const Hero = () => {
  const controls = useAnimation();
  const { ref, entry } = useInView({ threshold: THRESHOLD });
  const intersectionRatio = entry ? entry.intersectionRatio : 1;
  console.log('intersectionRatio', intersectionRatio);

  return (
    <Flex
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      backgroundImage={HERO_IMAGE_URL}
      backgroundSize="cover"
      backgroundPosition="center"
      position="relative"
      animate={controls}
      ref={ref}
      initial="hidden"
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

        <Grid gridTemplateColumns="repeat(3, 1fr)">
          <HeroImage
            href="#TaskMaster"
            src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202957/portfolio/taskmaster/taskmaster-thumbnail_vamjxs.png"
            alt="Taskmaster App Dashboard"
            position="left"
            interSectionRatio={intersectionRatio}
          />

          <HeroImage
            href="#MyInternship"
            src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-thumbnail_nvtgiz.png"
            alt="MyInternship App Dashboard"
            position="center"
            interSectionRatio={intersectionRatio}
          />

          <HeroImage
            href="#Lingualink"
            src="https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-student-detail_mzbai1.png"
            alt="Lingualink App Dashboard"
            position="right"
            interSectionRatio={intersectionRatio}
          />
        </Grid>
      </Grid>
    </Flex>
  );
};

export default Hero;

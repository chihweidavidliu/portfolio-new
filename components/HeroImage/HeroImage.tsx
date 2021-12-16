import { Image } from '@chakra-ui/image';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MotionBox } from '../Timeline/BaseTimelineCard';
import { getHeroImagePosition, HeroImagePosition } from './helpers';

interface HeroImageProps {
  href: string;
  src: string;
  alt: string;
  position: HeroImagePosition;
  interSectionRatio: number;
}

const animationVariants = {
  visible: { opacity: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0 },
};

const HeroImage = ({ href, src, alt, position, interSectionRatio }: HeroImageProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      animate={controls}
      variants={animationVariants}
      ref={ref}
      initial="hidden"
      style={{
        transition: 'all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s',
        ...getHeroImagePosition(position, interSectionRatio),
      }}
    >
      <a href={href}>
        <Image boxShadow="md" width="100%" maxWidth="800px" alt={alt} src={src} />
      </a>
    </MotionBox>
  );
};

export default HeroImage;

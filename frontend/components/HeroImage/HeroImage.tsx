import { Image } from '@chakra-ui/image';
import { Link } from 'react-scroll';
import { MotionBox } from '../Timeline/BaseTimelineCard';
import { getHeroImagePosition, HeroImagePosition } from './helpers';

interface HeroImageProps {
  to: string;
  src: string;
  alt: string;
  position: HeroImagePosition;
  interSectionRatio: number;
}

const animationVariants = {
  visible: { opacity: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0 },
};

const HeroImage = ({ to, src, alt, position, interSectionRatio }: HeroImageProps) => {
  return (
    <MotionBox
      variants={animationVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        transition: 'all cubic-bezier(0.075, 0.82, 0.165, 1) 0.8s',
        ...getHeroImagePosition(position, interSectionRatio),
      }}
    >
      <Link to={to} smooth style={{ cursor: 'pointer' }} duration={300}>
        <Image boxShadow="md" width="100%" maxWidth="800px" alt={alt} src={src} />
      </Link>
    </MotionBox>
  );
};

export default HeroImage;

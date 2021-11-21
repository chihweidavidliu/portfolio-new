import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion, useMotionValue, useTransform } from 'framer-motion';
import TimelineBranch from './TimelineBranch';
import { Box, BoxProps } from '@chakra-ui/layout';
import { primaryColor } from '../../theme';
import { Position } from '../../types/Position';

const MotionBox = motion<BoxProps>(Box);

interface BaseTimelineCardProps {
  cardPosition: Position;
  topOffset: number;
  height: number;
}

const BaseTimelineCard: FC<BaseTimelineCardProps> = ({ children, topOffset, height, cardPosition }) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [3, -3]);
  const rotateY = useTransform(x, [0, 400], [-3, 3]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.7,
    rootMargin: `0px 0px 100px 0px`,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getAnimationVariants = (position: Position) => {
    return {
      visible: { opacity: 1, x: '0%', transition: { duration: 0.7 } },
      hidden: { opacity: 0, x: position === 'right' ? '50%' : '-50%' },
    };
  };

  return (
    <MotionBox
      animate={controls}
      variants={getAnimationVariants(cardPosition)}
      initial="hidden"
      left={{ base: '115px', lg: cardPosition === 'right' ? '115px' : undefined }}
      right={{ base: undefined, lg: cardPosition === 'left' ? '100px' : undefined }}
      style={{
        position: 'absolute',
        perspective: 400,
        top: topOffset + 'px',
        height: height + 'px',
        display: 'flex',
        alignItems: 'center',
        pointerEvents: 'none',
      }}
      onMouseLeave={() => {
        x.set(200);
        y.set(200);
        rotateX.set(0);
        rotateY.set(0);
      }}
      onMouseMove={(e) => {
        const rect = e?.currentTarget.getBoundingClientRect();
        const newX = e.clientX - rect.left;
        const newY = e.clientY - rect.top;

        x.set(newX);
        y.set(newY);
      }}
      _hover={{
        zIndex: 100,
      }}
    >
      <MotionBox
        bg="white"
        minW="400px"
        maxW="400px"
        padding="30px"
        pointerEvents="initial"
        boxShadow="md"
        borderRadius="md"
        ref={ref}
        className="timeline-card"
        _hover={{
          '&& + .bar': {
            borderColor: primaryColor(500),
            '.horizontal-bar': {
              borderColor: primaryColor(500),
            },
          },
        }}
        style={{
          transition: 'all 0.1s',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        {children}
      </MotionBox>
      <TimelineBranch branchPosition={cardPosition} />
    </MotionBox>
  );
};

export default BaseTimelineCard;

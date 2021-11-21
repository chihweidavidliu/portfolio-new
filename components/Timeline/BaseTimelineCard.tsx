import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion, useMotionValue, useTransform } from 'framer-motion';
import TimelineBranch from './TimelineBranch';
import { Box, BoxProps } from '@chakra-ui/layout';
import { primaryColor } from '../../theme';

const MotionBox = motion<BoxProps>(Box);

interface BaseTimelineCardProps {
  isEven: boolean;
  topOffset: number;
  height: number;
  hasInadequateSpace?: boolean;
}

const BaseTimelineCard: FC<BaseTimelineCardProps> = ({
  children,
  isEven,
  topOffset,
  height,
  hasInadequateSpace = false,
}) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [3, -3]);
  const rotateY = useTransform(x, [0, 400], [-3, 3]);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: hasInadequateSpace ? 0 : 0.7,
    rootMargin: `0px 0px ${hasInadequateSpace ? '100px' : '0px'} 0px`,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getAnimationVariants = (isEven: boolean, hasInadequateSpace: boolean) => {
    if (hasInadequateSpace) {
      return {
        visible: { opacity: 1, y: '0%', transition: { duration: 0.7 } },
        hidden: { opacity: 0, y: '50%' },
      };
    }
    return {
      visible: { opacity: 1, x: '0%', transition: { duration: 0.7 } },
      hidden: { opacity: 0, x: isEven ? '50%' : '-50%' },
    };
  };

  const getPositioningStyles = (hasInadequateSpace: boolean): BoxProps['style'] => {
    if (hasInadequateSpace) {
      return {};
    }

    return {
      position: 'absolute',
      top: topOffset + 'px',
      left: isEven ? '115px' : undefined,
      right: !isEven ? '100px' : undefined,
      height: height + 'px',
    };
  };

  return (
    <MotionBox
      animate={controls}
      variants={getAnimationVariants(isEven, hasInadequateSpace)}
      initial="hidden"
      style={{
        ...getPositioningStyles(hasInadequateSpace),
        perspective: 400,
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
      {!hasInadequateSpace && <TimelineBranch isEven={isEven} />}
    </MotionBox>
  );
};

export default BaseTimelineCard;

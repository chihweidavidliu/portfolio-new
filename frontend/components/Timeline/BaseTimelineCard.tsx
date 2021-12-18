import { FC } from 'react';
import { useAnimation, motion, useMotionValue, useTransform } from 'framer-motion';
import TimelineBranch from './TimelineBranch';
import { Box, BoxProps } from '@chakra-ui/layout';
import { primaryColor } from '../../../theme';
import { TimelinePosition } from '../../../types/TimelinePosition';

export const MotionBox = motion<BoxProps>(Box);

interface BaseTimelineCardProps {
  topOffset: number;
  height: number;
  hasAdequateSpace?: boolean;
  position: TimelinePosition;
}

const BaseTimelineCard: FC<BaseTimelineCardProps> = ({
  children,
  position,
  topOffset,
  height,
  hasAdequateSpace = true,
}) => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [3, -3]);
  const rotateY = useTransform(x, [0, 400], [-3, 3]);

  const controls = useAnimation();

  const getAnimationVariants = (position: TimelinePosition, hasAdequateSpace: boolean) => {
    if (!hasAdequateSpace) {
      return {
        visible: { opacity: 1, y: '0%', transition: { duration: 0.7 } },
        hidden: { opacity: 0, y: '50%' },
      };
    }
    return {
      visible: { opacity: 1, x: '0%', transition: { duration: 0.7 } },
      hidden: { opacity: 0, x: position === 'right' ? '50%' : '-50%' },
    };
  };

  const getPositioningStyles = (hasAdequateSpace: boolean): BoxProps['style'] => {
    if (!hasAdequateSpace) {
      return {};
    }

    return {
      position: 'absolute',
      top: topOffset + 'px',
      height: height + 'px',
    };
  };

  return (
    <MotionBox
      animate={controls}
      variants={getAnimationVariants(position, hasAdequateSpace)}
      initial="hidden"
      viewport={{ once: true }}
      right={{
        base: position === 'left' ? '90px' : undefined,
        lg: position === 'left' ? '100px' : undefined,
      }}
      left={{
        base: position === 'right' ? '90px' : undefined, // account for month labels disappearing
        lg: position === 'right' ? '115px' : undefined,
      }}
      style={{
        ...getPositioningStyles(hasAdequateSpace),
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
        onViewportEnter={() => {
          controls.start('visible');
        }}
        bg="white"
        width={hasAdequateSpace ? 'clamp(350px, 30vw, 400px)' : 'clamp(300px, 80vw, 700px)'}
        padding="30px"
        pointerEvents="initial"
        boxShadow="md"
        borderRadius="md"
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
      {hasAdequateSpace && <TimelineBranch cardPosition={position} />}
    </MotionBox>
  );
};

export default BaseTimelineCard;

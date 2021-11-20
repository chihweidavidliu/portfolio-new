import { FC, useEffect } from 'react';
import { Box } from '@chakra-ui/layout';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import { primaryColor } from '../../theme';
import TimelineBranch from './TimelineBranch';

interface BaseTimelineCardProps {
  isEven: boolean;
  topOffset: number;
  height: number;
}

const BaseTimelineCard: FC<BaseTimelineCardProps> = ({ children, isEven, topOffset, height }) => {
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

  const getAnimationVariants = (isEven: boolean) => {
    return {
      visible: { opacity: 1, x: '0%', transition: { duration: 0.7 } },
      hidden: { opacity: 0, x: isEven ? '50%' : '-50%' },
    };
  };

  return (
    <motion.div
      animate={controls}
      variants={getAnimationVariants(isEven)}
      initial="hidden"
      className="timeline-card"
      style={{
        position: 'absolute',
        top: topOffset + 'px',
        left: isEven ? '115px' : undefined,
        right: !isEven ? '100px' : undefined,
        height: height + 'px',
        display: 'flex',

        alignItems: 'center',
        pointerEvents: 'none',
      }}
    >
      <Box
        ref={ref}
        bg="white"
        boxShadow="md"
        minW="400px"
        maxW="400px"
        padding="7"
        pointerEvents="initial"
        _hover={{
          '&& + .bar': {
            borderColor: primaryColor(500),
            zIndex: 100,
            '.horizontal-bar': {
              borderColor: primaryColor(500),
              zIndex: 100,
            },
          },
        }}
      >
        {children}
      </Box>
      <TimelineBranch isEven={isEven} />
    </motion.div>
  );
};

export default BaseTimelineCard;

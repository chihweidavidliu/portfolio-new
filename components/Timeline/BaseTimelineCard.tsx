import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion, useMotionValue, useTransform } from 'framer-motion';
import TimelineBranch from './TimelineBranch';

interface BaseTimelineCardProps {
  isEven: boolean;
  topOffset: number;
  height: number;
}

const BaseTimelineCard: FC<BaseTimelineCardProps> = ({ children, isEven, topOffset, height }) => {
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
      style={{
        position: 'absolute',
        perspective: 400,
        top: topOffset + 'px',
        left: isEven ? '115px' : undefined,
        right: !isEven ? '100px' : undefined,
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
    >
      <motion.div
        ref={ref}
        className="timeline-card"
        style={{
          background: 'white',
          minWidth: '400px',
          maxWidth: '400px',
          padding: '30px',
          borderRadius: '10px',
          pointerEvents: 'initial',
          boxShadow: '2px 4px 25px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.1s',
          rotateX: rotateX,
          rotateY: rotateY,
        }}
      >
        {children}
      </motion.div>
      <TimelineBranch isEven={isEven} />
    </motion.div>
  );
};

export default BaseTimelineCard;

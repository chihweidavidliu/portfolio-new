import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export const useSlideInAnimation = () => {
  const variants = {
    visible: { opacity: 1, y: '0%', transition: { duration: 0.7 } },
    hidden: { opacity: 0, y: '50%' },
  };

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: `0px 0px 100px 0px`,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return { controls, ref, variants, initial: 'hidden' };
};

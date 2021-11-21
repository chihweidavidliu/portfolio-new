import { Box, BoxProps, Heading } from '@chakra-ui/layout';
import { useAnimation } from 'framer-motion';
import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { primaryColor } from '../../theme';
import { MotionBox } from '../Timeline/BaseTimelineCard';

interface CardProps {
  chakraProps?: BoxProps;
  animate?: boolean;
  title?: string;
}

const Card: FC<CardProps> = ({ children, chakraProps, animate, title }) => {
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

  return (
    <MotionBox
      ref={ref}
      animate={animate ? controls : undefined}
      initial={animate ? 'hidden' : 'visible'}
      variants={{
        visible: { opacity: 1, y: '0%', transition: { duration: 0.7 } },
        hidden: { opacity: 0, y: '50%' },
      }}
      css={{
        display: 'grid',
        height: '100%',
        gridTemplateRows: title ? 'max-content 1fr' : '1fr',
      }}
    >
      {title && (
        <Heading as="h3" size="md" fontWeight="semibold" color="gray.600" textAlign="center" mb="5" mt="2">
          {title}
        </Heading>
      )}
      <Box
        borderWidth="1px"
        padding="8"
        borderRadius="md"
        bgColor="white"
        boxShadow="lg"
        maxWidth="700px"
        css={{
          transition: 'all 0.4s',
        }}
        _hover={{ borderColor: primaryColor(500) }}
      >
        {children}
      </Box>
    </MotionBox>
  );
};
export default Card;

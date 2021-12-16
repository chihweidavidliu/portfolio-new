import { Box, Heading } from '@chakra-ui/layout';
import { motion } from 'framer-motion';
import { FC } from 'react';
import { primaryColor } from '../../theme';

interface CardProps {
  animate?: boolean;
  title?: string;
  id?: string;
}

const animationVariants = {
  initial: { opacity: 0, y: '50%' },
  inView: { opacity: 1, y: '0%', transition: { duration: 0.6 } },
};

const Card: FC<CardProps> = ({ children, animate, title, id }) => {
  return (
    <motion.div
      id={id}
      initial={animate ? animationVariants.initial : animationVariants.inView}
      whileInView={animationVariants.inView}
      viewport={{ once: true }}
      style={{
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
    </motion.div>
  );
};
export default Card;

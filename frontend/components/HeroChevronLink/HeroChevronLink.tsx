import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

interface HeroChevronLinkProps {
  to: string;
}

const HeroChevronLink = ({ to }: HeroChevronLinkProps) => {
  return (
    <motion.div
      animate={{ y: [5, -5] }}
      transition={{
        duration: 0.8,
        yoyo: Infinity,
        ease: 'easeOut',
      }}
      style={{
        margin: '0 auto',
        position: 'absolute',
        bottom: 40,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <Link to={to} smooth style={{ cursor: 'pointer' }} duration={300}>
        <ChevronDownIcon color="gray.400" w={12} h={12} />
      </Link>
    </motion.div>
  );
};

export default HeroChevronLink;

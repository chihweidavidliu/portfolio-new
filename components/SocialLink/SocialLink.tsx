import { Link } from '@chakra-ui/react';
import { primaryColor } from '../../theme';
import { GithubIcon } from '../icons/GithubIcon';
import { LinkedinIcon } from '../icons/LinkedinIcon';

type SocialNetwork = 'github' | 'linkedin';

interface SocialLinkProps {
  href: string;
  socialNetwork: SocialNetwork;
}
const SocialLink = ({ href, socialNetwork }: SocialLinkProps) => {
  const renderIcon = (socialNetwork: SocialNetwork) => {
    switch (socialNetwork) {
      case 'github':
        return <GithubIcon />;
      case 'linkedin':
        return <LinkedinIcon />;
      default:
        return null;
    }
  };

  return (
    <Link target="_blank" color="gray.500" _hover={{ color: primaryColor(500) }} href={href}>
      {renderIcon(socialNetwork)}
    </Link>
  );
};

export default SocialLink;

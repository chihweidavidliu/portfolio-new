import { Link } from '@chakra-ui/react';
import { primaryColor } from '@theme';
import { GithubIcon } from '@components/icons/GithubIcon';
import { LinkedinIcon } from '@components/icons/LinkedinIcon';
import { SocialNetwork } from '@groq/fragments/AboutSection.fragment';

interface SocialLinkProps {
  socialNetwork: SocialNetwork;
}
const SocialLink = ({ socialNetwork }: SocialLinkProps) => {
  const getHref = (socialNetwork: SocialNetwork): string => {
    const map = {
      github: 'https://github.com/chihweidavidliu',
      linkedin: 'https://www.linkedin.com/in/david-liu-a6415663/',
    };

    return map[socialNetwork];
  };

  const renderIcon = (socialNetwork: SocialNetwork) => {
    const map = {
      github: <GithubIcon />,
      linkedin: <LinkedinIcon />,
    };
    return map[socialNetwork];
  };

  return (
    <Link
      target="_blank"
      rel="noreferrer"
      color="gray.500"
      _hover={{ color: primaryColor(500) }}
      href={getHref(socialNetwork)}
      aria-label={`${socialNetwork}-link`}
    >
      {renderIcon(socialNetwork)}
    </Link>
  );
};

export default SocialLink;

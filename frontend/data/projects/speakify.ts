import { v4 as uuidv4 } from 'uuid';
import { IPortfolioProject } from '@interfaces/PortfolioProject';

export const speakifyProject: IPortfolioProject = {
  id: uuidv4(),
  title: 'Speakify',
  description:
    'A personal text-to-speech project designed to help language educators with downloading pronunciations of words in a variety of languages.',
  techStack: {
    frontEnd: ['HTML', 'CSS3', 'React', 'papaParse', 'soundOfText API'],
  },
  githubLinks: [],
  liveSiteLink: { url: '/speakify', label: 'Live Site' },
  images: [
    {
      source: 'https://res.cloudinary.com/dhccfu1un/image/upload/v1584228838/portfolio/Speakify/speakify_jpncux.png',
      caption: 'Homepage',
    },
  ],
};

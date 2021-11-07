import { v4 as uuidv4 } from 'uuid'
import { IPortfolioProject } from '../../types/PortfolioProject'

export const snakeProject: IPortfolioProject = {
  id: uuidv4(),
  title: 'Snake',
  description: 'A clone of the classic game. Features 4 difficulty levels and local storage high scores.',
  techStack: {
    frontEnd: ['React', 'Typescript', 'Styled Components'],
  },
  githubLinks: [
    {
      url: 'https://github.com/chihweidavidliu/snake',
      label: 'Source Code',
    },
  ],
  liveSiteLink: { url: 'https://snake-classic-clone.netlify.app/', label: 'Live Site' },
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1590354367/portfolio/snake/Screenshot_2020-05-24_at_22.01.36_ud0gil.png',
      caption: 'Home',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1590354367/portfolio/snake/Screenshot_2020-05-24_at_22.02.27_t6wcir.png',
      caption: 'high Score Submission',
    },
  ],
}

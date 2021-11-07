import { v4 as uuidv4 } from 'uuid'
import { IPortfolioProject } from '../../types/PortfolioProject'

export const notemateProject: IPortfolioProject = {
  id: uuidv4(),
  title: 'Notemate',
  description: `A Proof of Concept note-taking app with write anywhere feature, rich text editing and syntax highlighting. `,
  techStack: {
    frontEnd: ['React', 'NextJS', 'Typescript', 'Styled Components'],
    backEnd: ['Graphql (Hasura)', 'Auth0', 'Postgres'],
  },
  githubLinks: [],
  liveSiteLink: { url: 'https://notemate.davidliu.co/', label: 'Live Site' },
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1617452002/NoteMate/Screenshot_2021-04-03_at_13.06.23_fxfxdo.png',
      caption: 'Main interface',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1617452002/NoteMate/Screenshot_2021-04-03_at_13.07.00_u1zwih.png',
      caption: 'Folder creation',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1617467740/NoteMate/Screenshot_2021-04-03_at_13.09.06_rfx36x.png',
      caption: 'Rich editing features',
    },
  ],
}

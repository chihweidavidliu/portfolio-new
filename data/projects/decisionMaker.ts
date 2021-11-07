import { v4 as uuidv4 } from 'uuid'
import { IPortfolioProject } from '../../types/PortfolioProject'

export const decisionMakerProject: IPortfolioProject = {
  id: uuidv4(),
  title: 'Decision Maker',
  description: `Struggling with a tricky decision? Use this tool to set up a values-based decision tree to help decide!`,
  techStack: {
    frontEnd: ['React', 'Typescript', 'Styled Components', 'React Flow'],
  },
  githubLinks: [
    {
      url: 'https://github.com/chihweidavidliu/sourceful-test',
      label: 'Source Code',
    },
  ],
  liveSiteLink: { url: 'https://sourceful-decision-maker.netlify.app/', label: 'Live Site' },
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1606587655/Sourceful%20Decision%20Maker/decision-tool_dqehpd.png',
      caption: 'Choosing between cars',
    },
  ],
}

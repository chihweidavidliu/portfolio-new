import { v4 as uuidv4 } from 'uuid';
import { IPortfolioProject } from '../../types/PortfolioProject';

export const lingualinkProject: IPortfolioProject = {
  id: uuidv4(),
  title: 'Lingualink',
  description:
    'A digital classroom connecting language teachers and students. Key features include class and homework creation, detailed student progress monitoring, and analysis of areas for improvement. Includes premium subscription option.',
  techStack: {
    frontEnd: ['React', 'Next.js', 'Apollo Client', 'Stripe Checkout'],
    backEnd: ['Node.js', 'Stripe', 'GraphQL', 'Apollo Server', 'Mongodb', 'Mongoose'],
  },
  githubLinks: [],
  liveSiteLink: { url: 'https://lingualink.uk/', label: 'Live Site' },
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-student-detail_mzbai1.png',
      caption: 'Student Dashboard',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-TeacherDashboard-min_wi3zg8.png',
      caption: 'Teacher Dashboard',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-CreateExercise-min-1024x472_htkhzs.png',
      caption: 'Exercise Creation',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/c_scale,w_1300/v1590749183/Lingualink/Screenshot_2020-05-29_at_11.45.17_jrpshx.png',
      caption: 'Exercise in progress',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202924/portfolio/lingualink/lingualink-SessionStats-min_ojbpgb.png',
      caption: 'Session Feedback',
    },
  ],
};

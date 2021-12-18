import { v4 as uuidv4 } from 'uuid';
import { IPortfolioProject } from '../../types/PortfolioProject';

export const myInternshipProject: IPortfolioProject = {
  id: uuidv4(),
  title: 'MyInternship',
  description:
    'A powerful internship management app designed for JinWen University of Science and Technology. Students and companies rank their top choices and the app automatically finds the ideal match based on those preferences.',
  techStack: {
    frontEnd: ['HTML', 'CSS3', 'React', 'Redux'],
    backEnd: ['Node.js', 'Express', 'Passport.js', 'Mongoose', 'Mongodb', 'i18next'],
  },
  githubLinks: [
    {
      url: 'https://github.com/chihweidavidliu/myinternship-server',
      label: 'Source Code (Server)',
    },
    {
      url: 'https://github.com/chihweidavidliu/myinternship-react-client',
      label: 'Source Code (Client)',
    },
  ],
  liveSiteLink: { url: 'https://myinternship.uk/', label: 'Live Site' },
  images: [
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202942/portfolio/myinternship/myinternship-student-choices_fqpmd5.png',
      caption:
        'Student Dashboard - Student can choose from a list of companies set by the administrator and rank which ones they wish to pick if they are accepted after interview',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-company-choices_fh20jf.png',
      caption:
        "Admnistrators create a list of available companies and internships and can update the companies' shortlist of candidates",
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202941/portfolio/myinternship/myinternship-admin-student-choices-view_rrmcw0.png',
      caption: 'Administrators can see all student choices',
    },
    {
      source:
        'https://res.cloudinary.com/dhccfu1un/image/upload/v1584202940/portfolio/myinternship/myinternship-sorter_jfzggg.png',
      caption: 'The app automatically assigns students to companies based on their respective priority lists',
    },
  ],
};

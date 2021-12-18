import { IImage } from './Image';
import { ILink } from './Link';

export interface IPortfolioProject {
  id: string;
  title: string;
  description: string;
  techStack: { frontEnd?: string[]; backEnd?: string[] };
  githubLinks: ILink[];
  liveSiteLink: ILink;
  images: IImage[];
}

import { Grid } from '@chakra-ui/layout';
import PageSection from '@components/PageSection';
import SkillCard from '@components/SkillCard';
import { SanitySkillsSection } from '@groq/fragments/SkillsSection.fragment';
import { ISkillCard } from '@interfaces/SkillCard';

// TODO: move this to Sanity
const skillCards: ISkillCard[] = [
  {
    title: 'Front End',
    categories: [
      {
        categoryName: 'Fundamentals',
        skills: ['HTML', 'CSS', 'Javascript', 'Typescript'],
      },
      {
        categoryName: 'Libraries/Frameworks',
        skills: ['React', 'Redux', 'Nextjs', 'Apollo Client', 'GatsbyJS', 'Styled Components', 'Enzyme'],
      },
    ],
  },
  {
    title: 'Back End',
    categories: [
      {
        categoryName: 'Servers',
        skills: ['Node', 'Express'],
      },
      {
        categoryName: 'Databases',
        skills: ['MongoDB', 'Mongoose', 'Postgres', 'MySQL', 'MS SQL Server', 'SQL'],
      },
      {
        categoryName: 'Authentication',
        skills: ['Cookies', 'JWT', 'OAuth2', 'OpenId Connect'],
      },
      {
        categoryName: 'APIs',
        skills: ['REST', 'GraphQL'],
      },
    ],
  },
  {
    title: 'Other',
    categories: [
      {
        categoryName: 'Testing',
        skills: ['Jest', 'Enzyme', 'Percy (Visual Regression)', 'Cypress (E2E)'],
      },
      {
        categoryName: 'Cloud',
        skills: ['AWS', 'Azure Cloud Services'],
      },
      {
        categoryName: 'Containers',
        skills: ['Docker', 'Kubernetes', 'Azure Container Registry'],
      },
      {
        categoryName: 'CI/CD',
        skills: ['CircleCi', 'GitHub Actions', 'Azure Devops'],
      },
    ],
  },
];

interface SkillsSectionProps {
  section: SanitySkillsSection;
}

const SkillsSection = ({ section }: SkillsSectionProps) => {
  return (
    <PageSection title={section?.title || 'Skills'} id={section._key}>
      {() => (
        <Grid gridGap="7" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" width="100%">
          {section.skillCards.map((skillCard) => {
            return <SkillCard key={skillCard.title} skillCard={skillCard} />;
          })}
        </Grid>
      )}
    </PageSection>
  );
};

export default SkillsSection;

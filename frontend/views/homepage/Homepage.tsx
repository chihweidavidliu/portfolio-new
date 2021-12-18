import { Fragment } from 'react';
import Head from 'next/head';
import { Box, Divider } from '@chakra-ui/react';
import ProjectsSection from './ProjectsSection';
import TimelineSection from './TimelineSection';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import { SanityHomepageSection } from '@groq/homepage';
import HomepageSection from './HomepageSection';

interface HomepageProps {
  sections: SanityHomepageSection[];
}

export const Homepage = ({ sections }: HomepageProps) => {
  return (
    <>
      <Head>
        <title>David Liu</title>
        <meta name="description" content="David Liu Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        {sections.map((section, index) => {
          const isLast = index === sections.length - 1;
          return (
            <Fragment key={section._key}>
              <HomepageSection section={section} />
              {!isLast && <Divider />}
            </Fragment>
          );
        })}
        <AboutSection />
        <Divider />
        <Divider />
        <ProjectsSection />
        <Divider />
        <TimelineSection collapseBeforeYear={2018} />
        <Divider />
        <ContactSection />
      </Box>
    </>
  );
};

export default Homepage;

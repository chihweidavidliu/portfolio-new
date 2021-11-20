import Head from 'next/head';
import { Box, Divider } from '@chakra-ui/react';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import TimelineSection from './TimelineSection';

export const Homepage = () => {
  return (
    <>
      <Head>
        <title>David Liu</title>
        <meta name="description" content="David Liu Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <TimelineSection collapseBeforeYear={2018} />
      </Box>
    </>
  );
};

export default Homepage;

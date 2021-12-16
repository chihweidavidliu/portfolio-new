import Head from 'next/head';
import { Box, Divider } from '@chakra-ui/react';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import TimelineSection from './TimelineSection';
import Hero from './Hero';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';

export const Homepage = () => {
  return (
    <>
      <Head>
        <title>David Liu</title>
        <meta name="description" content="David Liu Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Hero />
        <AboutSection />
        <Divider />
        <SkillsSection />
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

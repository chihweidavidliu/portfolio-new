import Head from 'next/head'
import { Box, Divider } from '@chakra-ui/react'
import PageSection from '../../components/PageSection'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'

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

        <PageSection title="Work Experience">Hello</PageSection>
      </Box>
    </>
  )
}

export default Homepage

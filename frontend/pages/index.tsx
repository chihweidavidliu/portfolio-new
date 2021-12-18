import { HomepageFetcher, SanityHomepageSection } from '@groq/homepage';
import type { GetStaticProps, NextPage } from 'next';
import { getClient } from 'sanity';
import Homepage from '../views/homepage';

interface Homeprops {
  sections: SanityHomepageSection[];
}

const Home: NextPage<Homeprops> = ({ sections }) => {
  console.log('sections', sections);
  return <Homepage />;
};

export const getStaticProps: GetStaticProps<Homeprops> = async ({ preview = false }) => {
  const client = getClient(preview);
  const fetcher = new HomepageFetcher({ client });
  const homepageData = await fetcher.fetch();

  return {
    props: {
      sections: homepageData.sections,
    },
  };
};

export default Home;

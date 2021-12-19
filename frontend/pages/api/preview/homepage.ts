import { previewClient } from 'sanity';
import { createPreviewRoute } from '@util/preview-api/createPreviewRoute';
import { HomepageFetcher, HomepageQuery } from '@groq/homepage';

const previewHomepageLandingHandler = createPreviewRoute<HomepageQuery>({
  documentFetchFunction: async (_req, locale) => {
    const fetcher = new HomepageFetcher({ client: previewClient, locale });
    return fetcher.fetch();
  },
  generateRedirectUrl: () => `/`,
});

export default previewHomepageLandingHandler;

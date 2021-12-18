import { SanityClient } from '@sanity/client';

export interface SanityFetcherConstructorArgs {
  client: SanityClient;
  locale?: string;
}

class SanityFetcher {
  readonly client: SanityClient;
  readonly locale?: string;

  constructor({ client, locale }: SanityFetcherConstructorArgs) {
    this.client = client;
    this.locale = locale;
  }
}

export default SanityFetcher;

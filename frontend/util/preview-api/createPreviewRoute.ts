import { NextApiRequest, NextApiResponse } from 'next';
import { validateSanityPreviewSecret } from './validateSanityPreviewSecret';
import { validateSanityPreviewQueryParams } from './validateSanityPreviewQueryParams';

interface Options<DocumentType> {
  documentFetchFunction: (req: NextApiRequest, locale?: string) => Promise<DocumentType | null>;
  generateRedirectUrl: (document: DocumentType, locale?: string) => string;
  requiredParams?: string[];
  fetchErrorMessage?: string;
}

export const createPreviewRoute = <DocumentType>({
  documentFetchFunction,
  generateRedirectUrl,
  requiredParams = [],
  fetchErrorMessage,
}: Options<DocumentType>) => {
  const previewHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS

    const locale = req.cookies.NEXT_LOCALE;
    validateSanityPreviewSecret(req, res);
    validateSanityPreviewQueryParams(req, res, requiredParams);

    // Check if the post with the given `slug` exists
    const document = await documentFetchFunction(req, locale);

    // If the slug doesn't exist prevent preview mode from being enabled
    if (!document) {
      return res.status(401).json({ message: fetchErrorMessage || 'Invalid slug' });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    res.writeHead(307, { Location: generateRedirectUrl(document, locale) });
    res.end();
  };

  return previewHandler;
};

import { NextApiRequest, NextApiResponse } from 'next';

export const validateSanityPreviewSecret = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== process.env.SANITY_PREVIEW_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

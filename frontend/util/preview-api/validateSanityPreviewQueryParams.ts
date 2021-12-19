import { NextApiRequest, NextApiResponse } from "next";

export const validateSanityPreviewQueryParams = (
  req: NextApiRequest,
  res: NextApiResponse,
  requiredParams: string[]
) => {
  for (let param of requiredParams) {
    if (!req.query[param]) {
      return res.status(401).json({ message: `Missing query param: ${param}` });
    }
  }
};

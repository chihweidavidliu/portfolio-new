const baseUrl = `${process.env.SANITY_STUDIO_PREVIEW_BASE_URL}/api/preview`;
const token = process.env.SANITY_STUDIO_PREVIEW_TOKEN;

export default function resolveProductionUrl(document) {
  switch (document._type) {
    case "homepage":
      return `${baseUrl}/homepage?secret=${token}`;
    default:
      break;
  }
}

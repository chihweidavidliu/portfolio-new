export interface SanityImage {
  _key?: string;
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };

  crop?: {
    _type: string;
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot?: {
    _type: string;
    height: number;
    width: number;
    x: number;
    y: number;
  };
}

export interface SanityImageWithCaption extends SanityImage {
  metadata: {
    caption: string;
  };
}

export interface SanityHeroImage extends SanityImage {
  metadata: {
    caption: string;
  };
}

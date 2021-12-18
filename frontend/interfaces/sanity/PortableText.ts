// Placeholder type

export interface BlockChild {
  _type: string;
  _key: string;
  text: string;
  marks: string[];
}

export interface MarkDef {
  _type: string;
  _key: string;
  href: string;
  [index: string]: string;
}

export interface PortableTextBlock {
  _type: string;
  _key: string;
  style: string;
  children: BlockChild[];
  markDefs: MarkDef[];
}

export type SanityPortableText = PortableTextBlock[];

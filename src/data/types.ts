export type PreviewKind = "iframe" | "react" | "code" | "none";
export type ItemKind = "code" | "link";

export interface CodeFile {
  path: string;
  language: string;
  content: string;
}

export interface ItemFileRef {
  path: string;
  language: string;
}

export interface Item {
  id: string;
  name: string;
  nameZh: string;
  sourceId: string;
  sourceName: string;
  sourceUrl: string;
  originalUrl: string;
  author: string;
  repo: string;
  license: string;
  licenseUrl: string;
  copyright: string;
  category: string;
  tags: string[];
  description: string;
  kind: ItemKind;
  preview: PreviewKind;
  iframeSrc: string;
  reactPreview: string;
  iframeHeight: number;
  files: ItemFileRef[];
  hasPrompt: boolean;
  install: string;
  notice: string;
}

export interface ItemSource {
  files: CodeFile[];
  prompt: string;
}

export interface SourceRecord {
  id: string;
  name: string;
  url: string;
  repo: string;
  license: string;
  licenseUrl: string;
  author: string;
  included: string;
  excluded: string;
  why: string;
}

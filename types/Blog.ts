export type BlogMetaData = {
  title: string;
  author: Author;
  publishedOn: Date | string;
};

export type Author = {
  name: string;
  twitter: string;
  twitterLink: string;
};

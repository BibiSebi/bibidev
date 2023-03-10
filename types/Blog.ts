export type BlogMetaData = {
  title: string;
  author: Author;
};

type Author = {
  name: string;
  twitter: string;
  twitterLink: string;
};

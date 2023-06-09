import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: './blogs/**/*.mdx',
  contentType: 'mdx',

  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'Short description of the blog',
      required: true,
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      description: 'Topics of the blog',
      required: false,
      default: [],
    },
  },

  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    url: {
      type: 'string',
      resolve: (doc) =>
        `blog/${doc._raw.flattenedPath.split('/').slice(1).join('/')}`,
    },
  },
}));

const Resource = defineDocumentType(() => ({
  name: 'Resource',
  filePathPattern: './resources/**/*.mdx',
  contentType: 'mdx',
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Blog, Resource],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-light' }]],
  },
});

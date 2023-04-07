import { format, parseISO } from 'date-fns';
import { Blog } from 'contentlayer/generated';

type BlogCardProps = {
  blog: Blog;
};
type BlogCardFunc = (props: BlogCardProps) => JSX.Element;

const BlogCard: BlogCardFunc = ({ blog }) => {
  return (
    <a className={'flex flex-col rounded border p-4'} href={blog.url}>
      <span>{blog.title}</span>
      <time dateTime={blog.date}>
        {format(parseISO(blog.date), 'dd/MM/yyy')}
      </time>
      <span>{blog.description}</span>
    </a>
  );
};

export default BlogCard;

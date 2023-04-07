import { format } from 'date-fns';
import { Blog } from 'contentlayer/generated';
import Tags from '@/components/Tags';
import { CalendarIcon } from '@heroicons/react/20/solid';

type BlogCardProps = {
  blog: Blog;
};
type BlogCardFunc = (props: BlogCardProps) => JSX.Element;

const BlogCard: BlogCardFunc = ({ blog }) => {
  return (
    <section className={'flex flex-1 flex-col rounded-xl border p-4'}>
      <h2 className="text-xl">{blog.title}</h2>
      <span className="flex">
        <div className="flex gap-0.5">
          <CalendarIcon width="24px" />
          <time dateTime={blog.date}>
            {format(new Date(blog.date), 'MMMM dd, yyyy')}
          </time>
        </div>
      </span>

      {blog.tags && <Tags tags={blog.tags} />}
      <span>{blog.description}</span>

      <a
        className="flex flex-1 items-end justify-end font-bold text-pink-500"
        href={blog.url}
        aria-label={`Read more about ${blog.title}`}
      >
        Read more
      </a>
    </section>
  );
};

export default BlogCard;

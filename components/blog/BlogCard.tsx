import { CalendarIcon } from '@heroicons/react/20/solid';
import { UsersIcon } from '@heroicons/react/20/solid';
import { Blog } from 'contentlayer/generated';
import { format } from 'date-fns';
import Tags from '@/components/Tags';

type BlogCardProps = {
  blog: Blog;
};
type BlogCardFunc = (props: BlogCardProps) => JSX.Element;

const BlogCard: BlogCardFunc = ({ blog }) => {
  return (
    <a
      className='relative flex flex-1 rounded-md p-4 hover:bg-gray-800 hover:bg-opacity-5'
      href={blog.url}
      aria-label={`Read more about ${blog.title}`}
    >
      <section className={'flex flex-1 flex-col gap-1.5'}>
        <div className='flex flex-wrap gap-2'>
          <h2 className='text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
            {blog.title}
          </h2>
          <Tags tags={blog.tags} />
        </div>

        <div className='flex flex-1 items-end gap-0.5 text-xs'>
          <CalendarIcon width='1rem' />
          <time dateTime={blog.date}>
            {format(new Date(blog.date), 'MMMM dd, yyyy')}
          </time>
          |
          <UsersIcon width='1rem' />
          <span>Bibiana Sebestianova</span>
        </div>

        <span>{blog.description}</span>

        <span className='link-secondary link'>Read more</span>
      </section>
    </a>
  );
};

export default BlogCard;

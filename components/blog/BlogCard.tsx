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
      className='relative flex flex-1 rounded-md border border-transparent p-5  hover:border-pink-500  hover:shadow-lg hover:shadow-pink-500 hover:drop-shadow-2xl'
      href={blog.url}
      aria-label={`Read more about ${blog.title}`}
    >
      <section className={'flex flex-1 flex-col gap-1.5'}>
        <h2 className='text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
          {blog.title}
        </h2>
        <span>{blog.description}</span>

        <div className='flex flex-1 flex-col gap-5'>
          <div className=' flex flex-1 items-end gap-0.5 text-xs font-medium text-gray-400'>
            <CalendarIcon width='1rem' />
            <time dateTime={blog.date}>
              {format(new Date(blog.date), 'MMMM dd, yyyy')}
            </time>
          </div>
          {blog.tags.length > 0 && (
            <div className='flex flex-wrap gap-2'>
              <Tags tags={blog.tags} />
            </div>
          )}
        </div>
      </section>
    </a>
  );
};

export default BlogCard;

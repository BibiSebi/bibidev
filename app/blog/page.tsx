import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { parseISO, format } from 'date-fns';

export default function Page() {
  if (!allBlogs || allBlogs.length <= 0) {
    notFound();
  }
  return (
    <div>
      {allBlogs.map((blog, idx) => (
        <a
          className={'flex flex-col rounded border p-4'}
          key={idx}
          href={blog.url}
        >
          <span>{blog.title}</span>
          <time dateTime={blog.date}>
            {format(parseISO(blog.date), 'dd/MM/yyy')}
          </time>
          <span>{blog.description}</span>
        </a>
      ))}
    </div>
  );
}

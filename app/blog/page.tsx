import { allBlogs, Blog } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { parseISO, format } from 'date-fns';
import BlogCard from '@/components/blog/BlogCard';
import BlogCardList from '@/components/blog/BlogCardList';

export default function Page() {
  if (!allBlogs || allBlogs.length <= 0) {
    notFound();
  }

  const sortBlogsByDate = (blogs: Blog[]) => {
    return blogs.sort((a, b) => (a.date > b.date ? -1 : 1));
  };

  return (
    <div>
      <BlogCardList allBlogs={sortBlogsByDate(allBlogs)} />
    </div>
  );
}

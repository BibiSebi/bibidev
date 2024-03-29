import BlogCardList from '@/components/blog/BlogCardList';
import { Blog, allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Bibidev | Blog',
};

export default function Page() {
  if (!allBlogs || allBlogs.length <= 0) {
    notFound();
  }

  const sortBlogsByDate = (blogs: Blog[]) => {
    return blogs.sort((a, b) => (a.date > b.date ? -1 : 1));
  };

  return (
    <div className='pl-8 pr-8 pt-12 md:pl-36 md:pr-36'>
      <div className='mb-8'>
        <h1 className='mb-2 text-4xl font-semibold'>
          Welcome to my blog page 👋
        </h1>
        <p>
          Follow me on my journey as a Fullstack Dev. In the following blog
          posts I will share my lessons learned, deep-dive into different
          topics, technical as well as personal. If you have any questions or
          comments feel free to reach out to me personally via GitHub or
          LinkedIn. Enjoy!
        </p>
      </div>
      <BlogCardList allBlogs={sortBlogsByDate(allBlogs)} />
    </div>
  );
}

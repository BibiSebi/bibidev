import BlogCard from '@/components/blog/BlogCard';
import { Blog } from 'contentlayer/generated';

type BlogCardListProps = {
  allBlogs: Blog[];
};
type BlogCardListFunc = (props: BlogCardListProps) => JSX.Element;
const BlogCardList: BlogCardListFunc = ({ allBlogs }) => {
  return (
    <ol className='gap-2 border-gray-100  p-2  '>
      {allBlogs.map((blog, idx) => (
        <li className='flex flex-1' key={`blog-${idx}-id`}>
          <BlogCard blog={blog} />
        </li>
      ))}
    </ol>
  );
};

export default BlogCardList;

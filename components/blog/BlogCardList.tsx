import { Blog } from 'contentlayer/generated';
import BlogCard from '@/components/blog/BlogCard';

type BlogCardListProps = {
  allBlogs: Blog[];
};
type BlogCardListFunc = (props: BlogCardListProps) => JSX.Element;
const BlogCardList: BlogCardListFunc = ({ allBlogs }) => {
  return (
    <ol className="grid auto-cols-auto grid-cols-1 ">
      {allBlogs.map((blog, idx) => (
        <li className="flex" key={idx}>
          <BlogCard blog={blog} />
        </li>
      ))}
    </ol>
  );
};

export default BlogCardList;

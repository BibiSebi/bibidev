import BlogCard from "@/components/blog/BlogCard";
import { Blog } from "contentlayer/generated";

type BlogCardListProps = {
	allBlogs: Blog[];
};
type BlogCardListFunc = (props: BlogCardListProps) => JSX.Element;
const BlogCardList: BlogCardListFunc = ({ allBlogs }) => {
	return (
		<ol className="grid auto-cols-auto grid-cols-1 ">
			{allBlogs.map((blog, idx) => (
				<li className="flex" key={`blog-${idx}-id`}>
					<BlogCard blog={blog} />
				</li>
			))}
		</ol>
	);
};

export default BlogCardList;

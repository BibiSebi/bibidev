import AuthorCard from '@/app/blog/_components/AuthorCard';
import { Author } from '@/types/Blog';

type BlogHeaderProps = { author: Author; publishedOn: Date };
type BlogHeaderFunc = (props: BlogHeaderProps) => JSX.Element;

const BlogHeader: BlogHeaderFunc = ({ author, publishedOn }) => {
  return (
    <div className="mt-6 flex flex-1 items-center">
      <div>
        <span>Published on: {publishedOn.toDateString()}</span>
      </div>
      <AuthorCard author={author} />
    </div>
  );
};

export default BlogHeader;

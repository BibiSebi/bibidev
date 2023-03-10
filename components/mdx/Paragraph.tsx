import { MDXFunc } from '@/mdx-components';

const Paragraph: MDXFunc = ({ children }) => {
  return <p className="mt-5 mb-5">{children}</p>;
};

export default Paragraph;

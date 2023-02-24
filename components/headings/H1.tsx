import { MDXFunc } from '@/mdx-components';

const H1: MDXFunc = ({ children }) => {
  return (
    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
      {children}
    </h1>
  );
};

export default H1;

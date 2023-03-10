import { MDXFunc } from '@/mdx-components';

const H2: MDXFunc = ({ children }) => {
  return (
    <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-2xl">
      {children}
    </h2>
  );
};

export default H2;

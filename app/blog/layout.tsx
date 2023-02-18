import { ReactNode } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={'relative px-6 text-gray-800 lg:px-8'}>
      <div className="flex px-4 pt-8 pb-10 lg:px-8">
        <div className="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
          <a
            className="group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            href="/blog"
          >
            <ChevronLeftIcon className="h-6" />
            Go back
          </a>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Layout;

import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { ReactNode } from 'react';

type LayoutFun = (props: { children: ReactNode }) => JSX.Element;

const Layout: LayoutFun = ({ children }) => {
  return (
    <div className={'relative px-6 text-gray-800 lg:px-8'}>
      <main>
        <div className='prose-slate prose'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;

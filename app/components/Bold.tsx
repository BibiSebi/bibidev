import { ReactNode } from 'react';

export const Bold = ({ children }: { children: ReactNode }) => {
  return (
    <b className='rounded bg-purple-400 px-1 py-0.5 font-medium text-white'>
      {children}
    </b>
  );
};

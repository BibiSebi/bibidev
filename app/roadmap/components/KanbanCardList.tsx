import React from 'react';

type KanbanCardListComponent = (props: {
  children: React.ReactNode;
}) => JSX.Element;
const KanbanCardList: KanbanCardListComponent = ({ children }) => {
  return (
    <section className='flex flex-shrink-0 flex-col'>
      <h2 className='px-6 py-2 font-semibold'>
        Backlog
        <span className='bg-opacity-3 ml-1 rounded bg-white p-0.5 text-sm text-indigo-500'>
          6
        </span>
      </h2>
      <ul className='flex flex-col gap-4 overflow-auto px-4 pb-8'>
        {children}
      </ul>
    </section>
  );
};

export default KanbanCardList;

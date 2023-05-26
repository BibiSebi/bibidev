import React from 'react';

type KanbanBoardComponent = (props: {
  children: React.ReactNode;
}) => JSX.Element;
const KanbanBoard: KanbanBoardComponent = ({ children }) => {
  return (
    <div className='flex grid grid-cols-1 overflow-auto sm:grid-cols-2 md:grid-cols-3 '>
      {children}
    </div>
  );
};

export default KanbanBoard;

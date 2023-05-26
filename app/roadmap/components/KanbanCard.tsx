import React from 'react';
import { format } from 'date-fns';

type KanbanCardComponent = (props: {
  title: string;
  id: number;
  createdAt: Date;
}) => JSX.Element;
const KanbanCard: KanbanCardComponent = ({ title, id, createdAt }) => {
  return (
    <li className='flex flex-col items-start rounded-md  bg-white p-4 shadow-md drop-shadow-xl'>
      <span className='mb-2 flex h-6 items-center rounded-full bg-pink-100 px-3 text-xs font-semibold text-pink-500'>
        Design
      </span>
      <h3 className='font-medium'>{title} </h3>
      <div className='mt-3 flex items-center justify-end gap-1 text-xs font-medium text-gray-400'>
        <span className=' leading-none '>
          {format(new Date(createdAt), 'MMMM dd, yyyy')}
        </span>
        <span>{id}</span>
      </div>
    </li>
  );
};

export default KanbanCard;

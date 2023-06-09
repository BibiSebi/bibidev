import React from 'react';
import { format } from 'date-fns';
import { CalendarIcon } from '@heroicons/react/20/solid';
import { BookmarkIcon } from '@heroicons/react/24/outline';

type KanbanCardComponent = (props: {
  title: string;
  description?: string;
  id: number;
  createdAt: Date;
}) => JSX.Element;
const KanbanCard: KanbanCardComponent = ({
  title,
  description,
  id,
  createdAt,
}) => {
  return (
    <li className='flex flex-col items-start rounded-md  bg-white p-4 shadow-md drop-shadow-xl'>
      <h3 className='font-medium'>{title} </h3>
      {description && <p className='text-sm text-gray-500'>{description}</p>}
      <div className='mt-3 flex items-center justify-end gap-1 text-xs font-medium text-gray-400'>
        <CalendarIcon className='h-4 w-4' />
        <span className=' leading-none '>
          {format(new Date(createdAt), 'MMMM dd, yyyy')}
        </span>
        <BookmarkIcon className='h-4 w-4' />
        <span>{id}</span>
      </div>
    </li>
  );
};

export default KanbanCard;

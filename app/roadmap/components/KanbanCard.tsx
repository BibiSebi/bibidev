import React from 'react';

const KanbanCard = () => {
  return (
    <li className='flex flex-col items-start rounded-md  bg-white p-4 shadow-md drop-shadow-xl'>
      <span className='mb-2 flex h-6 items-center rounded-full bg-pink-100 px-3 text-xs font-semibold text-pink-500'>
        Design
      </span>
      <h3 className='font-medium'>
        Title of the task is supposed to be super long so I can test
      </h3>
      <div className='mt-3 flex items-center justify-end gap-1 text-xs font-medium text-gray-400'>
        <span className=' leading-none '>Dec 13th,2023</span>
        <span>BIB-123</span>
      </div>
    </li>
  );
};

export default KanbanCard;

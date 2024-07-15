import { CalendarIcon } from '@heroicons/react/20/solid';
import { format } from 'date-fns';

export const DateFromTo = ({ from, to }: { from: Date; to?: Date }) => {
  return (
    <div className='flex gap-1 text-xs'>
      <CalendarIcon width='1rem' />
      <time>{format(from, 'MMMM yyyy')}</time>-
      {to ? <time>{format(to, 'MMMM yyyy')}</time> : <span>present</span>}
    </div>
  );
};

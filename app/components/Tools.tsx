import { WrenchScrewdriverIcon } from '@heroicons/react/20/solid';

export const Tools = ({ tools }: { tools: string[] }) => {
  return (
    <div className='flex gap-1'>
      <WrenchScrewdriverIcon width='1rem' />
      <ul className='flex gap-0.5'>
        {tools.map((tool, idx) => {
          return (
            <li key={idx}>
              {tool} {idx !== tools.length - 1 && '|'}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

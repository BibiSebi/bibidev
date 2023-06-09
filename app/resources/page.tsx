import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { MDX } from '@/components/MDX';
import { allResources } from 'contentlayer/generated';

export default async function Page() {
  return (
    <div>
      <div className='flex px-4 pb-10 pt-8 lg:px-8'>
        <div className='group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900'>
          <a className=' group link flex' href='/blog'>
            <ChevronLeftIcon className='h-6' />
            Go back
          </a>
        </div>
      </div>
      {allResources.map((resource) => (
        <section key={resource._id} className='mx-auto max-w-3xl pb-8'>
          <MDX code={resource.body.code} />
        </section>
      ))}
    </div>
  );
}

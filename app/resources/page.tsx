import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { MDX } from '@/components/MDX';
import { allResources } from 'contentlayer/generated';

export default async function Page() {
  return (
    <>
      {allResources.map((resource) => (
        <section key={resource._id} className='mx-auto max-w-3xl pb-8'>
          <MDX code={resource.body.code} />
        </section>
      ))}
    </>
  );
}

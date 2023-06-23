import { MDX } from '@/components/MDX';
import { allResources } from 'contentlayer/generated';

export default async function Page() {
  return (
    <>
      {allResources
        .sort((a, b) => (a.order > b.order ? 1 : -1))
        .map((resource) => (
          <section key={resource._id} className='mx-auto max-w-3xl pb-8'>
            <MDX code={resource.body.code} />
          </section>
        ))}
    </>
  );
}

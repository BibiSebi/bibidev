import { MDX } from '@/components/MDX';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div>
      <div className='flex px-4 pb-10 pt-8 lg:px-8'>
        <div className='group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'>
          <a
            className='group flex text-sm font-semibold leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white'
            href='/blog'
          >
            <ChevronLeftIcon className='h-6' />
            Go back
          </a>
        </div>
      </div>
      <article className='mx-auto max-w-3xl pb-28'>
        <MDX code={blog.body.code} />
      </article>
    </div>
  );
}

import { MDX } from '@/components/MDX';
import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Blog',
    };
  }

  return {
    title: `Blog | ${blog.title}`,
    description: 'Test',
    openGraph: {
      type: 'website',
      url: 'https://bibidev.vercel.app/blog/values',
      title: `Blog | ${blog.title}`,
      description: 'Open graph test description',
      images: ['/logo.png'],
    },
    twitter: {
      card: 'summary',
    },
  };
}

export default function BlogPage({ params }: Props) {
  const slug = params?.slug;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

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
      <article className='mx-auto max-w-3xl pb-28'>
        <MDX code={blog.body.code} />
      </article>
    </div>
  );
}

const getBlogBySlug = (slug: string) =>
  allBlogs.find((blog) => blog.slug === slug);

import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDX } from '@/components/MDX';

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
      <article>
        <MDX code={blog.body.code} />
      </article>
    </div>
  );
}

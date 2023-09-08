import { useMDXComponent } from 'next-contentlayer/hooks';
import CodeBlock from '@/components/common/CodeBlock';

export const components = {
  h1: ({ ...props }) => (
    <h1
      className='text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl'
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className='text-xl font-extrabold tracking-tight text-slate-900 md:text-2xl'
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      className='text-lg font-bold tracking-tight text-slate-900 md:text-xl'
      {...props}
    />
  ),
  a: ({ ...props }) => (
    <a
      className='border-b border-b-blue-500  font-semibold text-black'
      {...props}
    />
  ),
  img: ({ ...props }) => (
    <img
      {...props}
      className='not-prose relative my-[2em] overflow-hidden rounded-lg  first:mt-0 last:mb-0'
    />
  ),
  p: ({ ...props }) => <p className='mb-5 mt-5' {...props} />,
  pre: ({ ...props }) => <CodeBlock {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote
      className='rounded border border-purple-600  px-4 py-0.5 italic'
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className='mdx'>
      <Component components={components} />
    </div>
  );
}

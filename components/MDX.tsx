import { useMDXComponent } from 'next-contentlayer/hooks';
import { Component } from 'mdx/types';

export const components = {
  h1: ({ ...props }) => (
    <h1
      className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-2xl"
      {...props}
    />
  ),
  a: ({ ...props }) => (
    <a
      className="border-b border-b-blue-500 font-semibold text-black"
      {...props}
    />
  ),
  img: ({ ...props }) => (
    <img
      {...props}
      className="not-prose relative my-[2em] overflow-hidden rounded-lg first:mt-0 last:mb-0"
    />
  ),
  p: ({ ...props }) => <p className="mt-5 mb-5" {...props} />,
  code: ({ ...props }) => (
    <code className="rounded border bg-zinc-300 bg-opacity-25 p-1" {...props} />
  )
};

interface MdxProps {
  code: string;
}

export function MDX({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}

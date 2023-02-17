// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
import { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';

function H1({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}

function H2({ children }: { children: ReactNode }) {
  return <h2>{children}</h2>;
}

export function useMDXComponents(components: MDXComponents) {
  return { h1: H1, h2: H2, ...components };
}

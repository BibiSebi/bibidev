import { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';
import Paragraph from '@/components/mdx/Paragraph';
import Image from '@/components/mdx/Image';
import Link from '@/components/mdx/Link';
import H2 from '@/components/mdx/headings/H2';
import H1 from '@/components/mdx/headings/H1';

type Props = { children: ReactNode };
export type MDXFunc<A = {}> = (props: A & Props) => JSX.Element;

export function useMDXComponents(components: MDXComponents) {
  return { h1: H1, h2: H2, a: Link, img: Image, p: Paragraph, ...components };
}

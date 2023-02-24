import { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';
import Paragraph from '@/components/Paragraph';
import Image from '@/components/Image';
import Link from '@/components/Link';
import H2 from '@/components/headings/H2';
import H1 from '@/components/headings/H1';

type Props = { children: ReactNode };
export type MDXFunc<A = {}> = (props: A & Props) => JSX.Element;

export function useMDXComponents(components: MDXComponents) {
  return { h1: H1, h2: H2, a: Link, img: Image, p: Paragraph, ...components };
}

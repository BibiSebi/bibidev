// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
import { MDXComponents } from 'mdx/types';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

type MDXFunc<A = {}> = (props: A & Props) => JSX.Element;

const H1: MDXFunc = ({ children }) => {
  return (
    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl">
      {children}
    </h1>
  );
};

const H2: MDXFunc = ({ children }) => {
  return (
    <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-2xl">
      {children}
    </h2>
  );
};
type Href = { href: string };

const Link: MDXFunc<Href> = (props) => {
  return (
    <a
      className="border-b border-b-blue-500 font-semibold text-black"
      href={props.href}
    >
      {props.children}
    </a>
  );
};

const Image: MDXFunc<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="not-prose relative my-[2em] overflow-hidden rounded-lg first:mt-0 last:mb-0"
    />
  );
};

const Paragraph: MDXFunc = ({ children }) => {
  return <p className="mt-5 mb-5">{children}</p>;
};

export function useMDXComponents(components: MDXComponents) {
  return { h1: H1, h2: H2, a: Link, img: Image, p: Paragraph, ...components };
}

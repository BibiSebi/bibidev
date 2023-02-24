import { MDXFunc } from '@/mdx-components';

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

export default Link;

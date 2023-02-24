import { MDXFunc } from '@/mdx-components';

const Image: MDXFunc<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="not-prose relative my-[2em] overflow-hidden rounded-lg first:mt-0 last:mb-0"
    />
  );
};

export default Image;

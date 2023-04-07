import { Blog } from 'contentlayer/generated';

type TagsProps = {
  tags: string[];
};

type TagsFunc = (props: TagsProps) => JSX.Element | null;
const Tags: TagsFunc = ({ tags }) => {
  if (tags.length <= 0) {
    return null;
  }

  return (
    <ul className="flex gap-1">
      {tags.map((tag, idx) => (
        <li className="rounded-md bg-fuchsia-300 pl-1 pr-1" key={idx}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;

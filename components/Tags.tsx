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
    <ul className='flex gap-1'>
      {tags.map((tag, idx) => (
        <li
          className='rounded-full bg-purple-800 bg-opacity-20 px-1.5 py-1 text-xs font-medium text-gray-800'
          key={`tag-${idx}-id`}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;

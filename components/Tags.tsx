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
          className='bg-opacity-20 text-xs font-medium text-gray-500'
          key={`tag-${idx}-id`}
        >
          #{tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;

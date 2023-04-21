import { Author } from '@/types/Blog';

type AuthorCardProps = {
  author: Author;
};

type AuthorCardFunc = (props: AuthorCardProps) => JSX.Element;

const AuthorCard: AuthorCardFunc = ({ author }) => {
  return (
    <div className='text-sm leading-4'>
      <span className='text-slate-900'>{author.name}</span>
      <div className='mt-1'>
        <a
          className='text-sky-500 hover:text-sky-600'
          href={author.twitterLink}
        >
          {author.twitter}
        </a>
      </div>
    </div>
  );
};

export default AuthorCard;

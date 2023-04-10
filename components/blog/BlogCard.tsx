import {format} from 'date-fns';
import {Blog} from 'contentlayer/generated';
import {CalendarIcon} from '@heroicons/react/20/solid';
import {UsersIcon} from "@heroicons/react/20/solid";

type BlogCardProps = {
    blog: Blog;
};
type BlogCardFunc = (props: BlogCardProps) => JSX.Element;

const BlogCard: BlogCardFunc = ({blog}) => {
    return (
        <a
            className='flex flex-1 rounded-md p-4 relative hover:bg-gray-100'
            href={blog.url}
            aria-label={`Read more about ${blog.title}`}
        >
        <section className={'flex flex-1 flex-col gap-1.5'}>
                <h2 className="text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">{blog.title}</h2>
            <div className="flex gap-0.5 items-end flex-1 text-xs">

                <CalendarIcon width="1rem"/>
                <time dateTime={blog.date}>
                    {format(new Date(blog.date), 'MMMM dd, yyyy')}
                </time>


                |
                <UsersIcon width='1rem'/>
                <span>Bibiana Sebestianova</span>


            </div>


                <span>{blog.description}</span>

            <span className='flex items-center font-semibold text-purple-800'>Read more</span>


        </section>
        </a>
    );
};

export default BlogCard;

import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHub';
import TwitterIcon from '@/components/icons/TwitterIcon';

export const metadata = {
  title: 'Bibidev | About',
};
export default function Page() {
  return (
    <main className='relative flex flex-col gap-2 px-14 py-14 text-gray-800 lg:px-64'>
      <section className='flex flex-col gap-2'>
        <div
          className='flex items-end gap-4
       '
        >
          <h1 className='text-4xl font-semibold'>BibiSebi</h1>
          <div className='flex gap-2 pb-1.5'>
            <a
              className='link'
              aria-label='GitHub'
              href='https://github.com/BibiSebi'
            >
              <GitHubIcon />
            </a>
            <a
              className='link'
              aria-label='LinkedIn'
              href='https://www.linkedin.com/in/bibianasebestianova/'
            >
              <LinkedInIcon />
            </a>
            <a
              className='link'
              aria-label='Twitter'
              href='https://twitter.com/BibianaSebi'
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
        <p>Hey,</p>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Projects</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <h3 className='text-xl font-semibold'>
              <a
                href='https://github.com/BibiSebi/bibidev'
                className='border-b border-b-blue-500 font-semibold text-black'
              >
                BibiDev
              </a>
            </h3>
            <p className='text-small text-gray-500'>
              The BibiDev website was established as a platform for me to share
              the knowledge I have gained throughout my career, as well as
              insights from my personal life. This project incorporates Next.js,
              Tailwind CSS, Contentlayer, and draws inspiration from the
              shadcn/ui library for certain components.
            </p>
          </li>

          <li>
            <h3 className='text-xl font-semibold'>
              <a
                href='https://github.com/BibiSebi/would-you-rather'
                className='border-b border-b-blue-500 font-semibold text-black'
              >
                Would You Rather
              </a>
            </h3>
            <p className='text-small text-gray-500'>
              Two years ago, I developed a project called Would You Rather while
              learning React. This project is a straightforward game featuring
              questions where users can choose between two options, indicating
              their preference.
            </p>
          </li>
        </ul>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Posts</h2>
        <span>In Progress 🏗️</span>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Data Usage</h2>
        <p>
          I am not collecting or using any of your data directly trough my
          website. If you find any cookies after visiting my blog, those will
          most likely be third-party cookies such as form YouTube.
        </p>
      </section>
    </main>
  );
}

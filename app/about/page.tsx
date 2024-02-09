import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHub';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { CalendarIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid';
import { format } from 'date-fns';

export const metadata = {
  title: 'Bibidev | About',
};
export default function Page() {
  return (
    <main className='relative flex flex-col px-14 py-14 text-gray-800 md:px-32 lg:px-64'>
      <section className='flex flex-col items-center gap-2'>
        <div
          className='flex flex-col items-end items-center gap-2
       '
        >
          <div className='relative'>
            <img
              alt='profile picture'
              src='https://avatars.githubusercontent.com/u/17590227'
              className=' h-32 w-32 rounded-full bg-pink-400'
            ></img>
            <div className='absolute bottom-3 right-2 flex h-6 w-6 items-center  rounded-full bg-white px-1 shadow-lg'>
              👩🏼‍💻
            </div>
          </div>

          <h1 className='text-4xl font-semibold'>BibiDev</h1>
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
          <p className='text-center md:px-24'>
            Passionate Full Stack Developer dedicated to crafting clean code and
            prioritizing accessibility in every digital solution.{' '}
          </p>
        </div>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />
      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Work Experience</h2>
        <ul className='flex flex-col gap-1.5'>
          <li>
            <h3 className='text-xl font-semibold'>
              Fullstack Engineer at Storyblok
            </h3>
            <div className='mb-2 flex flex-1 items-end gap-1 text-xs '>
              <CalendarIcon width='1rem' />
              <time>{format(new Date('2021-03-01'), 'MMMM yyyy')}</time>-
              <span>present</span>
              <WrenchScrewdriverIcon width='1rem' />
              <ul className='flex gap-0.5'>
                <li>Typescript</li>| <li>Javascript</li>|<li>React</li>|
                <li>Next</li>|<li>Nuxt</li>|<li>Node</li>
              </ul>
            </div>
            <ul className='list-inside list-disc'>
              <li>
                Developed high-demand integrations, resulting in the acquisition
                of new customers
              </li>
              <li>Provided support to customers in solution development</li>
              <li>
                Contributed to the creation of the{' '}
                <a
                  className='border-b border-b-blue-500 font-semibold text-black'
                  href='https://github.com/storyblok/field-plugin'
                >
                  Field Plugin SDK
                </a>
              </li>
              <li>
                Contributed to creation of plugin starters to offer developers a
                straightforward method for creating plugins
              </li>
              <li>
                Orchestrated task management and delivery, including coaching
                and enforcement of Scrum practices
              </li>
              <li>Scoped features and delegated tasks within the team</li>
              <li>
                Facilitated communication and collaboration across multiple
                teams
              </li>
            </ul>
          </li>
          <li>
            <h3 className='mt-2 text-xl font-semibold'>
              User Experience Engineer at Accenture
            </h3>
            <div className='mb-2 flex flex-1 items-end gap-1 text-xs'>
              <CalendarIcon width='1rem' />
              <time>{format(new Date('2020-01-01'), 'MMMM yyyy')}</time>-
              <time>{format(new Date('2022-03-01'), 'MMMM yyyy')}</time>
              <WrenchScrewdriverIcon width='1rem' />
              <ul className='flex gap-0.5'>
                <li>Typescript</li>|<li>Javascript</li>|<li>React</li>|
                <li>Angular</li>|<li>Nest.js</li>|<li>Node</li>
              </ul>
            </div>
            <ul className='list-inside list-disc'>
              <li>
                Managed frontend and backend task coordination to streamline
                delivery timelines
              </li>
              <li>
                Facilitated distribution of Accessibility knowledge through
                presentations and workshops
              </li>
              <li>
                Established and communicated Accessibility requirements with
                clients
              </li>
              <li>Assisted in the onboarding process of new team members</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className='flex hidden flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Education</h2>
        <ul>
          <li>
            <h3 className='text-xl font-semibold'>HTL Spengergasse</h3>
            <div className='mb-2 flex flex-1 items-end gap-0.5 text-xs'>
              <CalendarIcon width='1rem' />
              <time>{format(new Date('2014-09-01'), 'MMMM yyyy')}</time>-
              <time>{format(new Date('2019-07-01'), 'MMMM yyyy')}</time>
            </div>

            <p>
              I was enrolled in a bilingual class that not only emphasized
              informatics but also focused on project management and accounting.
              During my final year at school, I completed my diploma thesis,
              exploring the applications of prediction, machine learning, and AI
              across various fields.
            </p>
          </li>
        </ul>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Personal Projects</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <h3 className='text-xl font-semibold'>
              <a
                href='https://github.com/BibiSebi/bibidev'
                className=' border-b border-b-blue-500 font-semibold text-black'
              >
                BibiDev
              </a>
            </h3>
            <p className='text-small '>
              The BibiDev website was established as a platform for me to share
              the knowledge I have gained throughout my career, as well as
              insights from my personal life. This project incorporates Next.js,
              Tailwind CSS, Contentlayer, and draws inspiration from the{' '}
              <a
                className='border-b border-b-blue-500 font-semibold text-black'
                href='https://ui.shadcn.com/'
              >
                shadcn/ui
              </a>{' '}
              library for certain components.
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
            <p className='text-small'>
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
        <h2 className='text-2xl font-semibold'>Public Speaking</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <h3 className='text-xl font-semibold'>
              <a
                href='https://www.storyblok.com/ev/headless-in-times-of-accessibility'
                className='border-b border-b-blue-500 font-semibold text-black'
              >
                Webinar: Headless in times of Accessibility
              </a>
            </h3>
            <p className='text-small'>
              An initiative to educate people on how to integrate accessibility
              into their day to day life. The webinar focused on different
              project roles such as designers, developers and content creators
              explaining what responsibility they carry in creating and
              accessible web experience.
            </p>
          </li>

          <li>
            <h3 className='text-xl font-semibold'>
              <a
                href='https://www.meetup.com/vuejsvienna/events/290494487/'
                className='border-b border-b-blue-500 font-semibold text-black'
              >
                Vue.js Vienna: Let me change your Vue on Accessibility
              </a>
            </h3>
            <p className='text-small'>
              An introduction to what Accessibility is, including examples with
              Vue but also tools every developer can use on a daily basis to
              catch accessibility issues while developing.
            </p>
          </li>
        </ul>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2 print:hidden'>
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

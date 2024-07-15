import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHub';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { Link } from '@/app/components/Link';
import { DateFromTo } from '@/app/components/DateFromTo';
import { Tools } from '@/app/components/Tools';

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
            <div className='absolute bottom-3 right-2 flex h-6 w-6 items-center rounded-full bg-white px-1 '>
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
            Fullstack engineer passionate about clean coding practices and
            committed to enhancing both developer and user experiences through
            innovative solutions.
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
              <DateFromTo from={new Date('2021-03-01')} />
              <Tools
                tools={[
                  'Typescript',
                  'Javascript',
                  'React',
                  'Next',
                  'Vue 3',
                  'Nuxt 3',
                  'Node',
                ]}
              />
            </div>
            <ul className='list-inside list-disc'>
              <li>
                <b>Lead multiple high-demand integration projects</b>, resulting
                in the acquisition of new enterprise customers.
              </li>
              <li>
                Provided <b>technical solution engineering</b> to several
                technical partners resulting in new partnerships.
              </li>
              <li>
                Contributed to several open source projects by introducing{' '}
                <b>developer experience improvements</b> around the integration
                development and deployment process.
                <ul className='list-inside pl-6'>
                  <li>
                    <Link href='https://github.com/storyblok/field-plugin'>
                      Field Plugin SDK
                    </Link>
                  </li>
                  <li>
                    <Link href=''>Plugin Starters</Link>
                  </li>
                  <li>
                    <Link href=''>Plugin Authentication Library</Link>
                  </li>
                </ul>
              </li>
              <li>
                Lead <b>task management, requirements engineering </b> and
                delivery for the team of 3 people, including coaching and
                enforcement of Scrum practices
              </li>
            </ul>
          </li>
          <li>
            <h3 className='mt-2 text-xl font-semibold'>
              User Experience Engineer at Accenture
            </h3>
            <div className='mb-2 flex flex-1 items-end gap-1 text-xs'>
              <DateFromTo
                from={new Date('2020-01-01')}
                to={new Date('2022-03-01')}
              />

              <Tools
                tools={[
                  'Typescript',
                  'Javascript',
                  'React',
                  'Angular',
                  'Nest.js',
                  'Node',
                ]}
              />
            </div>
            <ul className='list-inside list-disc'>
              <li>
                Lead frontend and backend task coordination to streamline
                delivery timelines
              </li>
              <li>
                <b>Facilitated distribution of Accessibility knowledge</b>{' '}
                through presentations and workshops
              </li>
              <li>
                Established and communicated Accessibility requirements with
                clients
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Public Speaking</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <h3 className='text-xl font-semibold'>
              <Link href='https://www.storyblok.com/ev/headless-in-times-of-accessibility'>
                Webinar: Headless in times of Accessibility
              </Link>
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
              <Link href='https://www.meetup.com/vuejsvienna/events/290494487/'>
                Vue.js Vienna: Let me change your Vue on Accessibility
              </Link>
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

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Personal Projects</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <h3 className='text-xl font-semibold'>
              <Link href='https://github.com/BibiSebi/vercel-bisect'>
                Visual Vercel Bisect
              </Link>
            </h3>
            <p className='text-small '>
              An extension to{' '}
              <a href='https://vercel.com/docs/cli/bisect'>
                Vercel's bisect command
              </a>
              . This project was a fun idea with the purpose to improve the{' '}
              <b>user experience </b> by providing a visual representation of
              the deployments where the user could - in a gamified way - find
              out in which exact release a bug was introduced. Me and my project
              partner recreated the bisect logic from scratch by using the{' '}
              <b>binary search algorithm.</b>
            </p>
          </li>

          <li>
            {/*Add hackathon with laurenz*/}
            <h3 className='text-xl font-semibold'>
              <Link href='https://github.com/BibiSebi/bibidev'>BibiDev</Link>
            </h3>
            <p className='text-small '>
              The BibiDev website was established as a platform for me to share
              the knowledge I have gained throughout my career, as well as
              insights from my personal life. This project incorporates Next.js,
              Tailwind CSS, Contentlayer, and draws inspiration from the{' '}
              <Link href='https://ui.shadcn.com/'>shadcn/ui</Link> library for
              certain components.
            </p>
          </li>

          <li>
            <h3 className='text-xl font-semibold'>
              <Link href='https://github.com/BibiSebi/would-you-rather'>
                Would You Rather
              </Link>
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

      <section className='flex  hidden flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Education</h2>
        <ul>
          <li>
            <h3 className='text-xl font-semibold'>HTL Spengergasse</h3>
            <div className='mb-2 flex flex-1 flex-wrap items-end gap-0.5 text-xs'>
              <DateFromTo
                from={new Date('2014-09-01')}
                to={new Date('2019-07-01')}
              />

              <Tools
                tools={[
                  'Typescript',
                  'Angular',
                  'Java',
                  'Project Management',
                  'Accounting',
                ]}
              />
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

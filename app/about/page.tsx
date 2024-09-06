import LinkedInIcon from '@/components/icons/LinkedInIcon';
import GitHubIcon from '@/components/icons/GitHub';
import TwitterIcon from '@/components/icons/TwitterIcon';
import { Link } from '@/app/components/Link';
import { DateFromTo } from '@/app/components/DateFromTo';
import { Tools } from '@/app/components/Tools';
import {
  BriefcaseIcon,
  LanguageIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Bibidev | About',
};
export default function Page() {
  return (
    <main className='relative flex flex-col px-12 py-14 text-gray-800 md:px-14 lg:px-64'>
      <section className='flex flex-col items-center gap-2'>
        <div
          className='flex flex-col items-center  gap-2
       '
        >
          <div className='relative'>
            <img
              alt='profile picture'
              src='https://media.licdn.com/dms/image/v2/C4D03AQFea4va-Qt6Ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1658927929827?e=1730937600&v=beta&t=YYx4fmKmbYYdNDh8UKAPwCiYy0HJbKzyJfukMSZy4iM'
              className=' h-32 w-32 rounded-full bg-pink-400'
            />
          </div>

          <h1 className='text-4xl font-semibold'>Bibiana Sebestianova</h1>

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

          <Tools tools={['Typescript', 'React', 'Next', 'Node']} />

          <div className='flex gap-2'>
            <LanguageIcon title='Language Proficiency' className='h-6 w-6' />
            <ul className='flex gap-2'>
              <li> Slovak Native |</li>
              <li> German C2 |</li>
              <li> English C2</li>
            </ul>
            <MapPinIcon title='location' className='h-6 w-6' />
            <span>Vienna, Austria</span>
          </div>
          <p className='text-center md:px-24'>
            Senior Fullstack Engineer with 4+ years experience in leading
            international teams
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
              <DateFromTo from={new Date('2022-03-01')} />
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
                <b>
                  Led multiple high-demand integration projects with teams of 3
                  people
                </b>
                , resulting in the acquisition of new enterprise customers.
              </li>
              <li>
                <b>Designed solutions</b> for technical partners resulting in
                new partnerships and strategic integrations.
              </li>

              <li>
                Led{' '}
                <b>
                  task distribution and prioritization, requirements engineering{' '}
                </b>{' '}
                and delivery for the team of 3 people.
              </li>

              <li>
                Contributed to key open source projects by introducing{' '}
                <b>developer experience improvements</b> around integration
                development and deployment process:
              </li>
            </ul>

            <ul>
              <li>
                <Link href='https://github.com/storyblok/field-plugin'>
                  Field Plugin SDK
                </Link>
                <ul className='list-inside list-disc'>
                  <li>
                    I created a Vue.js composable helper and plugin starter
                    template that enables developers to easily communicate
                    between the plugin the{' '}
                    <a
                      className='link'
                      href='https://www.storyblok.com/docs/guide/essentials/visual-editor'
                    >
                      Visual Editor
                    </a>
                    .
                  </li>
                  <li>
                    I applied design patterns and clean coding practices to make
                    the code more readable and maintainable.
                  </li>
                  <li>
                    Continuously improved and integrated GitHub feedback from
                    users to improve the CLI workflow and experience.{' '}
                  </li>
                </ul>
              </li>
              <li>
                <Link href='https://github.com/storyblok/space-tool-plugins'>
                  Plugin Starters
                </Link>
                <ul className='list-inside list-disc'>
                  <li>
                    I created a starter project for{' '}
                    <a
                      className='link'
                      href='https://www.storyblok.com/docs/plugins/tool'
                    >
                      tool plugin{' '}
                    </a>
                    in Nuxt.js.
                  </li>
                  <li>
                    I improved the base project layer to smoothen the
                    authentication flow with the core product.
                  </li>
                </ul>
              </li>
              <li>
                <Link href='https://www.storyblok.com/apps/storyblok-gmbh@algolia'>
                  Algolia Integration
                </Link>
                <ul className='list-inside list-disc'>
                  <li>
                    I researched and prepared the project scope alongside with
                    the architecture.
                  </li>
                  <li>
                    I led, frontend, backend and testing team (5 people) to
                    ensure qualitative and performant outcome.
                  </li>
                  <li>
                    I was responsible for the shipping as well as communicating
                    promotion and documentation details with the appropriate
                    teams.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='break-before-page'>
            <h3 className='text-xl font-semibold'>
              User Experience Engineer at Accenture
            </h3>
            <div className='mb-1 flex flex-1 items-end gap-1 text-xs'>
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
            <div className='mb-2 flex items-center gap-1 text-xs'>
              <BriefcaseIcon title='Promotions' className={'h-4 w-4'} />
              <span>
                Analyst (Nov 2021 - Mar 2022) - Associate (Nov 2020 - Nov 2021)
                - New Associate (Jan 2020 - Nov 2020)
              </span>
            </div>

            <ul className='list-inside list-disc'>
              <li>
                Led frontend and backend task coordination to streamline
                delivery timelines.
              </li>
              <li>
                <b>Facilitated distribution of accessibility knowledge</b>{' '}
                through presentations and workshops.
              </li>
              <li>
                Established and communicated accessibility requirements with
                clients.
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <hr className='my-4 flex-1  border-purple-800 border-opacity-10	' />

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
              <a className='link' href='https://vercel.com/docs/cli/bisect'>
                Vercel's bisect command
              </a>
              . This project was a fun idea with the purpose to improve the{' '}
              <b>user experience </b> by providing a visual representation of
              the deployments where the user could - in a gamified way - find
              out in which exact release a bug was introduced. My project
              partner and I recreated the bisect logic from scratch by using the{' '}
              <b>binary search algorithm.</b>
            </p>
          </li>

          <li>
            <h3 className='text-xl font-semibold'>
              <Link href='https://github.com/BibiSebi/bibidev'>
                Personal Website
              </Link>
            </h3>
            <p className='text-small '>
              The BibiDev website was established as a platform for me to share
              the knowledge I have gained throughout my career, as well as
              insights from my personal life. This project incorporates{' '}
              <b>Next.js, Tailwind CSS, Contentlayer, </b>
              and draws inspiration from the{' '}
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
              learning <b>React</b>. This project is a straightforward game
              featuring questions where users can choose between two options,
              indicating their preference.
            </p>
          </li>
        </ul>
      </section>
      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Education</h2>
        <ul>
          <li>
            <h3 className='mb-1 mt-2 text-xl font-semibold'>
              HTL Spengergasse
            </h3>
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

            <ul className='mt-2'>
              <li>
                <h4 className='text-lg font-semibold'>
                  Diploma Thesis: Automation Request Process Analysis Tool
                </h4>
                <p>
                  Worked closely with the internal team to optimize task
                  prioritization and distribution processes. Conducted employee
                  interviews to gather insights and developed a <b>Vue.js</b> UI
                  tool with an algorithm that prioritized tasks based on impact.
                  This tool enabled employees to assess the priority and impact
                  of incoming tasks, improving decision-making and workflow
                  efficiency.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex break-before-page flex-col gap-2'>
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
              An introduction to what accessibility is, including examples with
              Vue but also tools every developer can use on a daily basis to
              catch accessibility issues while developing.
            </p>
          </li>
        </ul>
      </section>

      <hr className='my-4 flex-1 border-purple-800 border-opacity-10' />

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Volunteering</h2>
        <ul className='flex flex-col gap-2'>
          <li>
            <h3 className='text-xl font-semibold'>
              <Link href='https://linktr.ee/gurlscodingclub'>
                Project Manager at G:URLs Coding Club Vienna
              </Link>
            </h3>
            <div className='mb-2 flex flex-1 items-end gap-1 text-xs '>
              <DateFromTo from={new Date('2024-06-01')} />
              <Tools
                tools={['Public Speaking', 'Event Coordination', 'Mentoring']}
              />
            </div>

            <p className='text-small '>
              G:URLs Coding Club is a non-profit organization that aims to
              encourage and mentor young women to pursue careers in tech. As a
              project manager, I am responsible for:
            </p>
            <ul className='list-inside list-disc'>
              <li>Coordinating workshops, meetups and social gatherings</li>
              <li>
                Securing and managing event spaces, including liaising with
                venues
              </li>
              <li>
                Educating and mentoring club members to strengthen their
                confidence in the IT sector
              </li>
            </ul>
          </li>
        </ul>
      </section>

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

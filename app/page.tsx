import BackgroundGradient from '@/components/icons/BackgroundGradient';
export const metadata = {
  title: 'Bibidev',
};
export default function Page() {
  return (
    <main className='relative flex min-h-full flex-1 overflow-hidden'>
      <div className='relative flex-1  px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl py-32 sm:py-48'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-8xl'>
              🎊 Welcome 🎊
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Hello my name is <b>Bibiana</b> and I am currently working @
              Storyblok. Join me in my journey as a Fullstack Engineer. This
              website should be a collection of lessons learned in my
              professional as well as my private life.
            </p>
            <div className='mt-4 flex items-center justify-center gap-x-6'>
              <a href='/about' className='link'>
                Learn more about me<span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

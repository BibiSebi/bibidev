import BackgroundGradient from '@/components/icons/BackgroundGradient';

export default function Page() {
  return (
    <main>
      <div className={'relative px-6 lg:px-8'}>
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <BackgroundGradient
            className={
              'left-[calc(50%-11rem)] -z-10 rotate-[30deg] sm:left-[calc(50%-30rem)]'
            }
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48">
          <div className="text-center">
            <h1 className="text-8xl font-bold tracking-tight text-gray-900">
              BibiSebi
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Hello my name is <b>Bibiana</b> and I am currently working @ Storyblok.
              Join me in my journey as a Fullstack Engineer. This website
              should be a collection of lessons learned in my professional as
              well as my private life.
            </p>
            <div className="mt-4 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="text-base font-semibold leading-7 text-gray-900"
              >
                Learn more about me<span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

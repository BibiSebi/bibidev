export default function Page() {
  return (
    <main className='relative flex flex-col gap-2 px-6 py-12 text-gray-800 lg:px-32'>
      <h1 className='text-4xl font-bold'>About</h1>
      <section>
        <h2 className='text-2xl font-semibold'>Me</h2>
        <p>
          Hey, my name is Bibiana Sebestianova, feel free to reach out to me
          anytime trough the following media.
        </p>

        <div className='flex gap-2'>
          <a
            className='link'
            href='https://www.linkedin.com/in/bibianasebestianova/'
          >
            LinkedIn
          </a>
          <a className='link' href='https://github.com/BibiSebi'>
            GitHub
          </a>
          <a className='link' href='https://twitter.com/BibianaSebi'>
            Twitter
          </a>
        </div>
      </section>

      <section>
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

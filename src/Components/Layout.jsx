export function Layout () {
  return (
    <section className='w-full h-screen absolute top-0 background text-center text-white font-mono text-2xl'>
      <div className='backdrop-blur-[5px] w-full h-full flex items-center justify-start'>
        <div className='flex flex-col sm:items-start sm:gap-y-12 gap-y-5 sm:pl-10 px-2 tracking-wide animation-1'>
          <h1 className='font-primary sm:text-[4em] text-[2em]'>Unlimited movies,</h1>
          <h1 className='font-primary sm:text-[4em] text-[2em]'>Series, and more...</h1>
          <h2 className='font-primary text-[1em] text-neutral-300'>Find the latest and greatest movies and series all avaible on this web.</h2>
        </div>
      </div>
    </section>
  )
}

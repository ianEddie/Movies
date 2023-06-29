export function Layout () {
  return (
    <section className='w-full h-screen absolute top-0 background text-center text-white font-mono text-2xl bg-emerald-500' id='layout'>
      <div className='bg-black/80 backdrop-blur-[5px] w-full h-full flex items-center justify-start'>
        <div className='flex flex-col items-start gap-y-12 pl-10 tracking-wide animate-fade animate-once animate-duration-1000 animate-ease-linear animate-normal animate-fill-forwards'>
          <h1 className='font-primary text-[4em]'>Unlimited movies,</h1>
          <h1 className='font-primary text-[4em]'>Series, and more...</h1>
          <h2 className='font-primary text-[1em] text-neutral-300'>Find the latest and greatest movies and series all avaible on this web.</h2>
        </div>
      </div>
    </section>
  )
}

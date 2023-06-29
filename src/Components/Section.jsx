import rateIcon from '../assets/rateIcon.png'
export function Section ({ data }) {
  return (
    <>
      {
          data.slice(0, 1).map(item => (
            <section className='bg-neutral-900/90 shadow-xl shadow-black w-[70%] flex justify-between rounded-[2.5rem] animation-1' key={item.id}>
              <section className='flex-grow flex flex-col pt-5 pl-10 text-white backdrop-blur-sm rounded-[2.5rem]'>
                <div>
                  <h1 className='font-primary text-[5em] tracking-wide'>{item.title}</h1>
                </div>
                <div className='flex w-1/2 justify-around font-secondary'>
                  <div className='flex flex-col text-center gap-y-1'>
                    <span>Category</span>
                    <span className='text-neutral-400'>{item.type}</span>
                  </div>
                  <div className=' flex flex-col text-center gap-y-1'>
                    <span>Year</span>
                    <span className='text-neutral-400'>{item.year}</span>
                  </div>
                </div>
                <div className='w-1/2 flex justify-center'>
                  <img src={rateIcon} alt='icon' className='h-16' />
                </div>
                <div className='flex justify-center flex-grow items-center'>
                  <button className='bg-red-700 h-10 w-16 rounded-full transition-colors duration-300 hover:bg-white hover:text-black font-semibold text-sm tracking-wider'>Watch</button>
                </div>
              </section>
              <section>
                <img src={item.image} alt={item.title} className='rounded-r-[2.5rem] rounded-l-3xl' />
              </section>
            </section>
          ))
      }
    </>
  )
}

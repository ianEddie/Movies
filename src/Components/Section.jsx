import { rateIcon } from '../Assets/Images'
//
export function Section ({ data }) {
  return (
    <>
      {
          data.slice(0, 1).map(item => (
            <section className='bg-black/50 shadow-xl shadow-black w-2/3 sm:flex rounded-[2.5rem] animation-1 hidden' key={item.id}>
              <section className='flex-grow flex flex-col items-center justify-around text-center text-white backdrop-blur-sm rounded-[2.5rem]'>
                <div className='w-full'>
                  <h1 className='font-primary text-[5em] tracking-wide'>{item.title}</h1>
                </div>
                <div className='flex w-full justify-around font-secondary'>
                  <div className='flex flex-col text-center gap-y-1'>
                    <span>Category</span>
                    <span className='text-neutral-400'>{item.type}</span>
                  </div>
                  <div className=' flex flex-col text-center gap-y-1'>
                    <span>Year</span>
                    <span className='text-neutral-400'>{item.year}</span>
                  </div>
                </div>
                <div className='w-full flex justify-center '>
                  <img src={rateIcon} alt='icon' className='h-16' />
                </div>
                <div className='flex justify-center w-full items-center'>
                  <button className='bg-red-600 h-10 w-16 rounded-full transition-colors duration-300 hover:bg-white hover:text-black font-semibold text-sm tracking-wider'>Watch</button>
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

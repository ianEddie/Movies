import { Section } from './Section'
import { typeIcon } from '../assets/Images'
//
export function MoviesResult ({ data }) {
  return (
    <>
      <Section data={data} />
      <section className='responsive gap-6 w-full px-10 '>
        {data.map((item) => (
          <div
            key={item.id}
            className='bg-neutral-300 flex flex-col text-center items-center justify-between rounded-3xl shadow-xl shadow-neutral-900  border-neutral-400 border-2 cursor-pointer hover:shadow-xl hover:shadow-neutral-700/90 hover:bg-white transition-colors duration-300 ease-in-out'
          >
            <div>
              <img src={item.image} alt={item.title} className='rounded-3xl shadow-3xl shadow-black  ' />
            </div>
            <div className=' mt-4 flex flex-col w-full items-start pl-4 pb-2'>
              <span className='font-bold font-primary tracking-wider text-lg'>{item.title}</span>
              <div className='text-gray-700 font-secondary font-bold w-full flex justify-around'>
                <div className='flex gap-x-1 items-center'>
                  <img src={typeIcon} alt='icon' className='h-4' />
                  <span>{item.type}</span>
                </div>
                <span>{item.year}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

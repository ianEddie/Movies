import { Layout } from './Layout'

export function NoMoviesResult ({ data }) {
  return (
    <>
      {
        data
          ? <Layout />
          : <p className='font-primary text-[4rem] text-red-500 animation-1'>No Results</p>

      }
    </>
  )
}

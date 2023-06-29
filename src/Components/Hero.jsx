import { Loader } from './Loader'
import { MoviesResult } from './MoviesResult'
import { NoMoviesResult } from './NoMoviesResult'
export function Hero ({ loading, movies }) {
  const hasMovies = movies?.length > 0
  return (
    <main className='w-full min-h-screen backdrop-brightness-[.2] backdrop-blur-[4px] pt-20 pb-6 flex flex-col items-center justify-center gap-y-10'>
      {
        loading
          ? <Loader />
          : hasMovies
            ? <MoviesResult data={movies} />
            : <NoMoviesResult data={movies} />
        }
    </main>
  )
}

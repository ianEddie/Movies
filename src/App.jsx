import React from 'react'
import { useMovies } from './Hooks/useMovies'
import { Logo } from './Components/Logo'
import { Hero } from './Components/Hero'
import { Header } from './Components/Header'
//
const App = () => {
  const { getMovie, movies, loading } = useMovies()
  return (
    <div className='gradient-bg flexed'>
      <Logo />
      <Header getMovie={getMovie} />
      <Hero loading={loading} movies={movies} />
    </div>
  )
}
export default App

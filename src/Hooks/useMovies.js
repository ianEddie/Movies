import { useRef, useState, useCallback } from 'react'
import { searchMovie } from '../Services/movies'

export function useMovies (input) {
  // Movies
  const [movies, setMovies] = useState([])
  // loader
  const [loading, setLoading] = useState(false)
  // error
  const [error, setError] = useState(null)
  // previus Search
  const previusInput = useRef(input)
  // getMovie Function

  const getMovie = useCallback(async ({ input }) => {
    if (input === previusInput.current) return
    //
    try {
      setLoading(true)
      setError(null)
      previusInput.current = input
      //
      const newMovie = await searchMovie(input)
      setMovies(newMovie)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { movies, getMovie, loading, error }
}

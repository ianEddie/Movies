import { API_KEY } from './API_KEY'
//
export const searchMovie = async (input) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`)
    const json = await response.json()
    const data = json.Search

    return data?.map((movie) => ({
      id: movie.imdbID,
      image: movie.Poster,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type
    }))
  } catch (e) { throw new Error('Error at searching') }
}

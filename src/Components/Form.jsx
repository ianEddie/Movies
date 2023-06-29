import { useInput } from '../Hooks/useInput'
import { useMovies } from '../Hooks/useMovies'
//
const Form = () => {
  const { error, updateInput, input } = useInput()
  const { getMovie } = useMovies(input)
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovie({ input })
  }
  // handleChange
  const handleChange = (event) => {
    updateInput(event.target.value)
  }
  // return
  return (
    <>
      <form className='w-full flex justify-center items-center gap-5 py-5' onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          placeholder='Movies...'
          type='text'
          className='bg-neutral-900/30 border border-slate-400 rounded-full text-white text-center py-1 h-8'
        />
        <button className='pointer bg-neutral-900/30 border border-slate-400 text-white rounded-full text-sm w-20 h-8 py-1 text-center'>
          Search
        </button>
      </form>
      {error && <p className='text-red-500'> {error} </p>}
    </>
  )
}

export default Form

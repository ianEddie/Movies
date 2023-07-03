import { useInput } from '../Hooks/useInput'

export function Header ({ getMovie }) {
  const { error, updateInput, input } = useInput()
  // handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovie({ input })
  }
  // handleChange
  const handleChange = (event) => {
    const newInput = event.target.value
    updateInput(newInput)
  }
  return (
    <header className='py-3 justify-around absolute top-1 z-30 font-secondary  w-full'>
      <form className='w-full flex justify-center items-center gap-5' onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          placeholder='Movies...'
          type='text'
          className='bg-neutral-600/90 border border-white rounded-full text-white text-center py-1 h-8'
        />
        <button className='pointer bg-neutral-600/90 border border-white  text-white rounded-full text-sm w-20 h-8 py-1 text-center hover:bg-white hover:text-black transition-colors duration-300'>
          Search
        </button>
      </form>
      {error && <p className='text-red-500 text-center mt-1'> {error} </p>}
    </header>
  )
}

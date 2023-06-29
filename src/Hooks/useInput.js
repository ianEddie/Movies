import { useEffect, useRef, useState } from 'react'

export function useInput () {
  const [input, updateInput] = useState('')
  const [error, setError] = useState(null)
  const firstInput = useRef(true)

  // Validation
  useEffect(() => {
    if (firstInput.current) {
      firstInput.current = input === ''
      return
    }
    if (input === undefined) {
      setError('Movie no exist')
      return
    }
    if (input === '') {
      setError('Type Something')
      return
    }

    if (input.length < 2) {
      setError('Type more than 1 character')
      return
    }
    setError(null)
  }, [input])
  return { error, input, updateInput }
}

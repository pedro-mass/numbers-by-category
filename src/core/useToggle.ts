import { useState } from 'react'

export default function useToggle(
  initialState?: boolean
): [boolean, () => void] {
  const [state, setState] = useState(initialState || false)

  const toggle = (): void => setState(curr => !curr)

  return [state, toggle]
}

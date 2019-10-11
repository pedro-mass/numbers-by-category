import React from 'react'

function NumberInput({
  ...inputProps
}: {
  value: number | string
  [key: string]: any
}): JSX.Element {
  return <input {...inputProps} type="number" />
}

export default NumberInput

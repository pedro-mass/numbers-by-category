import React, { useState } from 'react'

function NumberInput({
  value,
  ...inputProps
}: {
  value: number
  [key: string]: any
}): JSX.Element {
  const [currValue, setValue] = useState<number | string>(value)

  const onChange = (e: {
    target: {
      value: string
    }
  }): void => setValue(e.target.value)

  return (
    <input
      {...inputProps}
      value={currValue}
      onChange={onChange}
      type="number"
    />
  )
}

export default NumberInput

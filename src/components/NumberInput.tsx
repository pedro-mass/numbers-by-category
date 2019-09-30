import React, { useState } from 'react'

export function NumberInput({ value }: { value: number }) {
  const [currValue, setValue] = useState<number | string>(value)
  const onChange = (e: {
    target: {
      value: string
    }
  }) => setValue(e.target.value)
  return <input value={currValue} onChange={onChange} type="number" />
}

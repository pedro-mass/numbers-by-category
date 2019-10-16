import React from 'react'
import { observer } from 'mobx-react'
import { Category as ICategory } from './model'
import NumberInput from '../NumberInput'
import CategoryName from './Name'

function CategorySimple({ category }: { category: ICategory }): JSX.Element {
  const split = (): void => category.split()

  const updateTotal = (e: React.ChangeEvent<HTMLInputElement>): void => {
    category.total = e.target.value ? Number(e.target.value) : ''
  }

  return (
    <>
      <CategoryName category={category} />:{' '}
      <NumberInput value={category.total} onChange={updateTotal} />{' '}
      <button onClick={split}>split</button>
    </>
  )
}

export default observer(CategorySimple)

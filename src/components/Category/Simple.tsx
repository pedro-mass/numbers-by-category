import React from 'react'
import { Category as ICategory } from '../../App/store'
import { NumberInput } from '../NumberInput'
import { CategoryName } from './Name'

export function CategorySimple({ category }: { category: ICategory }) {
  return (
    <>
      <CategoryName category={category} />:{' '}
      <NumberInput value={category.total} /> <button>split</button>
    </>
  )
}

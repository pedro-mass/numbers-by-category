import React from 'react'
import { CategoryWithSubs } from './WithSubs'
import { CategorySimple } from './Simple'
import { Category as ICategory } from '../../App/store'

export function Category({ category }: { category: ICategory }) {
  return (
    <div className="category">
      <button>x</button>{' '}
      {category.hasSubcategories ? (
        <CategoryWithSubs category={category} />
      ) : (
        <CategorySimple category={category} />
      )}
    </div>
  )
}

import React from 'react'
import { Category as ICategory } from '../../App/store'
import { Category } from '.'

export function CategoryList({
  categories,
}: {
  categories: ICategory[] | undefined
}) {
  return (
    <div className="category-list">
      {categories ? (
        categories.map(category => (
          <Category key={category.name} category={category} />
        ))
      ) : (
        <p>No Categories found</p>
      )}
    </div>
  )
}

import React from 'react'
import { observer } from 'mobx-react'
import { Category as ICategory } from './model'
import Category from '.'

function CategoryList({
  categories,
}: {
  categories: ICategory[] | undefined
}): JSX.Element {
  return (
    <div className="category-list">
      {categories ? (
        categories.map(category => (
          <Category key={category.id} category={category} />
        ))
      ) : (
        <p>No Categories found</p>
      )}
    </div>
  )
}

export default observer(CategoryList)

import React from 'react'
import { observer } from 'mobx-react'
import { CategoryList as ICategoryList } from './model'
import Category from './Base'

function CategoryList({
  categories,
}: {
  categories: ICategoryList | undefined
}): JSX.Element {
  return (
    <div className="category-list">
      {categories != null ? (
        categories.list.map(category => (
          <Category key={category.id} category={category} />
        ))
      ) : (
        <p>No Categories found</p>
      )}
    </div>
  )
}

export default observer(CategoryList)

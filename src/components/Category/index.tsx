import React from 'react'
import CategoryWithSubs from './WithSubs'
import CategorySimple from './Simple'
import { Category as ICategory } from './model'
import PrettyPrint from '../PrettyPrint'
import { observer } from 'mobx-react'

function Category({ category }: { category: ICategory }): JSX.Element {
  return (
    <div className="category">
      <button>x</button>{' '}
      {category.hasSubcategories ? (
        <CategoryWithSubs category={category} />
      ) : (
        <CategorySimple category={category} />
      )}
      <PrettyPrint category={category} />
    </div>
  )
}

export { ICategory as CategoryModel }

export default observer(Category)

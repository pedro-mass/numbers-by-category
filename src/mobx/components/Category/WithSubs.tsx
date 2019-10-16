import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Category as ICategory } from './model'
import CategoryList from './List'
import ListActions from './ListActions'
import CategoryName from './Name'

function CategoryWithSubs({ category }: { category: ICategory }): JSX.Element {
  const [expanded, setExpanded] = useState(true)
  const toggle = (): void => setExpanded(curr => !curr)
  const action = expanded ? '-' : '+'

  const deleteCategories = (): void => category.deleteSubcategories()
  const addCategory = (): void => category.addSubcategory()
  const resetBalances = (): void => category.resetSubcategoriesTotal()

  return (
    <span className="">
      <span>
        <CategoryName category={category} />: <span>{category.total}</span>{' '}
        <span onClick={toggle}>
          ({category.subcategories == null ? 0 : category.subcategories.count}{' '}
          sub-categories) <span>{action}</span>
        </span>
      </span>
      {expanded && (
        <div className="subcategories">
          <CategoryList categories={category.subcategories} />
          <ListActions
            addCategory={addCategory}
            resetBalances={resetBalances}
            deleteCategories={deleteCategories}
          />
        </div>
      )}
    </span>
  )
}

export default observer(CategoryWithSubs)

import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Category as ICategory } from '../../App/store'
import CategoryList from './List'
import CategoryName from './Name'

function CategoryWithSubs({ category }: { category: ICategory }): JSX.Element {
  const [expanded, setExpanded] = useState(true)
  const toggle = (): void => setExpanded(curr => !curr)
  const action = expanded ? '-' : '+'
  return (
    <span className="">
      <span>
        <CategoryName category={category} />: <span>{category.total}</span>{' '}
        <span onClick={toggle}>
          ({(category.subcategories || []).length} sub-categories){' '}
          <span>{action}</span>
        </span>
      </span>
      {expanded && (
        <div className="subcategories">
          <CategoryList categories={category.subcategories} />
          <button>add category</button>
          <button>reset balances</button>
          <button>delete categories</button>
        </div>
      )}
    </span>
  )
}

export default observer(CategoryWithSubs)

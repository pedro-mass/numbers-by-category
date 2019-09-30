import React, { useState } from 'react'
import { Category as ICategory } from '../../App/store'
import { CategoryList } from './List'

export function CategoryWithSubs({ category }: { category: ICategory }) {
  const [expanded, setExpanded] = useState(false)
  const toggle = (): void => setExpanded(curr => !curr)
  const action = expanded ? '-' : '+'
  return (
    <span className="">
      <span onClick={toggle}>
        <span>{category.name}</span>: <span>{category.total}</span>{' '}
        <span>({(category.subcategories || []).length} sub-categories)</span>{' '}
        <span>{action}</span>
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

/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState } from 'react'

import './index.css'

interface Category {
  name: string
  total: number
  hasSubcategories?: boolean
  subCategories?: Category[]
}

const categories: Category[] = [
  {
    name: 'income',
    total: 1000,
  },
  {
    name: 'monthly',
    total: 530,
    hasSubcategories: true,
    subCategories: [
      {
        name: 'electricity',
        total: 100,
      },
      {
        name: 'internet',
        total: 70,
      },
      {
        name: 'overhead',
        total: 360,
        hasSubcategories: true,
        subCategories: [
          {
            name: 'pedro',
            total: 100,
          },
          {
            name: 'crystal',
            total: 260,
          },
        ],
      },
    ],
  },
]

const App: React.FC = () => {
  return (
    <div className="App center">
      <CategoryList categories={categories} />
      <button>Add Category</button>
      <button>Reset Balances</button>
      <button>Delete Categories</button>
    </div>
  )
}

function CategoryList({ categories }: { categories: Category[] | undefined }) {
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

function Category({ category }: { category: Category }) {
  return (
    <div className="category">
      <button>delete</button>
      {category.hasSubcategories ? (
        <CategoryWithSubs category={category} />
      ) : (
        <CategorySimple category={category} />
      )}
    </div>
  )
}

function CategorySimple({ category }: { category: Category }) {
  return (
    <>
      <span>{category.name}</span>:{' '}
      <span>
        <NumberInput value={category.total} />
      </span>
    </>
  )
}

function CategoryWithSubs({ category }: { category: Category }) {
  const [expanded, setExpanded] = useState(false)

  const toggle = () => setExpanded(curr => !curr)

  const action = expanded ? '-' : '+'

  return (
    <>
      <span onClick={toggle}>
        <span>{category.name}</span>: <span>{category.total}</span> |{' '}
        <span>({(category.subCategories || []).length} sub-categories)</span>{' '}
        <span>{action}</span>
      </span>
      {expanded && <CategoryList categories={category.subCategories} />}
    </>
  )
}

function NumberInput({ value }: { value: number }) {
  const [currValue, setValue] = useState<number | string>(value)

  const onChange = (e: { target: { value: string } }) =>
    setValue(e.target.value)

  return <input value={currValue} onChange={onChange} type="number" />
}

export function PrettyPrint(props: Record<string, any>) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default App

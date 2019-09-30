import React from 'react'
import useToggle from '../../useToggle'
import { Category } from '../../App/store'

export function CategoryName({ category }: { category: Category }) {
  const [editing, toggle] = useToggle()

  const onChange = (e: { target: { value: string } }): void =>
    category.setName(e.target.value)

  return (
    <>
      {editing ? (
        <span onDoubleClick={toggle}>
          {/* todo: onEnter: toggle state (and submit?) */}
          <input value={category.name} onChange={onChange} />
        </span>
      ) : (
        <span onDoubleClick={toggle}>{category.name}</span>
      )}
    </>
  )
}

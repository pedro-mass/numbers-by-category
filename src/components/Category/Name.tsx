import React, { useState } from 'react'
import { observer } from 'mobx-react'
import useToggle from '../../useToggle'
import { Category } from './model'

function CategoryName({ category }: { category: Category }): JSX.Element {
  const [name, setName] = useState(category.name)
  const [editing, toggle] = useToggle(category.name === '')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value)
  }

  const submit = (): void => {
    if (!name || name.length === 0) return
    toggle()
    category.setName(name)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      submit()
    }
  }

  return (
    <>
      {editing ? (
        <span onDoubleClick={toggle}>
          <input
            autoFocus
            placeholder="category name..."
            value={name}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={submit}
          />
        </span>
      ) : (
        <span onDoubleClick={toggle}>{category.name}</span>
      )}
    </>
  )
}

export default observer(CategoryName)

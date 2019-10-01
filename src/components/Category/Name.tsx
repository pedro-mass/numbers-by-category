import React from 'react'
import { observer } from 'mobx-react'
import useToggle from '../../useToggle'
import { Category } from '../../App/store'

function CategoryName({ category }: { category: Category }): JSX.Element {
  const [editing, toggle] = useToggle()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    category.setName(e.target.value)
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13) {
      toggle()
    }
  }

  return (
    <>
      {editing ? (
        <span onDoubleClick={toggle}>
          {/* todo: onEnter: toggle state (and submit?) */}
          <input
            value={category.name}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        </span>
      ) : (
        <span onDoubleClick={toggle}>{category.name}</span>
      )}
    </>
  )
}

export default observer(CategoryName)

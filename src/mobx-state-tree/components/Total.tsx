import React from 'react'
import { observer } from 'mobx-react'
import { CategoryListModel } from './Category'

export const Total = observer(
  ({
    categories,
    ...domProps
  }: {
    categories: CategoryListModel
    [key: string]: any
  }): JSX.Element => {
    return (
      <div {...domProps}>
        <span>Total:</span> <span>{categories.total}</span>
      </div>
    )
  }
)

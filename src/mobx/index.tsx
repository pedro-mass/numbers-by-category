import React from 'react'
import { observer } from 'mobx-react'
import { CategoryListModel, List, ListActions } from './components/Category'

if (process.env.REACT_APP_USE_MOBX_LOGGER === 'true') {
  import('mobx-logger').then(logger => logger.enableLogging())
}

const Total = observer(
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

const Mobx: React.FC = () => {
  const categories = new CategoryListModel()

  const addCategory = (): void => categories.add()
  const resetBalances = (): void => categories.resetTotals()
  const deleteCategories = (): void => categories.reset()

  return (
    <div className="mobx center">
      <List categories={categories} />
      <ListActions
        addCategory={addCategory}
        resetBalances={resetBalances}
        deleteCategories={deleteCategories}
      />
      <Total className="summary" categories={categories} />
    </div>
  )
}

export default Mobx

import React from 'react'
import { CategoryListModel, List, ListActions } from './components/Category'
import { Total } from './components/Total'

if (process.env.REACT_APP_USE_MOBX_LOGGER === 'true') {
  import('mobx-logger').then(logger => logger.enableLogging())
}

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

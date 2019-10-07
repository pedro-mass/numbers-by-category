import React from 'react'
import { observer } from 'mobx-react'

import { CategoryListModel, List, ListActions } from '../components/Category'
import './index.scss'

if (process.env.REACT_APP_USE_MOBX_LOGGER === 'true') {
  import('mobx-logger').then(logger => logger.enableLogging())
}

const categories = new CategoryListModel()

const App: React.FC = () => {
  const addCategory = (): void => categories.add()
  const resetBalances = (): void => categories.resetTotals()
  const deleteCategories = (): void => categories.reset()

  return (
    <div className="App center">
      <List categories={categories} />
      <ListActions
        addCategory={addCategory}
        resetBalances={resetBalances}
        deleteCategories={deleteCategories}
      />
      <div>
        <span>Total:</span> <span>{categories.total}</span>
      </div>
    </div>
  )
}

export default observer(App)

import React from 'react'

import Category, { CategoryModel } from '../components/Category'
import './index.scss'

if (process.env.REACT_APP_USE_MOBX_LOGGER) {
  import('mobx-logger').then(logger => logger.enableLogging())
}

const App: React.FC = () => {
  const totalCategory = new CategoryModel({
    name: 'total',
  })
  totalCategory.split()

  return (
    <div className="App center">
      <Category category={totalCategory} />
    </div>
  )
}

export default App

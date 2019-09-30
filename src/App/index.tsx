/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Category } from '../components/Category'
import { Category as CategoryStore } from './store'
import './index.scss'

const App: React.FC = () => {
  const totalCategory = new CategoryStore({
    name: 'total',
    total: 5000,
  })

  return (
    <div className="App center">
      <Category category={totalCategory} />
    </div>
  )
}

export default App

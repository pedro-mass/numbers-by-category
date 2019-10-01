/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Category, { CategoryModel } from '../components/Category'
import './index.scss'

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

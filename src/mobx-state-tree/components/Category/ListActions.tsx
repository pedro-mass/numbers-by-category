import React from 'react'

const identity = (val: any): any => val

function ListActions({
  addCategory = identity,
  resetBalances = identity,
  deleteCategories = identity,
}: {
  addCategory: (e: React.MouseEvent) => any
  resetBalances: (e: React.MouseEvent) => any
  deleteCategories: (e: React.MouseEvent) => any
}): JSX.Element {
  return (
    <div className="list-actions">
      <button onClick={addCategory}>add category</button>
      <button onClick={resetBalances}>reset balances</button>
      <button onClick={deleteCategories}>delete categories</button>
    </div>
  )
}

export default ListActions

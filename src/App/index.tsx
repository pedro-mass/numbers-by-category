import React from 'react'
import MobX from '../mobx'
import './index.scss'

const App: React.FC = () => {
  return (
    <div className="app center">
      <div className="nav">
        <span>context</span>
        <span>mobx</span>
        <span>mobx-state-tree</span>
        <span>redux-starter-kit</span>
      </div>
      <MobX />
    </div>
  )
}

export default App

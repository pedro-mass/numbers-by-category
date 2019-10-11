import React from 'react'
import MobX from '../mobx'
import './index.scss'

const App: React.FC = () => {
  return (
    <div className="app center">
      <section className="header nav">
        <span>context</span>
        <span>mobx</span>
        <span>mobx-state-tree</span>
        <span>redux-starter-kit</span>
      </section>

      <section className="content">
        <MobX />
      </section>
    </div>
  )
}

export default App

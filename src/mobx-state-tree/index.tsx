import React from 'react'

if (process.env.REACT_APP_USE_MOBX_LOGGER === 'true') {
  import('mobx-logger').then(logger => logger.enableLogging())
}

const Mobx: React.FC = () => {
  return (
    <div className="center">
      <h1>Todo</h1>
    </div>
  )
}

export default Mobx

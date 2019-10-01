import React from 'react'
import { observer } from 'mobx-react'

function PrettyPrint(props: Record<string, any>): JSX.Element {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

export default observer(PrettyPrint)

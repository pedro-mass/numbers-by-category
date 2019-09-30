import React from 'react'
export function PrettyPrint(props: Record<string, any>) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>
}

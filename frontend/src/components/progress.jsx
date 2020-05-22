import React from 'react'
import { CircularProgress } from '@material-ui/core'

export function CircularLoading() {
  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center'}}>
      <CircularProgress />      
    </div>
  )
}

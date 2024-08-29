import { useContext } from 'react'
import { PositionContext } from '../context/PositionContext'

export function usePositionContext() {
  const context = useContext(PositionContext)
  if (context === undefined) {
    throw new Error(
      'usePositionContext must be used within a PositionContext.Provider'
    )
  }
  return context
}

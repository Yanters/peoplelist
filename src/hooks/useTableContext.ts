import { useContext } from 'react'
import { TableContext } from '../context/TableContext'

export function useTableContext() {
  const context = useContext(TableContext)
  if (context === undefined) {
    throw new Error(
      'useTableContext must be used within a TableContext.Provider'
    )
  }
  return context
}

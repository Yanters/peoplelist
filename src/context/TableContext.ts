import { createContext } from 'react'
import { TableHeaderI } from '../interfaces'

interface tableContextI {
  headers: TableHeaderI[]
  data: any[]
}

export const TableContext = createContext<tableContextI | undefined>(undefined)

import { createContext } from 'react'
import { EmployeeI } from '../interfaces'

interface positionContextI {
  position: string
  employees: EmployeeI[]
  search: string
}

export const PositionContext = createContext<positionContextI | undefined>(
  undefined
)

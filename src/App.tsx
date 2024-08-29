import Position from './components/Position'
import data from './data/data.json'
import { useEffect, useState } from 'react'
import { EmployeeI } from './interfaces'
import { PositionContext } from './context/PositionContext'
import { convertPythonNameToLabel } from './utils/convertPythonNameToLabel'

export default function App() {
  const [employees, setEmployees] = useState<Record<string, EmployeeI[]>>({})
  const [search, setSearch] = useState('')

  useEffect(() => {
    const groupedEmployees = data.reduce(
      (acc: Record<string, EmployeeI[]>, employee: EmployeeI) => {
        if (!acc[employee.position]) {
          acc[employee.position] = []
        }
        acc[employee.position].push(employee)
        return acc
      },
      {}
    )

    setEmployees(groupedEmployees)
  }, [])

  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-3xl font-bold text-center mt-10'>
        Lista pracowników
      </h1>
      <div className='my-5 w-full flex justify-center'>
        <input
          type='text'
          placeholder='Wyszukaj'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          value={search}
          className='p-2 border border-gray-300 rounded text-black w-full max-w-sm'
        />
      </div>
      <div className='w-full flex flex-col'>
        {Object.keys(employees)
          .sort()
          .map((position) => (
            <PositionContext.Provider
              key={position}
              value={{
                position: convertPythonNameToLabel(position),
                employees: employees[position],
                search,
              }}
            >
              <Position />
            </PositionContext.Provider>
          ))}
      </div>
    </div>
  )
}

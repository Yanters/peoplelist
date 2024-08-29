import React, { useMemo } from 'react'
import { TableContext } from '../context/TableContext'
import { useTableContext } from '../hooks/useTableContext'
import { TableHeaderI } from '../interfaces'

interface TableProps {
  children: React.ReactNode
  headers: TableHeaderI[]
  data: Record<string, any>[]
  isNumeric?: boolean
  sortBy?: string
  search?: string
  searchHeaders?: string[]
}

const Table = ({
  children,
  headers,
  data,
  isNumeric,
  sortBy,
  search,
  searchHeaders,
}: TableProps) => {
  if (isNumeric) {
    headers = [{ name: '#', label: '#' }, ...headers]
  }
  const filteredAndSortedData = useMemo(() => {
    let filteredData = data

    if (search) {
      filteredData = filteredData.filter((row) =>
        searchHeaders
          ? searchHeaders.some((header) =>
              row[header]
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase())
            )
          : headers.some((header) =>
              row[header.name]
                .toString()
                .toLowerCase()
                .includes(search.toLowerCase())
            )
      )
    }

    if (sortBy) {
      filteredData = filteredData.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1
        }
        if (a[sortBy] > b[sortBy]) {
          return 1
        }
        return 0
      })
    }

    return filteredData
  }, [data, headers, search, searchHeaders, sortBy])

  return (
    <TableContext.Provider value={{ headers, data: filteredAndSortedData }}>
      {filteredAndSortedData.length ? (
        <table className='w-full mt-2 bg-white shadow-2xl border-top-gradient text-nowrap'>
          {children}
        </table>
      ) : (
        <div className='w-full flex justify-center'>
          <p className='text-center text-red-500 bg-menu-bar p-2 rounded-lg w-full max-w-3xl'>
            Brak danych
          </p>
        </div>
      )}
    </TableContext.Provider>
  )
}

Table.Header = TableHeader
Table.Body = TableBody

export default Table

function TableHeader() {
  const { headers } = useTableContext()
  return (
    <thead className='bg-menu-bar'>
      <tr className='text-center'>
        {headers.map((header, index) => (
          <th key={index} className='p-2'>
            {header.label}
          </th>
        ))}
      </tr>
    </thead>
  )
}

function TableBody() {
  const { data, headers } = useTableContext()
  return (
    <tbody className='bg-bottom-gradient'>
      {data.map((row, rowIndex) => (
        <tr className='border-b border-top-gradient' key={rowIndex}>
          {headers.map((header, index) => {
            if (header.name === '#') {
              return (
                <td className='text-center px-2' key={index}>
                  {rowIndex + 1}
                </td>
              )
            }
            return (
              <td className='text-center px-2' key={index}>
                {header.transform
                  ? header.transform(row[header.name])
                  : row[header.name]}
              </td>
            )
          })}
        </tr>
      ))}
    </tbody>
  )
}

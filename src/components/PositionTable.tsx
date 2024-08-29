import { usePositionContext } from '../hooks/usePositionContext'
import { convertPythonNameToLabel } from '../utils/convertPythonNameToLabel'
import Table from './Table'

const PositionTable = () => {
  const { employees, search } = usePositionContext()
  return (
    <Table
      headers={[
        { name: 'name', label: 'Nazwa' },
        {
          name: 'level',
          label: 'Poziom',
          transform: (value) => value.toUpperCase(),
        },
        { name: 'age', label: 'Wiek' },
        {
          name: 'position',
          label: 'Rola',
          transform: convertPythonNameToLabel,
        },
        { name: 'gender', label: 'Płeć' },
        { name: 'email', label: 'E-mail' },
        { name: 'phone', label: 'Telefon' },
      ]}
      data={employees}
      sortBy='name'
      isNumeric
      searchHeaders={['name', 'email', 'phone']}
      search={search}
    >
      <Table.Header />
      <Table.Body />
    </Table>
  )
}

export default PositionTable

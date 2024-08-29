import { usePositionContext } from '../hooks/usePositionContext'
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
          transform: (value) =>
            (value as string)
              .replace('_', ' ')
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' '),
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

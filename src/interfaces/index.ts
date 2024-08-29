export interface EmployeeI {
  _id: string
  age: number
  level: string
  position: string
  name: string
  gender: string
  email: string
  phone: string
}
export interface TableHeaderI {
  name: string
  label: string
  transform?: (value: any) => any
}

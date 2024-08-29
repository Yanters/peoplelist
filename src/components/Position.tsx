import React, { useState } from 'react'
import { usePositionContext } from '../hooks/usePositionContext'
import PositionTable from './PositionTable'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const Position = () => {
  const { position } = usePositionContext()
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='mx-2 flex flex-col items-center'>
      <div
        className='w-full max-w-3xl border border-gray-300 rounded px-6 py-2 mt-2 bg-menu-bar cursor-pointer'
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className='flex justify-between items-center '>
          <h2 className='text-lg font-bold'>{position}</h2>
          <IoIosArrowDropdownCircle
            size={30}
            className={`transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      <div className='lg:w-5/6 w-full overflow-auto'>
        {isOpen && <PositionTable />}
      </div>
    </div>
  )
}

export default Position

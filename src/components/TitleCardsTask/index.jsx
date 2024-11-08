import React from 'react'

export default function TitleCardsTask({ status='', color='' }) {
  return (
    <div className='w-72 h-10 flex justify-between items-center px-2 '>

      <div className='flex justify-center items-center gap-2'>
        <div className={`w-2 h-2 ${color === 'red' ? 'bg-red-500' : color === 'orange' ? 'bg-orange-500' : 'bg-green-500'} mt-1 rounded outline outline-1 outline-gray-800`}>
        </div>
        { status }

      </div>

      <div className='w-5 h-5 flex justify-center items-center flex-shrink-0 hover:bg-gray-800 overflow-hidden cursor-pointer rounded-sm'>

        <span className="material-symbols-outlined text-xl ">add</span>

      </div>

    </div>
  )
}

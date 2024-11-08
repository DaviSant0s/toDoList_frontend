import React from 'react'
import './styles.css'
import { Draggable } from '@hello-pangea/dnd';

export default function CardTask({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided)=> (
        <div 
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
        
          className='w-72 h-32 flex flex-col bg-[#181E2A] rounded-xl p-2 pl-3 hover:bg-purple-950 hover:border-gray-600 border-2 border-gray-800 duration-100'
        >

          <div className='w-full flex items-center gap-1 text-gray-400 text-xs font-semibold relative'>

            <span className="material-symbols-outlined text-base">calendar_month</span>

            Today

          </div>

          <div className='w-full h-full flex justify-start items-center font-normal text-2xl text-gray-300'>
            {task.name}
          </div>

          <div className='w-full text-gray-400 text-xs'>
            09:00 - 9:30
          </div>
        </div>
      )}
    </Draggable>
  )
}

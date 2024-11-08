import React from 'react'
import profile from '../../assets/profile/profile.jpg'

export default function Menu() {
  return (
    <div className='w-60 h-full flex flex-col flex-shrink-0 gap-10 bg-[#161922] border-r-2 border-gray-800 px-5'>

      {/* profile */}
      <div className='w-full h-20 flex flex-row flex-shrink-0 justify-center items-center gap-2'>
        <div className='w-8 h-8 flex-shrink-0 bg-gray-500 rounded-full overflow-hidden'>
          <img src={profile} alt="foto de perfil" />
        </div>

        <div className='w-full h-8 flex justify-start items-center'>
          <span className='text-gray-200 font-bold'>Maria Eduarda</span>
        </div>
      </div>

      {/* projects */}
      <div className='w-full h-full text-gray-200 font-bold '>
        <div className='w-full flex justify-between items-center'>
          <h1 className='flex justify-center items-center gap-2'>

            <div className='w-5 h-5 flex justify-center items-center flex-shrink-0 hover:bg-gray-700 overflow-hidden cursor-pointer rounded-sm'>
              <span className="material-symbols-outlined">arrow_drop_up</span>
            </div>

            Projetos

          </h1>

          <div 
          className='w-5 h-5 flex justify-center items-center flex-shrink-0 hover:bg-gray-700 overflow-hidden cursor-pointer rounded-sm'>
            <span className="material-symbols-outlined text-xl ">add</span>
          </div>

        </div>
      </div>

    </div>
  )
}

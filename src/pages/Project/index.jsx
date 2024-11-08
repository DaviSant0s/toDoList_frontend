import ContainerTasks from '../../components/containerTasks'

export default function Project() {
  return (
    <div className='w-full h-full  overflow-auto'>

      <div className='w-full h-16 flex justify-between items-center flex-shrink-0 text-gray-200 text-[1.5em] font-semibold pl-14 pr-5 border-b border-gray-700 mb-10'>
      Formação Iniciante em Programação

        <div className='w-fit h-fit px-4 py-2 bg-purple-800 rounded-lg font-normal text-base cursor-pointer leading-none'>
          Logout
        </div>
      </div>

      <div className='w-full max-h-full pl-14'>
        
        <div className='w-fit h-full flex gap-4 text-gray-200'>

          <ContainerTasks status={'Para fazer'} color={'red'}/>
          <ContainerTasks status={'Em andamento'} color={'orange' }/>
          <ContainerTasks status={'Finalizado'} color={'green'}/>

        </div>
      </div>
    </div>
  )
}

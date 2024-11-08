import React, { useState } from 'react'
import TitleCardsTask from '../TitleCardsTask'
import CardTask from '../CardTask'
import NewTask from '../NewTask'
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useDrag } from 'react-dnd'; // dnd
import './styles.css';

const cards = [
  {id: '0', name: 'lavar louça'},
  {id: '1', name: 'cosinhar'},
  {id: '2', name: 'estudar'}
]

export default function ContainerTasks({ status, color }) {

  const [ tasks, setTasks ] = useState(cards)

  
  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed);

    return result;
  }

  const onDragEnd = (result) => {
    if(!result.destination){
      return;
    }

    const item = reorder(tasks, result.source.index, result.destination.index);
   
    console.log(item)

    setTasks(item)

  }

 


  return (
    <div className='flex flex-col gap-2 bg-slate-800 px-2 pb-2 rounded-xl'>

      <TitleCardsTask status={status} color={color}/>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='tasks' type='list' direction='vertical'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className='flex flex-col gap-2 bg-slate-500'>

              {tasks.map((task, index) => {
                return (
                <CardTask key={task.id} task={task} index={index}/>
              )
              })}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <NewTask/>

    </div>
  )
}

















/*   useEffect(() => {
    const tasks = document.querySelectorAll('.drag-tasks');

    tasks.forEach((card) => {
      card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging')
      })

      card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging')
      })
    })

    containerTask_ref.current.addEventListener('dragenter', e => {
        e.preventDefault();
        
        e.currentTarget.classList.add('cardsHover');
        
      })
      
      containerTask_ref.current.addEventListener('dragleave', e => {
        e.currentTarget.classList.remove('cardsHover');
      })
      
      containerTask_ref.current.addEventListener('drop', e => {

        console.log('cheguei aqui')
        e.currentTarget.classList.remove('cardsHover');

        const dragCard = document.querySelector('.dragging')
  
        e.currentTarget.appendChild(dragCard)

    })

    
  }, []) */

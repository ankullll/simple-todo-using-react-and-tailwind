import React from 'react'

const Read = (props) => {
    const todo = props.todo
    const settodo = props.settodo

    const deleteHandler = (id)=>{
      const filtered = todo.filter((e)=> e.id != id)
      console.log(filtered)
      settodo(filtered)
    }

    const render = todo.map((element)=>{
      return(
        <li className='bg-gray-900 p-4 rounded flex justify-between items-center mb-2' key={element.id}>  <span className='text-2xl font-thin '>{element.task}</span>  <button className='text-sm text-red-400' onClick={()=>{deleteHandler(element.id)}}>Delete</button>  </li>
      )
    })
  return (
    <div className=' w-[40%] p-10 text-white'>
      <h1 className='text-6xl font-thin mb-10'> <span className='text-pink-400'>Pending</span> Todos</h1>
      <ol>
        {render}
      </ol>
    </div>
  )
}

export default Read

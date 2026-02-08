import React from 'react'

const Read = (props) => {

  const todo = props.todo
  const settodo = props.settodo

  const comp = (id) => {
    let update = todo.map((e) => {
      if (e.id == id) {
        return { ...e, isComplete: true }
      }
      return e
    })
    settodo(update)
  }

  const del = (id) => {
    const filtered = todo.filter(task => task.id != id)
    settodo(filtered)
  }

  const work = todo.map((e) => {
    return (
      <li
        key={e.id}
        
        className='text-xl flex justify-between items-center bg-gray-900 mb-5 p-3 rounded'
      >
        <span style={{ textDecoration: e.isComplete ? "line-through" : "none" }}>
        {e.task}

        </span>
        <div className='flex gap-3'>
        <button className='text-red-500' onClick={() => del(e.id)}>Delete</button>
        <button className='text-green-500' onClick={() => comp(e.id)}>Completed</button>
        </div>
        
      </li>
    )
  })

  return (
    <div className='w-[30%]  text-white p-10 '>
      <h1 className='text-6xl font-thin mb-15 '> <span className='text-pink-400'> Pending</span> work</h1>
      <ol>{work}</ol>
    </div>
  )
}

export default Read

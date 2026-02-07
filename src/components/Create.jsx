import { nanoid } from 'nanoid'
import React, { useState } from 'react'



const Create = (props) => {

    const todo = props.todo
    const settodo = props.settodo
    const [task, settask] = useState("")

     const submitHandler = (e)=>{
      e.preventDefault()
       
      const newtodo = {
        id:nanoid(),
        task,
        isCompleted : false
      }
       let x = [...todo]; 
      x.push(newtodo)
      settodo(x)
      settask("")
      
    }

  return (
    <div className=' w-[60%] p-10 text-white'>
      <h1 className='text-6xl font-thin mb-10'>Set <span className='text-red-400'>Reminders </span>for <br />tasks</h1>
      <form onSubmit={submitHandler}>

          <input 
          className='border-b text-4xl font-thin w-full p-2 outline-0'
          type="text" placeholder='Enter task' onChange={(e)=>{settask(e.target.value)}} value={task} />
          <br /><br />
          <button className='text-xl py-2 border rounded mt-5 px-10'>Add Task</button>
      </form>
    </div>
  )
}

export default Create

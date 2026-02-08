import React, { useState } from 'react'
import {nanoid} from 'nanoid'

const Create = (props) => {
    const todo = props.todo
    const settodo = props.settodo
    



    const [kaam, setkaam] = useState("")

    const submitHandler = (e)=>{
    e.preventDefault();
    const newtodo = {
      id:nanoid(),
      task : kaam,
      iscomplete : false
    }
    settodo([...todo,newtodo])
    setkaam("")
  }
 
  return (
    <div className='w-[70%]  text-white p-10 '>
        <h1 className='text-6xl font-thin mb-15'>Set <span className='text-red-400'>Reminders</span> for your <br />todos</h1>
      <form onSubmit={submitHandler} >
        <input type="text" 
        className='text-3xl w-[70%] border-b outline-0 px-3 py-1'
        placeholder='Enter task'
        onChange={(e)=>{setkaam(e.target.value)}}
        value={kaam}
        />
        <br /><br />
        <button className='text-2xl border p-3 mt-5 rounded font-thin bg-gray-300 text-gray-900'>Add Task</button>
      </form>
    </div>
  )
}

export default Create;

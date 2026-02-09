import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { todocontext } from './Wrapper'


const Create = () => {
    const [todo, settodo] = useContext(todocontext)

    const {
    register,
    handleSubmit,
    reset,
    formState:{errors}
  }=useForm()
  
  const submitHandler = (data)=>{
    data.id = nanoid()
    data.isComplete = false
    
    settodo([...todo,data])
    toast.success("Task added successfully")
    reset()
  }

  return (
    <div className="w-[70%]  text-white p-10 ">
        <h1 className="text-6xl font-thin mb-15">Set <span className="text-red-400">Reminders</span> for your <br /> todos</h1>
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col ">
    <input type="text" 
    className="text-3xl w-[70%] border-b outline-0 px-3 py-1  "
    {...register("task",{required:"task can not be empty"})}/>
    <small className="text-xl p-3 text-red-500">{errors?.task?.message}</small>
    <button className="text-2xl border py-3 px-10 mt-2 rounded font-thin bg-gray-300 text-gray-900 w-fit">Add task</button>
      </form>
    </div>
  )
}

export default Create

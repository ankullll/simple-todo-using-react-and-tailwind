import React, { useContext } from 'react'
import { toast } from 'react-toastify'
import { todocontext } from './Wrapper'

const Read = () => {
    const [todo, settodo] = useContext(todocontext)

   
    const rem = (id)=>{
        const filter = todo.filter((e)=>{
            return e.id != id
        })
        settodo(filter)
        toast.error("Task removed")
    }
    const comp=(id)=>{
        let update = todo.map((e)=>{
            if(e.id == id){
                return {...e, isComplete:true }
            }
            return e
        })
        toast.success("task completed successfully")
        settodo(update)
    }
    const render = todo.map((e) => {
        return (
            <li key={e.id}  className='text-xl flex justify-between items-center bg-gray-900 mb-5 p-4 rounded'  >
                
               <span style={{textDecoration : e.isComplete? "line-through" : "none"}}>{e.task}</span> 
               <div className='flex gap-3'> <button onClick={()=>{comp(e.id)}} className='text-green-500'>Completed</button> <button className='text-red-500' onClick={()=>{rem(e.id)}}>Delete</button></div> 
               </li>
        )
    })

return (
    <div className='w-[40%]  text-white p-10 '>
        <h1 className='text-6xl font-thin mb-15 '> <span className='text-pink-400'>Pending</span> task</h1>
        <ol>{render}</ol>
    </div>
)
}

export default Read



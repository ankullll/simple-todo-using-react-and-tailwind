
import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'
const App = () => {

  const [todo, settodo] = useState([])
  
  
  return (
    <div className='w-screen h-screen bg-gray-700 flex p-10'>
      <Create todo={todo} settodo={settodo}/>
      <Read todo={todo} settodo={settodo}/>
    </div>
  )
}

export default App

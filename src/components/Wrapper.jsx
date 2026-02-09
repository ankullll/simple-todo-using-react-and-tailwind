import React, { createContext, useState } from 'react'
 export const todocontext= createContext(null)
 

const Wrapper = (props) => {
    const [todo, settodo] = useState([])
   console.log(props) 
  return ( <todocontext.Provider value={[todo, settodo]}> {props.children}</todocontext.Provider>)
    
      
   
  
}

export default Wrapper

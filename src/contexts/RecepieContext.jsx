import React, { createContext, useEffect, useState } from 'react'

export const Receipecontext =  createContext(null)
const RecepieContext = (props) => {
    const [receipe,setreceipe] = useState([])
    useEffect(()=>{
      setreceipe(JSON.parse(localStorage.getItem('receipe')) || [])
    },[])
  return (
    <Receipecontext.Provider value={[receipe,setreceipe]}>
      {props.children}
    </Receipecontext.Provider>
  )
}

export default RecepieContext

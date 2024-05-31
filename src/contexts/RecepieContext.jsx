import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAddRecipe } from '../store/actions/recipeaction'
export const Receipecontext =  createContext(null)
const RecepieContext = (props) => {
  const dispatch = useDispatch()
   const {value} = useSelector(state=>state.recipeSlice)
    const [receipe,setreceipe] = useState([])
    useEffect(()=>{
      let recipe = JSON.parse(localStorage.getItem('receipe')) || []
      // console.log(d);
      // setreceipe(JSON.parse(localStorage.getItem('receipe')) || [])
      dispatch(asyncAddRecipe(recipe))
    },[])
  return (
    <Receipecontext.Provider value={[receipe,setreceipe]}>
      {props.children}
    </Receipecontext.Provider>
  )
}

export default RecepieContext

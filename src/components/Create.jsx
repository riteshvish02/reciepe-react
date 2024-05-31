import { nanoid } from "nanoid";
import React, { useContext, useState } from "react";
import { Receipecontext } from "../contexts/RecepieContext";
import { useNavigate } from "react-router-dom";
import { asyncAddRecipe } from "../store/actions/recipeaction";
import { useDispatch } from "react-redux";
const Create = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   const  [receipe,setreceipe] =  useContext(Receipecontext)
    const [image,setimage] = useState('')
    const [title,settitle] =  useState('')
    const [description,setdescription] = useState('')
    const [ingredients,setingredients] = useState('')
    const [instructions,setinstructions] = useState('')
    const SubmitHandler = (e)=>{
        e.preventDefault()
        console.log(image,title,description,ingredients,instructions)
        const newreceipe = {
            id:nanoid(),
            image:image,
            title:title,
            description:description,
            ingredients:ingredients,
            instructions:instructions,
        }
    //   setreceipe([...receipe,newreceipe]) 
      dispatch(asyncAddRecipe([...receipe,newreceipe]))
      localStorage.setItem('receipe',JSON.stringify([...receipe,newreceipe])) 
      navigate('/') 
    }
    console.log(receipe);
    return (
        <form onSubmit={SubmitHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Create <br /> New Recipe
            </h1>
            <input
                onChange={(e)=>setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e)=>settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e)=>setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                onChange={(e)=>setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    );
};

export default Create;

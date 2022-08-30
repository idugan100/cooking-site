import './Create.css'
import { useRef, useState,useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch';
import { Link, useHistory } from 'react-router-dom';
export default function Create() {
  const [title,setTitle]=useState('')
  const [method,setMethod]=useState('');
  const [cookingTime,setCookingTime]=useState('')
  const [newIngedient,setNewIngredient]=useState('')
  const [ingredients,setIngredients]=useState([]);
  const ingredientInput=useRef(null);
  const {data,isPending,error,postData}=useFetch('http://localhost:3000/recipes','POST')
  const history=useHistory();
  useEffect(()=>{
    if(data){
      history.push('./')
    }
  },[data])

  const handleSubmit=(event)=>{
    event.preventDefault();
    postData({
      
      title,
      ingredients,
      method,
      cookingTime:cookingTime+" minutes"

    })
    
  }

  const handleClick=(event)=>{
    event.preventDefault();
    const ing=newIngedient.trim()
    if(ing && !ingredients.includes(ing)){
      setIngredients((prev)=>([...prev,ing]));
    }
    setNewIngredient("");
    ingredientInput.current.focus();
  }
  
  
  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipie</h2>
      <form onSubmit={handleSubmit} >
        <label>
          <span>Recipie Title:</span>
          <input type="text" onChange={(event)=>{setTitle(event.target.value)}} value={title} required/>
        </label>
        <label>
          <span>Recipe Ingredients</span>
          <div className="ingredients">
            <input ref={ingredientInput} type="text" onChange={(event)=>{setNewIngredient(event.target.value)}} value={newIngedient}/>
            <button className='btn' onClick={handleClick}>add</button>
          </div>
        </label>
        <p>Current ingredients: {ingredients.map((ing)=><em>{ing}, </em>)}</p>
        <label >
          <span>Recipe Method: </span>
          <textarea onChange={(event)=>{setMethod(event.target.value)}} value={method} required cols="30" rows="10"></textarea>
        </label>
        <label>
          <span>Cooking Time:</span>
          <input type="number" onChange={(e)=>{setCookingTime(e.target.value)}} value={cookingTime} required/>
        </label>
        <button className='button' type='submit'>Submit</button>
      </form>
    </div>
  )
}

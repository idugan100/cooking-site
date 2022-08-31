import './recipieCard.css'
import { Link } from 'react-router-dom'
import Trashcan from '../../assets/delete.svg'
import { projectFirestore } from '../../firebase/config'

export default function RecipieCard({recipes}) {
  if(recipes.length===0){
    return <div className='error'>No recipes found...</div>
  }

  const handleClick=(id)=>{
    projectFirestore.collection('recipie').doc(id).delete()

  }
  return (
    <div className="recipe-list">
    {recipes.map(recipe => (
      <div key={recipe.id} className="card">
        <h3>{recipe.title}</h3>
        <p>{recipe.cookingTime} to make.</p>
        <div>{recipe.method.substring(0, 100)}...</div>
        <Link to={`/details/${recipe.id}`}>Cook This</Link>
        <img src={Trashcan} className='delete' onClick={()=>{handleClick(recipe.id)}} />
      </div>
    ))}
  </div>
  )
}


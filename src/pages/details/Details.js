import './Details.css'
import {  useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

export default function Details() {
  const {id}=useParams();
  const url='http://localhost:3000/recipes/'+id;
  const {data:recipie,isPending,error}=useFetch(url);

  

  return (
    <div className='recipe'>
    {isPending && <p className='loading'>Loading...</p>}
    {error && <p className='error'>{error}</p>}
    {recipie &&(
      <>
      <h2 className='page-title'>{recipie.title}</h2>
      <p>Takes {recipie.cookingTime} minutes to cook</p>
      <ul>{recipie.ingredients.map((ing)=>(<li key={ing}>{ing}</li>))}</ul>
      <p className="method">{recipie.method}</p>
      </>
    )}
    </div>
  )
}

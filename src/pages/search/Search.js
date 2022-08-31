import { useEffect ,useState} from 'react';
import { useLocation } from 'react-router-dom'
import RecipieCard from '../../components/recipieCard/RecipieCard.js';
import { projectFirestore } from '../../firebase/config.js';
import {useFetch} from '../../hooks/useFetch.js'


import './Search.css'


export default function Search() {
  const queryString=useLocation().search;
  const queryParams=new URLSearchParams(queryString)
  const query=queryParams.get('q');
  const [data,setData]=useState(null);
  const [error,setError]=useState(false);
  const [isPending,setIsPending]=useState(false)
  useEffect(()=>{
    setIsPending(true);
    const ref=projectFirestore.collection('recipie');
    const recipes=[];
    ref.where('title','==',query).get().then((snapshot)=>{
      if(snapshot.empty){
        setIsPending(false);
        setError('No recipies found with that title')
      }
      else{
        snapshot.forEach((recipe)=>{
          recipes.push({
            
            ...recipe.data(),
            id:recipe.id
          })
        })
        setData(recipes);
        setIsPending(false)
      }
    })



  },[query])
  return (
    <div>
      <h2 className="page-title">Recipes with title of"{query}"</h2>
     {error &&<p className="error">{error}</p>}
     {isPending && <p className='loading'>Loading...</p>}
     {data&& 
      <RecipieCard recipes={data}/>}
    </div>
  )
}

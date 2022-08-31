import './Details.css'
import { useState,useEffect } from 'react';
import {  useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';
import { projectFirestore } from '../../firebase/config';

export default function Details() {
  const {id}=useParams();
  const [data,setData]=useState(null);
  const [error,setError]=useState(false);
  const [isPending,setIsPending]=useState(false)
  
  useEffect(()=>{
    setIsPending(true);
    projectFirestore.collection('recipie').doc(id).get().then((doc)=>{
      if(doc.exists){
        setIsPending(false);
        setData(doc.data());
      }else{
        setIsPending(false);
        setError('recipe not found')
      }
    }).catch(err=>{setError(err.message)})
  },[id])


  

  return (
    <div className='recipe'>
    {isPending && <p className='loading'>Loading...</p>}
    {error && <p className='error'>{error}</p>}
    {data &&(
      <>
      <h2 className='page-title'>{data.title}</h2>
      <p>Takes {data.cookingTime} minutes to cook</p>
      <ul>{data.ingredients.map((ing)=>(<li key={ing}>{ing}</li>))}</ul>
      <p className="method">{data.method}</p>
      </>
    )}
    </div>
  )
}

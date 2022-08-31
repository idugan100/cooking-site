import './Home.css'
import { projectFirestore } from '../../firebase/config';
import RecipieCard from '../../components/recipieCard/RecipieCard';
import { useEffect, useState } from 'react';
import { unstable_batchedUpdates } from 'react-dom';

export default function Home() {
  const [data,setData]=useState(null);
  const [error,setError]=useState(false);
  const [isPending,setIsPending]=useState(false)
  
  useEffect(()=>{
    console.log('using effect')
    setIsPending(true)
    const unsub=projectFirestore.collection('recipie').onSnapshot((snapshot)=>{
      if(snapshot.empty){
        setError('empty collection')
        setIsPending(false)
      }
      else{
        let results=[];
        
        snapshot.docs.forEach(doc=>{
          results.push({
            
            ...doc.data(),
            id:doc.id
          })
        })
        setData(results)
        setIsPending(false)
        
      }
    },(err)=>{setError(err.message);setIsPending(false)})
    return ()=>unsub()
  },[])

  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {data && <RecipieCard recipes={data}/>}
 
    </div>
  )
}

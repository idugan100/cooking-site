import './Details.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

export default function Details() {
  const {id}=useParams();
  const url='http://localhost:3000/recipes/'+id;
  const {data:recipie,isPending,error}=useFetch(url);

  

  return (
    <div className='recipie'>
    {isPending && <p className='loading'>Loading...</p>}
    {error && <p className='error'>{error}</p>}
    {recipie &&<h1>{recipie.title}</h1>}
    </div>
  )
}

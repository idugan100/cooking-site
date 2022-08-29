import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipieCard from '../../components/recipieCard/RecipieCard';

export default function Home() {
  const {data,isPending,error}=useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {data && <RecipieCard recipes={data}/>}
 
    </div>
  )
}

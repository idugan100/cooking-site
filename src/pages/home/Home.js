import './Home.css'
import { useFetch } from '../../hooks/useFetch'

export default function Home() {
  const {data,isPending,error}=useFetch('http://localhost:3000/recipes')
  console.log(data);
  return (
    <div className='home'>
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='loading'>Loading...</div>}
      {data && data.map((recipie)=>(
        <h2 key={recipie.id}>{recipie.title}</h2>
      ))}

    </div>
  )
}

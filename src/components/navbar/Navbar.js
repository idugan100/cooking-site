import {Link} from 'react-router-dom';
import Searchbar from '../searchbar/Searchbar';
import {useTheme} from '../../hooks/useTheme.js'



import './Navbar.css'

export default function Navbar() {
  const {color,changeColor}=useTheme();


  return (
    <div className='navbar' style={{background:color}}>
        <nav >
            <Link className="brand"to ='/'><h1>My College Recipies</h1></Link>
            <Searchbar/>
            <Link to='/create'>Create New Recipe</Link>
            

        </nav>
    </div>
  )
}

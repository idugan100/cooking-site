import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Search from './pages/search/Search.js';
import Create from './pages/create/Create.js';
import Navbar from './components/navbar/Navbar';


import './App.css'
import ThemeSelector from './components/themeSelector/ThemeSelector';
import { useTheme } from './hooks/useTheme';

function App() {
  const {mode}=useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar/>
      <ThemeSelector/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/details/:id">
            <Details />
          </Route>

        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App


import './App.css';
import HomePage from './components/HomePage';

import Item from './components/Item';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Notestate from './context/Notes/Notestate';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SearchedMovies from './components/SearchedMovies';
import Iteminfo from './components/Iteminfo';



function App() {
  return (
   <>
   <Router>

  <Notestate>
  <Navbar/>
  
  
  <Switch>
          <Route exact path="/">
          <Searchbar/>
          <HomePage/>
          </Route>


          <Route exact path="/toprated-movies">
          <Searchbar/>
          <Item  moviestype="Top-Rated Movies" url={`https://api.themoviedb.org/3/movie/top_rated?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>


          <Route exact path="/latest-movies">
          <Searchbar/>
          <Item moviestype="Latest Movies" url={`https://api.themoviedb.org/3/movie/now_playing?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>


          <Route exact path="/popular-movies">
          <Searchbar/>
          <Item moviestype="Popular Movies" url={`https://api.themoviedb.org/3/movie/popular?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>


          <Route exact path="/upcoming-movies">
          <Searchbar/>
          <Item  moviestype="Upcoming Movies" url={`https://api.themoviedb.org/3/movie/upcoming?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>


          <Route exact path={`/search=${localStorage.getItem('search')}`}>
          <Searchbar/>
          <SearchedMovies/>
          </Route>


          <Route exact path={`/${localStorage.getItem('title')}`}>
        
          <Iteminfo id={localStorage.getItem('id')} />
          </Route>




        

          
          
  </Switch>

  
  {/* <Item item="upcoming"/>    do this in further step */}
  
  
  </Notestate>
   </Router>
   </>
  );
}

export default App;

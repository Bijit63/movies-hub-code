
import './App.css';
import HomePage from './components/HomePage';

import Item from './components/Item';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Notestate from './context/Notes/Notestate';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import SearchedMovies from './components/SearchedMovies';
import Iteminfo from './components/Iteminfo';
import Footer from './components/Footer';
import Trendingmovie from './components/Trendingmovie';
// import LoadingBar from './components/LoadingBar';
import Hhh from "./components/Hhh.js"




function App() {
  return (
   <div className='overflow-hidden min-h-[100vh]  max-w-[100vw] '>
   <Router>

    {/* <LoadingBar/> */}

  <Notestate>
  <Navbar/>
  
  
  <Switch>
          <Route  exact path="/">
          <Trendingmovie/>
          <Searchbar/>
          <HomePage  />
          </Route>


          <Route exact path="/toprated-movies">
          <Searchbar/>
          <Item display='flex'  moviestype="Top-Rated Movies" url={`https://api.themoviedb.org/3/movie/top_rated?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>


          <Route exact path="/latest-movies">
          <Searchbar/>
          <Item display='flex' moviestype="Now Playing Movies" url={`https://api.themoviedb.org/3/movie/now_playing?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>
      

          <Route exact path="/popular-movies">
          <Searchbar/>
          <Item display='flex' moviestype="Popular Movies" url={`https://api.themoviedb.org/3/movie/popular?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>


          <Route exact path="/upcoming-movies">
          <Searchbar/>
          <Item display='flex'  moviestype="Upcoming Movies" url={`https://api.themoviedb.org/3/movie/upcoming?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
          </Route>





          <Route path={`/search=:searchquery`}>
          <Searchbar/>
          <SearchedMovies/>
          </Route>  




          <Route path={`/details/:id/:name`}>
        
          <Iteminfo   />
          </Route> 





          <Route path={`/hhh`}>
        
          <Hhh/>
          </Route> 


         
        
          
    





        

          
          
  </Switch>
    <Footer/>

  
  {/* <Item item="upcoming"/>    do this in further step */}
  
  
  </Notestate>
   </Router>
   </div>
  );
}

export default App;

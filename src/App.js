
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
  Link
} from "react-router-dom";



function App() {
  return (
   <>
   <Router>

  <Notestate>
  <Navbar/>
  <Searchbar/>
  
  <Switch>
          <Route exact path="/">
          <HomePage/>
          </Route>
          <Route exact path="/toprated-movies">
          <Item item="top_rated"  moviestype="Top-Rated Movies" />
          </Route>
          <Route exact path="/latest-movies">
          <Item item="now_playing" moviestype="Latest Movies" />
          </Route>
          <Route exact path="/popular-movies">
          <Item item="popular" moviestype="Popular Movies" />
          </Route>
          <Route exact path="/upcoming-movies">
          <Item item="upcoming"  moviestype="Upcoming Movies" />
          </Route>

          
          
  </Switch>

  
  {/* <Item item="upcoming"/>    do this in further step */}
  
  
  </Notestate>
   </Router>
   </>
  );
}

export default App;

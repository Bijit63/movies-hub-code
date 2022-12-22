
import './App.css';
import HomePage from './components/HomePage';

import Item from './components/Item';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Notestate from './context/Notes/Notestate';



function App() {
  return (
   <>
  <Notestate>

  <Navbar/>
  <Searchbar/>
  <HomePage/>
  {/* <Item item="upcoming"/>    do this in further step */}
  
  
  </Notestate>
   </>
  );
}

export default App;

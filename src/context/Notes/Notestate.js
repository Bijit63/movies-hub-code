import React from "react";
import Item from "../../components/Item";
import NoteContext from "./NoteContext";

const Notestate = (props)=>{





        // const [search, setsearch] = useState()



    const movies = (type)=>
        {
            return(
            <Item limit={"yes"} wrap='wrap' url={`https://api.themoviedb.org/3/movie/${type}?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`} />
                    )
        }

       
   

    const searchmovie=()=>{
        return(
            <Item url={`https://api.themoviedb.org/3/search/movie?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US&query=${localStorage.getItem('search')}&page=1&include_adult=false`}  />
        )
       
        }
    



    return(
        <NoteContext.Provider value={{movies ,searchmovie} }>
            {props.children}
        </NoteContext.Provider>
    )
}


export default Notestate;
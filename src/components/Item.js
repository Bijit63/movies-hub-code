import React from "react";
import { useState, useEffect } from "react";
import Itemcard from "./Itemcard";


const Item = (props) => {
    const [items, setitems] = useState([]);
    const [genre, setgenre] = useState([]);


    useEffect(() => {
      fetch(
        `https://api.themoviedb.org/3/movie/${props.item}?api_key=7e5e27e6b51bcfd87532d3a63a2c2646`
      )
        .then((info) => {
          return info.json();
        })




        .then((data) =>  {
                          props.limit==="yes"?setitems(data.results.slice(0,5)):setitems(data.results)
                          
                          console.log(data.results)
        
                         }
      );
    },[]);



    useEffect(() => {
      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US"
      )
        .then((info) => {
          return info.json();
        })




        .then((data) => {setgenre(data.genres)




        console.log(data.results)
        
      
      });
    },[]);



  return <div>
    
    <div className="flex justify-between flex-wrap">

    {items.map(
        element => {
            return <Itemcard  title={element.title} image={element.poster_path
            } desc={element.overview} key={element.id} source={element.title} rating={element.vote_average} total={element.vote_count} date={element.release_date
            } genrenames={element.genre_ids.map(id=>  {return genre.map(details=>{ return id===details.id?details.name:' ' } )
            }
            
            )

            } />

        })}
        </div>
  </div>;
};

export default Item;

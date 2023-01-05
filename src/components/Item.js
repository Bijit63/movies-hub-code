import React from "react";
import { useState, useEffect } from "react";
import Itemcard from "./Itemcard";


const Item = (props) => {
    const [items, setitems] = useState([]);
    const [genre, setgenre] = useState([]);


    useEffect(() => {
      fetch(props.url)
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




     
        
      
      });
    },[]);



  return <div>


{/* <div  className=" my-[30px] w-fit mx-auto px-[10px]   md:my-[45px] md:mb-[45px] "> */}
       <p id="moviestype" className={` md:text-5xl text-2xl  flex justify-center px-4 ` }>{props.moviestype} </p>

       {/* <p id="moviestype" className={` md:text-5xl text-2xl md:mt-[20px] flex justify-center px-4 my-1 md:my-2` }>{props.moviestype} </p> */}
       
      
      
      {/* </div>  */}

      
  



    <div className={`flex justify-around flex-wrap ${props.wrap} `}>

    {items.map(
        element => {
            return <Itemcard rounded={props.rounded} backdrop={element.backdrop_path} title={element.title} w={props.w} h={props.h} wimg={props.wimg} image={element.poster_path
            } id={element.id} desc={element.overview} key={element.id} source={element.title} rating={element.vote_average} total={element.vote_count} date={element.release_date
            } genrenames={element.genre_ids.map(id=>  {return genre.map(details=>{ return id===details.id?details.name:' ' } )
            }
            
            )

            } />

        })}
        </div>
  </div>;
};

export default Item;

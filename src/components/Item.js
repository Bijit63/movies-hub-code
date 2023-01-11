import React from "react";
import { useState, useEffect } from "react";
import Itemcard from "./Itemcard";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../images/Loader.gif"
// import Loading from "./LoadingBar"
import filter from '../images/Filter.png'










const Item = (props) => {
    const [items, setitems] = useState([]);
    const [totalresults, settotalresults] = useState();
    const [page, setpage] = useState(1);
    
    const [genre, setgenre] = useState([]);
   



    const fetchData=()=>{

      fetch(props.url+`&page=${page}`)
        .then((info) => {
          return info.json();
          
        })




        .then((data) =>  {
                          props.limit==="yes"?setitems(data.results.slice(0,6)):setitems(data.results)

                            settotalresults(data.total_results)
                          // console.log(data.results)
                          // console.log(page)
                          setpage(page+1)
                          
                          
                          //Total no. of articles on the page needed
                          // console.log()
                                              }
      );

      fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US"
      )
        .then((info) => {
          return info.json();
        })
        .then((data) => {setgenre(data.genres) });


    }






    useEffect(() => {

     fetchData();
      
         // eslint-disable-next-line 
    },[]);


    const no= ()=>{}
    const yes = (p) => {

      setpage(page+1);
      
      setTimeout(() => {
        
        console.log(page)
       
        
        fetch(props.url+`&page=${page}`)
        .then((info) => {
          return info.json();
        }).then(
          data => {
            setitems(items.concat(data.results))
          }
        )
  
        
      }, 1000);
     
      
           };



           const clicked=()=>{
            document.getElementById('leftmenu').className=" translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
           }
     
    



  return <div className={`${props.height}`} >


      
       <div onClick={clicked} id="moviestype" className={` ${props.display}  justify-center items-center md:text-5xl text-2xl md:mt-[50px] mt-[20px]   px-4 my-1 md:my-2` }>
       
       {props.moviestype}
        {/* <p className="md:w-[45px] w-[30px]" ><img src={filter} alt="" /></p> */}
        
         </div> 
       
      
      


     

      
  

  {/* FOR INFINITE SCROLL  */}

           
    <InfiniteScroll 
          dataLength={items.length}
          next={props.scroll==='no'?no:yes}
          hasMore={items.length !==totalresults }
          loader={props.scroll==='no'?"":<div className=" flex justify-center" ><img className=" md:w-[70px ] w-[40px] bg-transparent" src={Loader} alt="" /></div>}
          >

    <div className={`flex justify-center ${props.scroll}   ${props.wrap==='no'?'':'flex-wrap'} `}>
    {items.map(
      element => {
        return <Itemcard rounded={props.rounded} backdrop={element.backdrop_path} title={element.title} w={props.w} h={props.h} wimg={props.wimg} image={element.poster_path
        } id={element.id}  key={element.id}  date={element.release_date
        } genrenames={element.genre_ids.map(id=>  {return genre.map(details=>{ return id===details.id?details.name:' ' } )
      }
      )} />
       })}
        </div>
  </InfiniteScroll>


  
  


  </div>;
};

export default Item;

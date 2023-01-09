import React, { useEffect } from 'react'
import { useState } from 'react'
import arr from "../images/Leftarr.png"



const Trendingmovie = () => {


    const [trendmovie, settrendmovie] = useState({})
    const [collectionmovie, setcollectionmovie] = useState({})
 


    useEffect(() => {

        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=7e5e27e6b51bcfd87532d3a63a2c2646').then(data=> {return data.json()}).then(info=>{
          settrendmovie(info.results[0])
          console.log(info.results[0])    
         
          
          // .map((e)=>{ console.log(e.backdrop_path) })

          

          const a= 'https://image.tmdb.org/t/p/original'.concat(info.results[0].backdrop_path);
             
              document.getElementById('trendbg').style=`background: url(${a}); background-repeat: no-repeat no-repeat ;background-size: 100vw  ;  `


          

        })
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US&sort_by=revenue.desc').then(data=> { return data.json() }).then(info => {

        setcollectionmovie(info.results[0])

        const a= 'https://image.tmdb.org/t/p/original'.concat(info.results[0].backdrop_path);
             
              document.getElementById('collectionbg').style=`background: url(${a}); background-repeat: no-repeat no-repeat ;background-size: 100vw  ;  `
        })


        
        
      
    }, [])

    setTimeout(() => {
      document.getElementById('itemss').scrollLeft=document.getElementById('itemss').scrollLeft+1100;
      
    }, 4000);


    const rightarr=()=>{

      document.getElementById('itemss').scrollLeft=document.getElementById('itemss').scrollLeft+1100;
      
    }


    const leftarr=()=>{

      document.getElementById('itemss').scrollLeft=document.getElementById('itemss').scrollLeft-1100;
      
    }





  return (
    <p>
    <div className=' flex justify-around items-center h-[330px]  '>


    <div id='trendbg' className=' h-[480px]  min-w-[100vw] ' ></div>
    {/* <div id='collectionbg' className='h-[480px]  min-w-[100vw]' ></div> */}


    <div onClick={leftarr} id='leftarr' className=' opacity-70 cursor-pointer lg:max-w-[60px] lg:min-w-[60px] md:min-w-[80px] md:max-w-[80px] min-w-[50px] max-w-[50px] ' >
      <img src={arr} alt="" />
      
      
    </div>



    <div id='itemss' className=' scroll-smooth max-w-[1100px] overflow-hidden flex ' >

  

    

    <div className=' flex justify-around items-center min-w-[1100px] max-w-[1100px]  h-full ' >

      <div className='' >  
    <p id='trend1' className=' text-[20px] md:text-[35px] lg:text-[45px] text-white  ' >
     #1 Trending
    </p>
    <p className='text-white md:text-[55px]  text-[40px] lg:text-[78px]' id='trendname'>
      {trendmovie.original_title}
    </p>
      </div>

      <div className=' hidden md:flex ' >
        <a href={`/details/${trendmovie.id}/${trendmovie.original_title}`}><img id='trendimg' className=' rounded-lg lg:h-[250px]  max-w-[140px] min-w-[140px] md:max-w-[160px] md:min-w-[160px] lg:max-w-[180px] lg:min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(trendmovie.poster_path)} alt="" /></a>
      </div>


    </div>


    <div className=' flex justify-around items-center min-w-[1100px] max-w-[1100px]  h-full ' >

      <div className='' >  
    <p id='trend1' className=' text-[20px] md:text-[35px] lg:text-[45px] text-white  ' >
     #1 Highest Box Office
    </p>
    <p className='text-white md:text-[55px]  text-[40px] lg:text-[78px]' id='trendname'>
      {collectionmovie.original_title}
    </p>
      </div>

      <div className=' hidden md:flex ' >
        <a href={`/details/${collectionmovie.id}/${collectionmovie.original_title}`}><img id='trendimg' className=' rounded-lg lg:h-[250px]  max-w-[140px] min-w-[140px] md:max-w-[160px] md:min-w-[160px] lg:max-w-[180px] lg:min-w-[180px] ' src={'https://image.tmdb.org/t/p/original'.concat(collectionmovie.poster_path)} alt="" /></a>
      </div>


    </div>


    </div>










    <div onClick={rightarr} id='rightarr' className=' opacity-70 cursor-pointer lg:max-w-[60px] lg:min-w-[60px] md:min-w-[80px] md:max-w-[80px] min-w-[50px] max-w-[50px] ' >
      <img src={arr} alt="" />
      
    </div>



    </div>


   
    </p>
  )
}

export default Trendingmovie
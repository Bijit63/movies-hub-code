import React from 'react'
import { useEffect , useState } from 'react'

const Hhh = () => {

    const [movie,setmovie]= useState({})
    useEffect(() => {

        fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=7e5e27e6b51bcfd87532d3a63a2c2646').then(data=> {return data.json()}).then(info=>{
            setmovie(info.results[0])
            console.log(info.results[0])   }) 
      
    }, [])

    // const drag =()=>{
    //     document.getElementById('hh').className=' -translate-x-[50px] relative  bg-amber-600 rounded-b-[3px] '
    // }


    
    
  return (

    <></>

  )
}

export default Hhh
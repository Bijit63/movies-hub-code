import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext'
import { useParams } from 'react-router-dom'
import filter from '../images/Filter.png'



const SearchedMovies = () => {
  
  const query = useParams().searchquery;
  console.log(query)




   const a=useContext(NoteContext)


  return (
    <div className='min-h-[100vh] flex flex-col  ' >

        <div className='flex justify-between  items-center h-[40px] md:h-[70px] ' >
          <p className=' lg:w-[140px] md:w-[100px] w-[45px] ' > </p>
        <p className='  text-white md:text-3xl flex justify-center' >Search Results for {query}... </p>
        <p className=' lg:w-[140px] md:w-[100px] w-[45px] ' > <img className= '  lg:w-[40px] md:w-[35px] w-[28px]   ' src={filter} alt="" /> </p>
        </div>

        <div>{a.searchmovie(query)}</div>
        

    </div>
  )
}

export default SearchedMovies
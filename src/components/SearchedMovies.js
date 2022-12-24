import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext'


const SearchedMovies = () => {

   const a=useContext(NoteContext)


  return (
    <div className='min-h-[100vh]' >
        <div className=' md:my-[15px] md:mt-[40px] text-white md:text-3xl flex justify-center' >Search Results for {localStorage.getItem('search')}... </div>

        <div>{a.searchmovie()}</div>
        

    </div>
  )
}

export default SearchedMovies
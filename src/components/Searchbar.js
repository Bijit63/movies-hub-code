import React from 'react'
import search from "../images/searchicon.png"
import { useState } from "react"
import { useContext } from 'react'
import NoteContext from '../context/Notes/NoteContext'
import { Link } from 'react-router-dom'


const Searchbar = () => {

 const a=useContext(NoteContext)
    

  const [value, setvalue] = useState()

    const onchange=(event)=>{  
            setvalue(event.target.value )
          }

          const onsubmit=()=>{

            // a.searchname(value)
            localStorage.setItem('search',`${value}`)
          
            
          }

          const keypress=(e)=>{
            if(e.key==="Enter")
            {
              
              localStorage.setItem('search',`${value}`)
             
            }
          }
 

  return (
    <form id='searchbar' action={`/search=${value}`} className=' mx-auto my-[16px] flex justify-center rounded-full md:mt-[40px] border-black w-fit'>

 <input id='searchtext' onKeyPress={keypress}  className=' w-[200px] md:w-[450px] h-[30px] md:h-[50px] font-semibold border-[1px] text-center md:text-base text-sm rounded-r-full md:rounded-r-none rounded-l-full  bg-gray-200 bg-transparent text-white ' type="search" onChange={onchange}   placeholder='Search' /> 




         <a href={`/search=${value}`}> <div id='searchicon' onClick={onsubmit} className=' hidden cursor-pointer  bg-[#0e082437] h-[30px] md:h-[50px]  md:border-r-[1px] border-t-[1px] border-b-[1px] w-[25px] md:flex justify-center  md:rounded-r-full items-center md:w-[50px] border-white' >
        <img src={search} className=" h-[15px] md:h-[16px] rounded-r-2xl  " alt="" />

        </div></a>

        {/* {a.searchmovie(value)} */}
    </form>
  )
}

export default Searchbar
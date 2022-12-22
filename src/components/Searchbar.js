import React from 'react'
import search from "../images/searchicon.png"

const Searchbar = () => {
  return (
    <div id='searchbar' className=' mx-auto my-[16px] flex justify-center rounded-full md:mt-[40px] border-black w-fit'>


        <input id='searchtext'  className=' w-[200px] md:w-[450px] h-[30px] md:h-[50px] font-semibold border-[1px] text-center md:text-base text-sm rounded-r-full md:rounded-r-none rounded-l-full  bg-gray-200 bg-transparent text-white ' type="search" name="" placeholder='Search' />



        <div id='searchicon' className=' hidden cursor-pointer  bg-[#0e082437] h-[30px] md:h-[50px]  md:border-r-[1px] border-t-[1px] border-b-[1px] w-[25px] md:flex justify-center  md:rounded-r-full items-center md:w-[50px] border-white' >
        <img src={search} className=" h-[15px] md:h-[16px] rounded-r-2xl  " alt="" />

        </div>
    </div>
  )
}

export default Searchbar
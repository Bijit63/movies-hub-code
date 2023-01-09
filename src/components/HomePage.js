import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NoteContext from "../context/Notes/NoteContext";
import more from "../images/More.png"
  
         
         
         


const HomePage = () => {
  const a = useContext(NoteContext);
  return (
    <div
      id="homepage"
      className="md:text-5xl text-2xl  text-white mx-[15px] md:mx-[0px]  "
    >
      

      
      <div className=" mt-[8px] md:mt-[50px]  pb-[10px] md:pb-[20px] ">

        <div className=" flex  justify-between  items-center md:mx-[6vw] " >

       <p id="f1" className="   md:text-[40px] md:mx-[12px] mx-[6px]">Top-Rated Movies </p>
        <a href="/toprated-movies">  <button className=" flex items-center  text-[16px] lg:mr-[6px] text-sm md:px-[4px] px-[3px] py-[2px] rounded-md   md:py-1 font-medium  font-sans text-cyan-400 " >More<img className=" w-[10px] ml-[2px] md:w-[15px] md:ml-[4px]  md:mt-[3px] " src={more} alt="" /> </button></a>

        </div>
        <p id="hom2" className="flex overflow-x-auto max-w-fit mx-auto " > {a.movies("top_rated")}  </p>

      </div>
      <div className=" mt-[8px] md:mt-[20px]  pb-[10px] md:pb-[20px] ">

        <div className=" flex justify-between  items-center md:mx-[6vw] " >

       <p id="f" className="   md:text-[40px] md:mx-[12px] mx-[6px]"> Now Playing </p>
        <a href="/latest-movies">  <button className="  flex items-center text-[16px] lg:mr-[6px] text-sm md:px-[4px] px-[3px] py-[2px] rounded-md   md:py-1  font-medium font-sans text-cyan-400 " >More <img className=" w-[10px] ml-[2px] md:w-[15px] md:ml-[4px]  md:mt-[3px] " src={more} alt="" /> </button></a>

        </div>
        <p id="hom1" className="flex overflow-x-auto  max-w-fit mx-auto " > {a.movies("now_playing")} </p>
        
      </div>


      <div className=" mt-[8px] md:mt-[20px]  pb-[10px] md:pb-[20px] ">

        <div className=" flex  justify-between  items-center md:mx-[6vw]  " >

       <p id="f2" className="   md:text-[40px] md:mx-[12px] mx-[6px]"> Upcoming Movies </p>
        <a href="/upcoming-movies">  <button className=" flex items-center  text-[16px] lg:mr-[6px] text-sm md:px-[4px] px-[3px] py-[2px] rounded-md   md:py-1  font-medium font-sans text-cyan-400 " >More<img className=" w-[10px] ml-[2px] md:w-[15px] md:ml-[4px]  md:mt-[3px] " src={more} alt="" /> </button></a>

        </div>
        <p id="hom3" className="flex overflow-x-auto max-w-fit mx-auto " > {a.movies("upcoming")}  </p>

      </div>


      <div className=" mt-[8px] md:mt-[20px]  pb-[10px] md:pb-[20px] ">

        <div className=" flex  justify-between items-center  md:mx-[6vw] " >

       <p id="f3" className="   md:text-[40px] md:mx-[12px] mx-[6px]"> Popular Movies </p>
        <a href="/popular-movies">  <button className=" flex items-center text-[16px]  lg:mr-[6px] text-sm md:px-[4px] px-[3px] py-[2px] rounded-md   md:py-1  font-medium font-sans text-cyan-400 " >More<img className=" w-[10px] ml-[2px] md:w-[15px] md:ml-[4px]  md:mt-[3px] " src={more} alt="" /> </button></a>

        </div>
        <p id="hom4" className="flex overflow-x-auto max-w-fit mx-auto " > {a.movies("popular")}  </p>

      </div>




      
    
      
    </div>
  );
};

export default HomePage;

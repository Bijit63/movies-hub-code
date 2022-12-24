import React, { useContext } from "react";
import { Link } from "react-router-dom";

import NoteContext from "../context/Notes/NoteContext";

const HomePage = () => {
  const a = useContext(NoteContext);
  return (
    <div
      id="homepage"
      className="md:text-5xl text-2xl text-white  mx-[20px] md:mx-[70px]  "
    >
      <div className=" mt-[8px] md:mt-[50px] border-b-[2px] md:border-b-[4px] pb-[10px] md:pb-[20px] ">
       <p className="md:ml-[14px] ml-[4px]"> Latest Movies </p>
        <p> {a.movies("now_playing")} </p>
        <Link to="/latest-movies"> <p className=" text-center mb-[20px] " > <button className=" md:text-lg md:px-2 md:py-1 rounded-lg shadow-lg  font-sans bg-blue-900 " >More</button> </p> </Link>
        
      </div>
      <div className="mt-[8px] md:mt-[50px] border-b-[2px] md:border-b-[4px] pb-[10px] md:pb-[20px] ">
       <p className="md:ml-[14px] ml-[4px]"> Top Rated  </p>
        <p> {a.movies("top_rated")} </p>
        <Link to="/toprated-movies"> <p className=" text-center mb-[20px] " ><button className=" md:text-lg md:px-2 md:py-1 rounded-lg shadow-lg  font-sans bg-blue-900 " >More</button></p> </Link>
        
      </div>
      <div className=" mt-[8px] md:mt-[50px] border-b-[2px] md:border-b-[4px] pb-[10px] md:pb-[20px] ">
        <p className="md:ml-[14px] ml-[4px]"> Upcoming Movies  </p>
        <p> {a.movies("upcoming")} </p>
        <Link to="/upcoming-movies"> <p className=" text-center mb-[20px] " ><button className=" md:text-lg md:px-2 md:py-1 rounded-lg shadow-lg  font-sans bg-blue-900 " >More</button></p> </Link>
        
      </div>

      <div className=" mt-[8px] md:mt-[50px] border-b-[2px] md:border-b-[4px] pb-[10px] md:pb-[20px] ">
       <p className="md:ml-[14px] ml-[4px]"> Popular Movies  </p>
        <p> {a.movies("popular")} </p>
        <Link to="/popular-movies"> <p className=" text-center mb-[20px] " ><button className=" md:text-lg md:px-2 md:py-1 rounded-lg shadow-lg  font-sans bg-blue-900 " >More</button></p> </Link>
        
      </div>
    </div>
  );
};

export default HomePage;

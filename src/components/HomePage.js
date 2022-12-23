import React, { useContext } from "react";

import NoteContext from "../context/Notes/NoteContext";

const HomePage = () => {
  const a = useContext(NoteContext);
  return (
    <div
      id="homepage"
      className="md:text-5xl text-2xl text-white  mx-[20px] md:mx-[70px]  "
    >
      <div className=" my-[30px] md:my-[45px] md:mb-[45px] ">
       <p className="md:ml-[14px] ml-[4px]"> Latest Movies </p>
        {a.movies("now_playing")}
        <hr className=" border-2 md:w-[1350px] w-[344px] md:ml-[14px] ml-[4px] md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>
      <div className=" my-[30px] md:my-[45px] ">
       <p className="md:ml-[14px] ml-[4px]"> Top Rated  </p>
        {a.movies("top_rated")}
        <hr className=" border-2 md:w-[1350px] w-[344px] md:ml-[14px] ml-[4px] md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>
      <div className=" my-[30px] md:my-[45px] ">
       <p className="md:ml-[14px] ml-[4px]"> Upcoming Movies  </p>
        {a.movies("upcoming")}
        <hr className=" border-2 md:w-[1350px] w-[344px] md:ml-[14px] ml-[4px] md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>

      <div className=" my-[30px] md:my-[45px] ">
       <p className="md:ml-[14px] ml-[4px]"> Popular Movies  </p>
        {a.movies("popular")}
        <hr className=" border-2 md:w-[1350px] w-[344px] md:ml-[14px] ml-[4px] md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>
    </div>
  );
};

export default HomePage;

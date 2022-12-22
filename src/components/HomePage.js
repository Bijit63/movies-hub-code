import React, { useContext } from "react";

import NoteContext from "../context/Notes/NoteContext";

const HomePage = () => {
  const a = useContext(NoteContext);
  return (
    <div
      id="homepage"
      className="md:text-5xl text-2xl text-white  px-[20px] md:px-[70px]  "
    >
      <div className=" my-[30px] md:my-[45px] md:mb-[45px] ">
        Latest Movies
        {a.movies("now_playing")}
        <hr className=" border-2 md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>
      <div className=" my-[30px] md:my-[45px] ">
        Top Rated {a.movies("top_rated")}
        <hr className=" border-2 md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>
      <div className=" my-[30px] md:my-[45px] ">
        Upcoming Movies {a.movies("upcoming")}
        <hr className=" border-2 md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>

      <div className=" my-[30px] md:my-[45px] ">
        Popular Movies {a.movies("popular")}
        <hr className=" border-2 md:h-[2px] text-black border-white rounded-xl bg-white " />
      </div>
    </div>
  );
};

export default HomePage;

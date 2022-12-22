import React from 'react'


const Itemcard = (props) => {



   
    

  
  return (
    <div id='card' className=" border-[1px] border-white  bg-white min-w-[170px] max-w-[170px] max-h-[250px] min-h-[250px] md:min-w-[247px] md:max-w-[247px] md:min-h-[370px] md:max-h-[370px] h-fit rounded-lg shad  md:my-8 my-4 cursor-pointer  "  >


      
     
      
      
 


         <div className=" md:min-h-[285px] md:max-h-[285px] min-h-[180px] max-h-[180px] md:my-0  items-center " >

          <div id='rating' className='  z-10 absolute font-bold flex justify-center translate-x-[135px] translate-y-[10px] md:text-sm rounded-full text-xs md:p-[5px] md:max-w-[30px] md:min-w-[30px] p-[4px] md:pb-[6px] md:translate-x-[205px] md:translate-y-[10px] bg-amber-500 shadow-md' >
           {parseFloat(props.rating)}
           </div>


          <img id='image' className=" max-h-[180px] min-h-[180px]  max-w-[168px] min-w-[168px]  md:max-h-[285px] md:min-h-[285px] md:max-w-[245px] md:min-w-[245px] mx-auto rounded-t-md" src={props.image!=null?"https://www.themoviedb.org/t/p/w440_and_h660_face"+props.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png"}  alt="" />


       </div>



      

   
   
        

        <div id='bottomcard' className=' bg-black  flex flex-col  font-sans  text-white max-h-[70px] min-h-[70px] md:max-h-[85px] rounded-b-lg md:min-h-[85px] '>
           {/* Rating - {props.rating}({props.total}) */}


           <div  className='text-black md:text-[17px] md:h-[45px] h-[38px] text-xs flex-col font-semibold flex md:font-extrabold items-center justify-center bg-amber-600 md:pt-[7px] pt-[2px] ' >
            
            <div className='  ' id='title' >{props.title.length<28?props.title:props.title.slice(0,27)+"..."}</div>

           <div className='date text-[10px] md:text-xs text-center font-bold md:my-[2px] text-black  pb-[1px] '>({props.date })</div>
           </div>



        

        <div id='genre' className='date md:font-semibold h-[20px] hidden   md:h-[45px] items-center text-xs md:flex justify-center  rounded-b-lg '>  {props.genrenames.length>4?props.genrenames.slice(0,4):props.genrenames }</div>
        

        <div id='genre' className='date md:font-semibold h-[32px] md:hidden  md:h-[35px] items-center text-xs flex justify-center  rounded-b-lg '>  {props.genrenames.length>2?props.genrenames.slice(0,2):props.genrenames }</div>


           {/* <div className='text-xs font-normal ' >{
        props.desc!=null?(props.desc.length>80?props.desc.slice(0,80)+ "....." :props.desc):"empty description"
        }</div> */}
           
        </div>



   



      </div>
  )
}

export default Itemcard
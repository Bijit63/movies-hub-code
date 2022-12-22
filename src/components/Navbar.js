import React from 'react'
// import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

const Navbar = () => {

    const leftm=()=>{
        document.getElementById('leftmenu').className="flex translate-x-0 absolute ease-in-out duration-100 top-0 right-0 flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
    }
    const crossclicked=()=>{
        document.getElementById('leftmenu').className="hidden translate-x-[1000px] ease-in-out duration-100 absolute top-0 right-0 flex flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]"
    }
    



    const toggle = ()=>{
        
        document.getElementById('bottomnav').className==='ease-in-out duration-100 -z-20 -translate-y-[25px] md:-translate-y-[55px] flex flex-col justify-center relative'?document.getElementById('bottomnav').className='ease-in-out duration-100 -z-20 translate-y-0 flex flex-col justify-center relative'  :document.getElementById('bottomnav').className='ease-in-out duration-100 -z-20 -translate-y-[25px] md:-translate-y-[55px] flex flex-col justify-center relative'

        document.getElementById('bottomnav').className==='ease-in-out duration-100 -z-20 -translate-y-[25px] md:-translate-y-[55px] flex flex-col justify-center relative'?document.getElementById('arrimg').className="text-black font-extrabold fa-solid fa-angle-down"  :document.getElementById('arrimg').className=" text-black font-extrabold fa-solid fa-angle-up"
        

        
    }

    
        
    


  return (
    <nav  className='  z-20 sticky  top-0 md:h-[120px] h-[90px]  '>
        <ul id='navbar' className=' bg-amber-600 md:h-[80px]   h-[60px] z-10 box-border shadow-md flex justify-between items-center '>


          



            <li className='text-white   md:text-5xl text-2xl flex items center  '> <img className=' w-[32px] mb-[6px] mx-1 md:mx-3 md:w-[60px] md:mb-[9px] ' src={logo} alt="" /> <button id='heading'  >Movies - Hub </button> </li>



            {/* <li id='rightside' className='mr-6 text-white relative cursor-pointer '>
                More  
                <ul id='rightmenu' className=" right-0 hidden w-[200px] bg-white text-black absolute z-0">
                    <li>englis</li>
                    <li>hindi</li>
                    <li>tamil</li>
                    <li>telegu</li>
                </ul>

            
            </li> */}


              <li className='md:mr-7 mr-4 text-white  ' >
                <button onClick={leftm} className=" md:h-[40px] ">
            <hr className=' border-2 rounded-lg my-[7px] bg-white   w-[30px] md:w-[40px] h-[2px] md:h-[3px]'/>
            <hr className=' border-2 rounded-lg my-[7px] bg-white   w- [30px] md:w-[40px] h-[2px] md:h-[3px]'/>
            <hr className=' border-2 rounded-lg my-[7px] bg-white   w-[30px] md:w-[40px] h-[2px] md:h-[3px]'/>
           
                </button>





                
            <ul id='leftmenu'  className="hidden translate-x-[1000px] absolute top-0 right-0 flex-col  bg-[#82C3EC] h-[100vh] w-[200px] md:w-[350px]">

                
                    <li  className=' h-[60px] md:h-[80px] border-b-2 bg-black my-0 flex flex-row' >  <span id='cross' className=' ml-[15px] md:ml-[28px] md:text-[40px] text-[28px] items-center flex cursor-pointer ' onClick={crossclicked} >x</span> </li>

                    
                    <li className=' mr-5 md:mr-9 ml-12 md:ml-[70px] text-base md:text-xl my-4  ' > <button className=' active:text-yellow-200 hover:text-white text-black ' > INDIA </button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    <li className=' mr-5 md:mr-9 ml-12 md:ml-[70px] text-base md:text-xl my-4  ' > <button className=' active:text-yellow-200 hover:text-white text-black ' > USA </button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    <li className=' mr-5 md:mr-9 ml-12 md:ml-[70px] text-base md:text-xl my-4  ' > <button className=' active:text-yellow-200 hover:text-white text-black ' >  AUSTRALIA  </button> <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    <li className=' mr-5 md:mr-9 ml-12 md:ml-[70px] text-base md:text-xl my-4  ' > <button className=' active:text-yellow-200 hover:text-white text-black ' > FRANCE </button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    <li className=' mr-5 md:mr-9 ml-12 md:ml-[70px] text-base md:text-xl my-4  ' > <button className=' active:text-yellow-200 hover:text-white text-black ' > GERMANY </button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                    
                    <li className=' mr-5 md:mr-9 ml-12 md:ml-[70px] text-base md:text-xl my-4  ' > <button className=' active:text-yellow-200 hover:text-white text-black ' > CHINA </button>  <hr className="text-white mt-1 border-1 mr-2 " /> </li>
                  
                    <li className=' mr-5 md:mr-9 ml-12 md:ml-[70px] text-black text-base md:text-base my-4   ' >Follow us on</li>


                    <li className=' text-sm text-center md:text-lg my-1' >
                        <ul className='flex justify-center space-x-4 ml-1 md:space-x-7 md:mr-[50px]'>
                            <li className='md:min-w-[35px]  md:max-w-[35px] max-w-[25px] min-w-[25px] ' > <img className=' rounded-lg ' src="https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png" alt=""   /> </li>
                            <li className='md:min-w-[35px]  md:max-w-[35px] max-w-[25px] min-w-[25px] ' > <img className=' rounded-lg ' src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-icon-png-image_6315986.png" alt=""   /> </li>
                            <li className='md:min-w-[35px]  md:max-w-[35px] max-w-[25px] min-w-[25px] ' > <img className=' bg-white rounded-lg ' src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt=""   /> </li>
                        </ul>
                    </li>

                </ul>
            
            </li>
        </ul>





        <div id='bottomnav' className='-z-20 -translate-y-[25px] md:-translate-y-[55px]  flex flex-col justify-center relative'>

            <div id='genreNavbar' className=' h-[25px] md:h-[55px] shadow-black shadow-xs box-border  bg-white text-[#4b3073] font-medium text-xs md:text-base md:font-semibold flex border-b-[1px] border-[#F0BB0C] justify-around items-center  ' >

        <li className='cursor-pointer text-white items-center flex hover:bg-amber-600 hover:text-black active:text-amber-600 px-2 md:px-5 h-[25px] md:h-[55px] ' >Horror</li>
        <li className='cursor-pointer text-white items-center flex hover:bg-amber-600 hover:text-black active:text-amber-600 px-2 md:px-5 h-[25px] md:h-[55px] ' >Comedy</li>
        <li className='cursor-pointer text-white items-center flex hover:bg-amber-600 hover:text-black active:text-amber-600 px-2 md:px-5 h-[25px] md:h-[55px] ' >Adventurous</li>
        <li className='cursor-pointer text-white items-center flex hover:bg-amber-600 hover:text-black active:text-amber-600 px-2 md:px-5 h-[25px] md:h-[55px] ' >Action</li>
        <li className='cursor-pointer text-white items-center flex hover:bg-amber-600 hover:text-black active:text-amber-600 px-2 md:px-5 h-[25px] md:h-[55px] ' >Thriller</li>
        <li className='cursor-pointer text-white items-center flex hover:bg-amber-600 hover:text-black active:text-amber-600 px-2 md:px-5 h-[25px] md:h-[55px] ' >Drama</li>
            </div>



        <div id='togglearrow' onClick={toggle} className=' flex justify-center ' >
        <div className="md:h-[15px] md:w-[20px] h-[13px] w-[20px] cursor-pointer rounded-b-full bg-[#F0BB0C]  flex justify-center items-center " > <i id='arrimg' className=" text-black font-extrabold fa-solid fa-angle-down" ></i></div>
        </div>


        </div>


    

       
        
    </nav>
  )
}

export default Navbar
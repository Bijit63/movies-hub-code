import React from 'react'
import { useEffect , useState } from 'react'

const Iteminfo = (props) => {

    const [details, setdetails] = useState({})
    const [year,setyear] = useState()
    const [rating,setrating] = useState()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US`).then(data=> {return data.json()}).
        
        then(info=> {setdetails(info)
            const date= new Date(info.release_date);
            setyear(date.getFullYear())
          
            const rate = info.vote_average
           
            setrating(rate.toString().slice(0,3))
          }  )


        

        
          
          
    
        
      
    }, [])  

    

    
    

    



    

  return (
    <div id='iteminfo' className='min-h-[100vh] text-white flex mt-3 w-fit mx-auto ' >
         

         <div className='  md:w-[800px] md:pl-[50px] md:pr-[60px] ' >


        <div id='infotitle' className='  h-fit py-2   mx-auto   text-4xl   ' >
            {details.original_title + '  '+ `( ` +year+ ` )`}
        </div>
        <hr className=' md:mt-[5px] md:border-[1px] bg-white ' />

        <div className='flex flex-col  mt-6  ' >
           <p className=' md:text-lg font-serif' >Summary :</p> 
            <p id='infosummary' className=' md:mt-[5px] ' >{details.overview}</p>  


        </div >



        
          
        <div className=' flex  my-3 items-center         ' >  <p className='font-semibold text-lg ' >{details.status} -  </p>   <p>{details.release_date}</p> </div>

        <div className=' flex  my-3 items-center         ' >  <p className='font-semibold text-lg ' >Runtime -  </p> <p>{details.runtime} minutes</p> </div>


        <div className=' flex  my-3 items-center        ' >  <p className='font-semibold text-lg ' >Ratings -  </p> <p>{rating} ({details.vote_count})</p> </div>
        
        
        

       

        <div className='flex  my-3 items-center       ' >  <p className='font-semibold text-lg ' >Budget -  </p> <p>{details.budget+' $'}</p> </div>
        <div className='flex  my-3 items-center       ' >  <p className='font-semibold text-lg ' >Box Office Collection -  </p> <p>{details.revenue+' $'}</p> </div>

        



        <div className='md:mt-[30px] bg-amber-600 text-black font-semibold rounded-xl mx-auto w-fit md:px-[10px] md:py-[5px] '>

         <a href={details.homepage} target='_blank' >Book Tickets Now</a>  
        </div>



        <div className=' md:my-[20px] ' >

        <div className=' text-center  flex flex-col items-center ' >

          <p id='infoprod' className='text-2xl w-fit b md:mb-[6px] md:mt-[13px] border-b-[2px] ' >Production company</p>
          {/* <img className=' border-black border-2 md:w-[200px] bg-white md:mt-[4px]'  src={"https://image.tmdb.org/t/p/original"+details.production_companies[0].logo_path} alt="" /> */}

        </div>

        </div>






        </div>

        <div className='  flex justify-center ' >
        <img className=' border-2 shadow-xl md:max-h-[500px] md:min-h-[500px] md:max-w-[390px] md:min-w-[390px] ' src={'https://www.themoviedb.org/t/p/w440_and_h660_face'   +details.poster_path} alt="" />
        </div>


       

    </div>
  )
}

export default Iteminfo
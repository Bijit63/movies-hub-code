import React, { useEffect } from 'react'

const LoadingBar = () => {

    useEffect(()=>{

        
            
            document.getElementById('load').className==='bg-green-700 h-[5px] fixed top-0 left-0 w-[100vw]  z-30 duration-500 ease-in-out'?document.getElementById('load').className='bg-green-700 h-[5px] fixed top-0 left-0 w-[0vw]  z-30':document.getElementById('load').className='bg-green-700 h-[5px] fixed top-0 left-0 w-[100vw]  z-30 duration-1000 ease-in'

            console.log('hello')
       
        




    },[])
  return (
    <div id='load' className='bg-green-700 h-[5px] fixed top-0 left-0 w-[0vw]  z-30 '  >
        
    </div>
  )
}

export default LoadingBar
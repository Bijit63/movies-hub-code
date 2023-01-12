import React from 'react'

const Contact = () => {
  return (
    <div className=' flex flex-col items-center  mt-[30px]'>

        <h1 id='contacth1' className='text-white md:text-[38px] text-center  ' >Contact Us</h1>
        <div id='fullname' className=' md:w-[680px] flex justify-between md:mt-[30px] ' >
            <input type="text" name='FirstName' className='bg-transparent focus: pl-[30px] w-[330px] pr-[30px] rounded-sm text-white py-[10px] '  placeholder='First Name' />
            <input type="text" name='LastName' className='bg-transparent focus: pl-[30px] w-[330px] pr-[30px] rounded-sm text-white py-[10px] '  placeholder='Last Name' />
        </div>


        <div id='contactdetails' className=' md:w-[680px] flex justify-between md:mt-[30px] ' >
            <input type="email" name='Email' className='bg-transparent focus: pl-[30px] w-[330px] pr-[30px] rounded-sm text-white py-[10px] '  placeholder='Email' />
            <input type="text" name='Phone' className='bg-transparent focus: pl-[30px] w-[330px] pr-[30px] rounded-sm text-white py-[10px] '  placeholder='Phone' />
        </div>

       <div id='address' className='mt-[30px]' >
       <textarea  rows='2' type="text" name='Address' className='bg-transparent  focus: pl-[30px] w-[680px] pr-[30px] rounded-sm text-white py-[10px] '  placeholder='Address' />
       </div>

       <div id='message' className='mt-[30px]' >
       <textarea rows='6' type="text" name='Message' className='bg-transparent focus: pl-[30px] w-[680px] pr-[30px] rounded-sm text-white py-[10px] '  placeholder='* Type your message here' />
       </div>

        <button id='submit' className='text-black font-semibold mt-[30px] bg-white px-[10px] py-[2px] rounded-sm '> Submit </button>
        
    </div>
  )
}

export default Contact